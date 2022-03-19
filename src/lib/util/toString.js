export default function toString(input) {
  /*
  typeof Undefined => "undefined"
         Null => "object"
         論理値 => "boolean"
         Number => "number"
         BigInt => "bigint"
         文字列 => "string"
         関数 => "function"
         その他 => "object"
  */
  // null以外のオブジェクトの場合
  if (typeof input === "object" && input !== null) {
    if (typeof input.toString === "function") {
      input = input.toString();
    } else {
      // オブジェクトはすべて以下で文字列化する
      input = "[object Object]";
    }
  } else if (
    input === null ||
    typeof input === "undefined" ||
    // isNaN: 数値でないならtrue かつ 長さが0
    (isNaN(input) && !input.length)
  ) {
    input = "";
  }
  return String(input);
}
