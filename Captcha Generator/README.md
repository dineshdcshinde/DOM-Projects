# Captcha Generator

A simple Captcha Generator web application to practice DOM manipulation. It allows users to generate a random captcha, refresh it, and validate user input against the displayed captcha.

---

## Features

1. **Generate Random Captcha**: A new random captcha is displayed when the page loads or when the refresh button is clicked.
2. **Validate Captcha**: Users can input the captcha and check if it matches the displayed one.
3. **Responsive Design**: The layout adjusts to different screen sizes.

---

## File Structure

- **index.html**: Contains the structure of the web page.
- **style.css**: Styles the Captcha Generator, including responsive design.
- **script.js**: Handles all DOM manipulations and logic for captcha generation and validation.

---

## How to Use

1. Open the `index.html` file in any browser.
2. Enter the displayed captcha into the input field.
3. Click **Submit**:
   - If the input matches the displayed captcha, an alert will show "Captcha Matched!"
   - If it doesn't match, an alert will show "Captcha Mismatched!"
4. To get a new captcha, click the **Refresh** button.

---

## Learnings (Grasp Things)

1. **DOM Manipulation**:

   - Used `document.querySelector` to access and manipulate HTML elements.
   - Added event listeners to buttons for handling user actions.

2. **JavaScript Logic**:

   - Implemented a function to generate random captchas from a character set.
   - Compared user input with the displayed captcha to validate it.

3. **CSS Styling**:

   - Styled the application with a clean and responsive design.
   - Used hover, focus, and active states for buttons and input fields.

4. **User Interaction**:
   - Used `alert` to provide instant feedback to the user on validation.

## Technologies Used

- HTML
- CSS
- JavaScript

---
