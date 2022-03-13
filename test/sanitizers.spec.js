import validator from "../src/index.js";
import { format } from "util";

function test(options) {
  let args = options.args || [];
  // unshift() メソッドは、配列の最初に 1 つ以上の要素を追加し、新しい配列の長さを返します。
  args.unshift(null);

  Object.keys(options.expect).forEach((input) => {
    args[0] = input;
    let result = validator[options.sanitizer](...args);
    let expected = options.expect[input];
    if (isNaN(result) && !result.length && isNaN(expected)) {
      return;
    }

    if (result !== expected) {
      let warning = format(
        'validator.%s(%s) returned "%s" but should have returned "%s"',
        options.sanitizer,
        args.join(", "),
        result,
        expected
      );

      throw new Error(warning);
    }
  });
}

describe("validator.", () => {
  it("escape.", () => {
    test({
      sanitizer: "escape",
      expect: {
        "Backtick: `": "Backtick: &#96;",
      },
    });
  });
});
