import { binary, createTree } from "../index";

describe("test", () => {
  test("normal", () => {
    expect(binary([1, 2, 3])).toEqual({
      left: createTree(2),
      right: createTree(3),
      val: 1,
    });
  });

  test("return undefined when input is empty array", () => {
    const node = binary([]);
    expect(node).toEqual(undefined);
  });
});
