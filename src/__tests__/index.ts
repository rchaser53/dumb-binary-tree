import { binary, createTree } from "../index";

describe("test", () => {
  test("normal", () => {
    expect(binary([1, 2, 3])).toEqual({
      left: createTree(2),
      right: createTree(3),
      val: 1,
    });

    expect(binary([1, 2, 3, null, 4, 5, null])).toEqual({
      left: createTree(2, undefined, createTree(4)),
      right: createTree(3, createTree(5)),
      val: 1,
    });

    expect(binary([1, 2, 3, null, 4, null, null, 5, null, 6])).toEqual({
      left: createTree(
        2,
        undefined,
        createTree(4, createTree(5, createTree(6)))
      ),
      right: createTree(3),
      val: 1,
    });
  });

  test("return undefined when input is empty array", () => {
    const node = binary([]);
    expect(node).toEqual(undefined);
  });
});
