# Closure

A closure is a JavaScript mechanism where a function can remember the variables from its outer scope even after the outer function is executed.

- Normally an inner function can access variables from its outer scope.
- A closure is created when a function references variables from its outer scope.
- Normally local variables become eligible for garbage collection after a function finishes execution.
- However, if an inner function still references those variables, JavaScript keeps them alive.
- A closure can be thought of as a function together with the variables it remembers from its lexical scope.

## Example
```
function outer() {
    let count = 0;

    return function inner() {
        return ++count;
    };
}

const a = outer();

console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3
```

## Explanation:

The function `inner` forms a closure over the variable `count`.

Even though `outer()` has already finished execution, the variable `count` is preserved because the returned function still references it.