export default function merge(obj = {}, defaults) {
  for (const key in defaults) {
    // objを優先
    if (typeof obj[key] === "undefined") {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
