function deepClone(value) {
    //Primitives & null return as is (immutable)
    if (value === null || typeof value !== "object") {
        return value;
    }

    // Array
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }

    // Object
    return Object.fromEntries(
        Object.entries(value).map(([key, val]) => [key, deepClone(val)])
    );
}


/**
 * Here Check All Test Cases
 **/

// Primitives
console.log(deepClone(42));          // 42
console.log(deepClone("hello"));     // "hello"
console.log(deepClone(null));        // null
console.log(deepClone(true));       // true

// Array
const arr = [1, [2, 3], [4, [5, 6]]];
const clonedArr = deepClone(arr);
clonedArr[1][0] = 99;
console.log(arr[1][0]);              // 2 (original unchanged)
console.log(clonedArr[1][0]);        // 99


// Object
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
const clonedObj = deepClone(obj);
clonedObj.b.c = 99;
console.log(obj.b.c);               // 2 (original unchanged)
console.log(clonedObj.b.c);

// Mixed — Array + Object nested
const mixed = { a: [1, 2, { b: 3 }], c: { d: [4, 5] } };
const clonedMixed = deepClone(mixed);
clonedMixed.a[2].b = 99;
console.log(mixed.a[2].b);          // 3 (original unchanged)