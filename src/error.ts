export const createTooManyInputValues = (inputs: any[]) => {
  console.error(inputs);
  return new Error("too many inputs to create binary tree");
};
