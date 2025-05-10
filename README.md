# 🧠 JavaScript Conditional Statements – Explained

This repository provides a **clear explanation** to essential conditional control structures in JavaScript, including `if-else`, `if-else if-else`, and `switch` statements.
Understanding these conditionals is fundamental to making decisions in your JavaScript programs.

---

## 📌 Table of Contents

1. [Introduction to Conditionals](#1-introduction-to-conditionals)
2. [if Statement](#2-if-statement)
3. [if-else Statement](#3-if-else-statement)
4. [if-else if-else Chain](#4-if-else-if-else-chain)
5. [switch Statement](#5-switch-statement)
6. [Comparison: if-else vs switch](#6-comparison-if-else-vs-switch)
7. [Best Practices](#7-best-practices)

---

## 1. 🧾 Introduction to Conditionals

Conditional statements allow JavaScript to execute different blocks of code based on specific conditions.
This is crucial for implementing **logic flow** and **decision-making** in any application.

---

## 2. 🔹 `if` Statement

The `if` statement is used to execute a block of code **only if a specific condition is true**.

- Only one condition is checked.
- If the condition is not met, the code inside the `if` block is skipped.

---

## 3. 🔸 `if-else` Statement

The `if-else` statement adds an **alternative block of code** that runs when the condition is false.

- If the condition is true → execute `if` block.
- If the condition is false → execute `else` block.

---

## 4. 🔄 `if-else if-else` Chain

This structure allows **multiple conditions** to be tested in sequence.

- The first true condition gets executed.
- Once a match is found, other conditions are skipped.
- If no condition is true, the `else` block (if present) is executed.

Useful when:
- Multiple mutually exclusive conditions exist.
- You need more control than a `switch` offers (e.g. range comparisons).

---

## 5. 🔁 `switch` Statement

The `switch` statement is ideal for checking a variable against **multiple exact match values**.

- Each `case` represents a possible match.
- The `break` keyword prevents fall-through to the next case.
- An optional `default` block handles unmatched cases.

Use `switch` when:
- You're comparing the same variable against many constant values.
- You want a cleaner, more readable alternative to multiple `else if`s.

---

## 6. ⚖️ Comparison: `if-else` vs `switch`

| Feature                | `if-else`                  | `switch`                       |
|------------------------|----------------------------|--------------------------------|
| Condition Type         | Any expression             | Strict equality (`===`)       |
| Flexibility            | High (ranges, booleans)    | Limited (exact matches only)  |
| Readability            | Lower for many conditions  | Cleaner for multiple cases     |
| Performance            | Similar in most cases      | Slight edge in large chains    |

---

## 7. 🧩 Best Practices

- Use `if-else` for range-based logic or complex conditions.
- Use `switch` for clean handling of multiple known discrete values.
- Always include a `default` case in `switch` blocks.
- Avoid deeply nested conditionals for better readability — consider refactoring.

---

## 📚 Resources

- [MDN - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [JavaScript.info - Conditionals](https://javascript.info/ifelse)

---

## 👨‍💻 Author

Created by [Paras Jindal](https://github.com/Paras-jindal1604) as part of mastering JavaScript fundamentals.

---

