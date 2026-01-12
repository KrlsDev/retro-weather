export function getSvgCodeByIconCode(code: string): string|null {
  const codeToSvgMap = new Map<string, string>([
    ["01", "svg-clear"],
    ["02", "svg-few-clouds"],
    ["03", "svg-scattered-clouds"],
    ["04", "svg-broken-clouds"],
    ["09", "svg-shower-rain"],
    ["10", "svg-rain"],
    ["11", "svg-thunderstorm"],
    ["13", "svg-snow"],
    ["50", "svg-mist"],
  ]);

  const svgCode = codeToSvgMap.get(code.substring(0, 2))

  console.log(svgCode)
  return svgCode ?? null;
}
