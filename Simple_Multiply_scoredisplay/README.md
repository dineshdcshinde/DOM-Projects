# Simple Multiplication Game with Score Tracker

This project is a simple interactive multiplication game. Random numbers are generated, and the user inputs the product of those numbers. If the answer is correct, the score increases; otherwise, it remains unchanged. The game provides instant feedback and refreshes with new random numbers after each attempt.

---

## Features

- **Random Number Generation:** Two random numbers (1-10) are generated for the multiplication question.
- **Score Tracker:** Keeps track of the number of correct answers.
- **User Input Validation:** Alerts the user if no answer is provided or if the answer is incorrect.
- **Dynamic Update:** Refreshes the numbers and clears the input after each attempt.
- **User Feedback:** Provides instant feedback for correct and incorrect answers.

---

## How to Use

1. **Start the Game:** Open the game in a browser.
2. **View the Question:** Two random numbers will appear on the screen.
3. **Input Answer:** Type the product of the two numbers into the input box.
4. **Submit Answer:** Click the button to submit your answer.
   - If correct: The score increases by 1, and new random numbers are generated with a "Correct!" message.
   - If incorrect: The score remains unchanged, and you see a "Wrong answer. Try again!" message.

---

## Code Overview

### HTML

- Contains the structure for displaying the question, score, and input field.
- Includes a feedback message to inform users of their answer's correctness.

### CSS

- Provides a clean and responsive design.
- Highlights the elements with modern styling using shadows and alignment.

### JavaScript

- Core functionality is implemented using JavaScript:
  - Generates random numbers.
  - Validates user input and checks the answer.
  - Updates the score and provides feedback.

---

Enjoy the game! 🎉
