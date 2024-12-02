# Quote Generator

A simple and interactive web application that generates random motivational quotes using a free API. Users can click a button to fetch a new quote along with its author.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Used](#api-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)


## Features
- Fetches a random motivational quote from an external API.
- Displays the quote and the author in a clean and responsive UI.
- Fully responsive design, accessible across devices.
- Styled with CSS for a polished and modern look.

## Technologies Used
- **HTML** for structuring the content.
- **CSS** for styling the application.
- **JavaScript** for dynamic content updates using API.
- **[Quotes API](https://qapi.vercel.app/api/random)** for fetching random quotes.

## API Used
- **Endpoint**: `https://qapi.vercel.app/api/random`
- **Description**: Provides a random quote and author name in JSON format.
- **Example Response**:
  ```json
  {
      "id": 1,
      "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      "author": "Albert Schweitzer"
  }
