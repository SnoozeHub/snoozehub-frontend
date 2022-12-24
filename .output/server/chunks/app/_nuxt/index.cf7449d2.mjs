const TagsWithInnerContent = ["script", "style", "noscript"];
const UniqueTags = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];
const ArrayMetaProperties = [
  "og:image",
  "og:video",
  "og:audio",
  "og:locale:alternate",
  "video:actor",
  "video:director",
  "video:writer",
  "video:tag",
  "article:author",
  "article:tag",
  "book:tag",
  "book:author",
  "music:album",
  "music:musician"
];
function tagDedupeKey(tag) {
  const { props, tag: tagName } = tag;
  if (UniqueTags.includes(tagName))
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  const name = ["id"];
  if (tagName === "meta")
    name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props[n] !== "undefined") {
      const val = String(props[n]);
      if (ArrayMetaProperties.findIndex((p) => val.startsWith(p)) !== -1)
        return false;
      return `${tagName}:${n}:${val}`;
    }
  }
  return false;
}
async function renderDOMHead(head, options = {}) {
  const ctx = { shouldRender: true };
  await head.hooks.callHook("dom:beforeRender", ctx);
  if (!ctx.shouldRender)
    return;
  const dom = options.document || window.document;
  const staleSideEffects = head._popSideEffectQueue();
  head.headEntries().map((entry) => entry._sde).forEach((sde) => {
    Object.entries(sde).forEach(([key, fn]) => {
      staleSideEffects[key] = fn;
    });
  });
  const renderTag = (tag, entry) => {
    var _a;
    if (tag.tag === "title" && tag.children) {
      dom.title = tag.children;
      return dom.head.querySelector("title");
    }
    const tagRenderId = tag._d || tag._p;
    const markSideEffect = (key, fn) => {
      key = `${tagRenderId}:${key}`;
      if (entry)
        entry._sde[key] = fn;
      delete staleSideEffects[key];
    };
    const setAttrs = ($el, sideEffects = true) => {
      Object.entries(tag.props).forEach(([k, value]) => {
        value = String(value);
        const attrSdeKey = `attr:${k}`;
        if (k === "class") {
          for (const c of value.split(" ")) {
            const classSdeKey = `${attrSdeKey}:${c}`;
            sideEffects && markSideEffect(classSdeKey, () => $el.classList.remove(c));
            if (!$el.classList.contains(c))
              $el.classList.add(c);
          }
          return;
        }
        if (sideEffects && !k.startsWith("data-h-"))
          markSideEffect(attrSdeKey, () => $el.removeAttribute(k));
        if ($el.getAttribute(k) !== value)
          $el.setAttribute(k, value);
      });
      if (TagsWithInnerContent.includes(tag.tag) && $el.innerHTML !== (tag.children || ""))
        $el.innerHTML = tag.children || "";
    };
    if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs") {
      const $el = dom[tag.tag === "htmlAttrs" ? "documentElement" : "body"];
      setAttrs($el);
      return $el;
    }
    let $newEl = dom.createElement(tag.tag);
    setAttrs($newEl, false);
    let $previousEl = head._elMap[tagRenderId];
    const $target = dom[((_a = tag.tagPosition) == null ? void 0 : _a.startsWith("body")) ? "body" : "head"];
    if (!$previousEl && tag._hash) {
      $previousEl = $target.querySelector(`${tag.tag}[data-h-${tag._hash}]`);
    }
    if (!$previousEl) {
      for (const $el of tag.tagPosition === "bodyClose" ? [...$target.children].reverse() : $target.children) {
        const elTag = $el.tagName.toLowerCase();
        if (elTag !== tag.tag)
          continue;
        const key = tagDedupeKey({
          tag: elTag,
          props: $el.getAttributeNames().reduce((props, name) => ({ ...props, [name]: $el.getAttribute(name) }), {})
        });
        if (key === tag._d || $el.isEqualNode($newEl)) {
          $previousEl = $el;
          break;
        }
      }
    }
    const markEl = ($el) => {
      head._elMap[tagRenderId] = $el;
      markSideEffect("el", () => {
        $el == null ? void 0 : $el.remove();
        delete head._elMap[tagRenderId];
      });
    };
    if ($previousEl) {
      markEl($previousEl);
      setAttrs($previousEl, false);
      return $previousEl;
    }
    switch (tag.tagPosition) {
      case "bodyClose":
        $newEl = dom.body.appendChild($newEl);
        break;
      case "bodyOpen":
        $newEl = dom.body.insertBefore($newEl, dom.body.firstChild);
        break;
      case "head":
      default:
        $newEl = dom.head.appendChild($newEl);
        break;
    }
    markEl($newEl);
    return $newEl;
  };
  for (const tag of await head.resolveTags()) {
    const entry = head.headEntries().find((e) => e._i === tag._e);
    const renderCtx = { $el: null, shouldRender: true, tag, entry, queuedSideEffects: staleSideEffects };
    await head.hooks.callHook("dom:beforeRenderTag", renderCtx);
    if (!renderCtx.shouldRender)
      continue;
    renderCtx.$el = renderTag(renderCtx.tag, renderCtx.entry);
    await head.hooks.callHook("dom:renderTag", renderCtx);
  }
  Object.values(staleSideEffects).forEach((fn) => fn());
}
let domUpdatePromise = null;
async function debouncedRenderDOMHead(head, options = {}) {
  function doDomUpdate() {
    domUpdatePromise = null;
    return renderDOMHead(head, options);
  }
  const delayFn = options.delayFn || ((fn) => setTimeout(fn, 10));
  return domUpdatePromise = domUpdatePromise || new Promise((resolve) => delayFn(() => resolve(doDomUpdate())));
}

export { debouncedRenderDOMHead, domUpdatePromise, renderDOMHead };
//# sourceMappingURL=index.cf7449d2.mjs.map
