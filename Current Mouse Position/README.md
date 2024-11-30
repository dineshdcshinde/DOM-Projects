# Current Mouse Position

This project dynamically tracks and displays the current position of the mouse pointer on the screen using the DOM and JavaScript.

## Features

- Real-time updates of the mouse's X and Y coordinates.
- Interactive and visually appealing design.

## Tech Stack

- **HTML5**: For the structure of the page.
- **CSS3**: For styling and layout.
- **JavaScript**: For dynamic updates of the mouse position.

## Project Structure

Current-Mouse-Position/
├── index.html # HTML structure
├── style.css # Styling
├── script.js # JavaScript for functionality
└── README.md # Project documentation

## How It Works

1. **HTML**: Sets up the structure, including placeholders for mouse position values.
2. **CSS**: Provides a visually engaging design with a dark theme.
3. **JavaScript**: Uses `mousemove` event to fetch the mouse's X and Y coordinates and updates the DOM dynamically.

### Code Highlights

#### JavaScript Snippet:

```javascript
let wrapper = document.querySelector(".wrapper");
let xPosition = document.querySelector("#x-position");
let yPosition = document.querySelector("#y-position");

wrapper.addEventListener("mousemove", (dets) => {
  xPosition.textContent = dets.x;
  yPosition.textContent = dets.y;
});
```
