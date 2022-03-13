import validator from "../src/index.js";
//const validator = require("../src/index");

describe("validator.", () => {
  describe("equals", () => {
    it.each([
      // ["テストケース","入力文字列","比較対象", テスト期待値]
      ["同じ文字列を比較すると、trueが返却されること.", "Abc", "Abc", true],
      ["異なる文字列を比較すると、falseが返却されること.", "Abc", "123", false],
    ])("%s", (test_case, input, comp, expected) => {
      expect(validator.equals(input, comp)).toBe(expected);
    });
  });
});
