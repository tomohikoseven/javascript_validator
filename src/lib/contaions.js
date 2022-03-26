import assertString from "./util/assertString";
import toString from "./util/toString";
import merge from "./util/merge";

const defaultContainsOptions = {
  ignoreCase: false, // false:文字の大小を区別する.
  minOccurrences: 1, // 文字列が含まれる数
};

export default function contains(str, elem, options) {
  assertString(str);
  options = merge(options, defaultContainsOptions);

  if (options.ignoreCase) {
    return (
      str.toLowerCase().split(toString(elem).toLowerCase()).length >
      options.minOccurrences
    );
  }

  // splitの結果(配列数)がminOccurrencesより大きいならば、
  // 対象文字列が含まれているということ。
  return str.split(toString(elem)).length > options.minOccurrences;
}
