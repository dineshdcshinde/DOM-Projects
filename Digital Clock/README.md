# Digital Clock

A simple and responsive Digital Clock created using HTML, CSS, and JavaScript. This project focuses on DOM manipulation to dynamically update and display the current time.

## Features

- **Live Time Display**: Updates the time every second.
- **AM/PM Format**: Clearly indicates morning and evening hours.
- **Responsive Design**: The layout adapts to various screen sizes for an optimal viewing experience.
- **Dynamic DOM Manipulation**: Demonstrates practical use of JavaScript to interact with the DOM.

## How It Works

The clock fetches the current time using JavaScript's `Date` object and dynamically updates the DOM every second. The `padStart()` method ensures that single-digit hours, minutes, and seconds are displayed as two-digit values for consistency.

## GRASP Things

### **The `.padStart()` Method**

The `.padStart()` method in JavaScript is used to pad a string with another string until it reaches the desired length. It is particularly useful in formatting numbers for consistent display.

- **Syntax**:

  ```javascript
  str.padStart(targetLength, padString);

  "5".padStart(2, "0"); // Output: "05"
  "123".padStart(5, "0"); // Output: "00123"
  ```

  - **str**: The string to be padded.
  - **targetLength**: The desired length of the resulting string.
  - **padString**: The string to pad with. If not specified, spaces are used by default.
