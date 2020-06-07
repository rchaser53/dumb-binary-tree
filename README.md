# How To Use

```js
const { binary } = require("dumb-binary-tree");
console.log(binary([1, 2, 3]));
// {
//   val: 1,
//   left: { val: 2, left: undefined, right: undefined },
//   right: { val: 3, left: undefined, right: undefined }
// }

console.log(binary([1, 2, null, null, 3]));
// {
//   val: 1,
//   left: {
//     val: 2,
//     left: undefined,
//     right: { val: 3, left: undefined, right: undefined }
//   },
//   right: undefined
// }

```