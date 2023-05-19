import it from "../locales/it.json";
import en from "../locales/en.json";
import { createI18n } from "vue-i18n";

type MessageSchema = typeof en;

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n<[MessageSchema], "it" | "en">({
    legacy: false,
    locale: "en",
    messages: {
      en,
      it,
    },
  });
  vueApp.use(i18n);
});
