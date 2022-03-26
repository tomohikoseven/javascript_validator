import validator from "../src/index.js";

describe("validator.", () => {
  describe("equals", () => {
    const equals_test_case = [
      // ["テストケース","入力文字列","比較対象", テスト期待値]
      ["同じ文字列を比較すると、trueが返却されること.", "Abc", "Abc", true],
      ["異なる文字列を比較すると、falseが返却されること.", "Abc", "123", false],
    ];
    it.each(equals_test_case)("%s", (test_case, input, comp, expected) => {
      expect(validator.equals(input, comp)).toBe(expected);
    });
  });

  describe("contains", () => {
    const contains_test_case_no_options = [
      // ["テストケース","入力文字列","比較対象", テスト期待値]
      [
        "対象文字列が含まれていない場合、falseが返却されること.",
        "Abc",
        "d",
        false,
      ],
      [
        "対象文字列が含まれていない場合、falseが返却されること.",
        "Abc",
        "B",
        false,
      ],
      ["対象文字列が含まれている場合、trueが返却されること.", "Abc", "b", true],
    ];
    it.each(contains_test_case_no_options)(
      "%s",
      (test_case, input, comp, expected) => {
        expect(validator.contains(input, comp)).toBe(expected);
      }
    );

    const options = { ignoreCase: true };
    const contains_test_case_options = [
      // ["テストケース","入力文字列","比較対象", "引数オプション", テスト期待値]
      [
        "文字の大小を区別せず、対象文字列が含まれている場合、 trueが返却されること.",
        "ABc",
        "b",
        options,
        true,
      ],
      [
        "文字の大小を区別せず、対象文字列が含まれていない場合、falseが返却されること.",
        "ABc",
        "d",
        options,
        false,
      ],
    ];
    it.each(contains_test_case_options)(
      "%s",
      (test_case, input, comp, option, expected) => {
        expect(validator.contains(input, comp, option)).toBe(expected);
      }
    );
  });
});
