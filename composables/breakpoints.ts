export function useComputedWidth(width: Number): string {
  if (width > 1600) return "1600px";
  else if (width > 1100) return "1100px";
  else if (width > 800) return "800px";
  return "400px";
}
