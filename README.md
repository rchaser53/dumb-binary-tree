# What's this?
I want to create the test data to solve the binary tree problem in competition programming like leetcode. There are many problems related to the binary tree in competitive programming. But it's a tough work to create test data. This library help us to create the simple binary tree data.


# How To Install

```sh
$ npm i dumb-binary-tree
```


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