# Jumping Letter Animation

This project demonstrates a fun and interactive animation effect using HTML, CSS, and JavaScript. When you click on any letter of the name, it "jumps" with a rotating animation, scales up, and changes color momentarily.

## Features

- **Interactive Animation:** Letters jump with rotation and scaling effects when clicked.
- **Responsive Design:** Works seamlessly on all screen sizes.
- **Customizable Styles:** Easily change font size, colors, and animations via CSS.

## Technologies Used

- **HTML:** For structuring the webpage.
- **CSS:** For styling and animations.
- **JavaScript:** For handling user interactions and applying animation effects.

## How to Use

1. Clone or download the project files.
2. Open the `index.html` file in a web browser.
3. Click on the letters to see the jumping animation.

## GRASP Section / Learnings

### Key Concepts Learned:

1. **Event Listeners in JavaScript:**

   - Attaching event listeners to multiple elements using `forEach()`.
   - Handling click events dynamically.

2. **CSS Animations:**

   - Using `@keyframes` for creating smooth animations.
   - Combining multiple transformations (e.g., `translate`, `rotate`, `scale`) in a single animation.
   - Applying transitions for better effects.

3. **Class Toggle Mechanism:**

   - Adding and removing classes using `classList.toggle()` for reusability and simplicity.

4. **DOM Manipulation:**

   - Selecting elements with `querySelector` and `querySelectorAll`.
   - Iterating through NodeLists to apply common behaviors.

5. **Responsive Design Principles:**
   - Ensuring that the animation and layout adapt to different screen sizes.

### Challenges Overcome:

- Fine-tuning the animation timing to make it look smooth.
- Preventing animation overlap by toggling the active class.
- Keeping the code modular and reusable.
