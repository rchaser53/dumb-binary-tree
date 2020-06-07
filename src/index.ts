export type Tree = {
  left: Tree | undefined;
  right: Tree | undefined;
  val: any;
};

export const createTree = (val: any, left?: Tree, right?: Tree): Tree => {
  return {
    val,
    left,
    right,
  };
};

export const binary = (input: any[]): Tree | undefined => {
  if (input.length === 0) return;

  const dummy = createTree(input.shift());
  let root = dummy;
  let baseStack = [root];
  while (0 < input.length && 0 < baseStack.length) {
    const stack: Tree[] = [];
    while (0 < baseStack.length) {
      const node = baseStack.shift()!;
      const left = input.shift();
      const right = input.shift();

      if (left != null) {
        node.left = createTree(left);
        stack.push(node.left);
      }

      if (right != null) {
        node.right = createTree(right);
        stack.push(node.right);
      }
    }
    baseStack = stack;
  }

  return dummy;
};
