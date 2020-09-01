## Extended.JS
A great module that assigns property to arrays and Object global object, briefly expanding NodeJS.
## About
This module will come with the function assigned to 16 Array prototypes and the function assigned to 9 Object global object.
## Installation
##### NodeJS 12.0.0 or newer is required
`npm install @raknax/extended.js`
## Usage
Let's do the function assignments first with this:
```js
const extendedJS = require('@raknax/extended.js')
new extendedJS()
```
#### Examples
```js
var arr = new Array("foo", "bar", "x", "y", "z")
var arr2 = new Array("a", "b", "c", "b", "c")
var arr3 = new Array("foo", "bar", "z")
var arr4 = new Array("foo", "bar", "x", "y", "z")
var arr5 = new Array(2, 3, 8, 5, 6)

arr.shuffle() // -> ["bar", "foo", "y", "z", "x"]
arr.random() // -> "y"
arr2.getUnique() // -> ["a", "b", "c"]
arr.toObject() // -> { 0: "foo", 1: "bar", 2: "x", ... }
arr.clear() // -> []
arr.diff(arr3) // -> ["x", "y"]
arr.equal(arr3) // -> false
arr.equal(arr4) // -> true
arr.removeByIndex(1) // -> ["foo", "x", "y", "z"]
arr.removeByIndexes(0, 2) // -> ["bar", "y", "z"]
arr.removeByValue("x") // -> ["foo", "bar", "y", "z"]
arr.removeByValues("x", "y", "z") // -> ["foo", "bar"]
arr.editByIndex(0, "hello") // -> ["hello", "bar", "x", "y", "z"]
arr.editByValue("bar", "world") // -> ["hello", "world", "x", "y", "z"]
arr5.max() // -> 8
arr5.min() // -> 2
arr.pushByIndex(1, "hi!") // -> ["foo", "hi!", "bar", "x", "y", "z"]

// ------- \\

var obj = new Object({ "a": "b", "c": "d", "e": "f" })
var obj2 = new Object({ "a": "b", "foo": "bar" })

Object.removeKey(obj, "c") // -> { a: "b", e: "f" }
Object.removeKeys(obj, ["a", "e"]) // -> { c: "d" }
Object.toArray(obj) // -> [["a", "b"], ["c", "d"], ["e", "f"]]
Object.clear(obj) // -> {}
Object.equal(obj, obj2) // -> false
Object.isObject(obj) // -> true
Object.isObject(arr) // -> false
Object.random(obj) // -> "d"
Object.first(obj) // -> "b"
Object.last(obj) // -> "f"
```

