# Password Strength Indicator

## Overview

The **Password Strength Indicator** is a user-friendly tool designed to assess the strength of a password based on common security best practices. It evaluates the password against several criteria, such as length, character diversity (uppercase, lowercase, numeric, and special characters), and provides real-time feedback on its strength. The indicator visually changes from red (weak) to green (strong) based on the password's compliance with these criteria.

## Key Features

- **Password Length Validation**: Ensures the password is a minimum of 8 characters.
- **Character Diversity Checks**: Verifies the presence of at least one:
  - Numeric digit
  - Lowercase letter
  - Uppercase letter
  - Special character (e.g., `!@#$%^&*`)
- **Real-time Feedback**: Displays messages highlighting specific weaknesses in the password.
- **Visual Indicator**: A dynamic circular indicator that changes color from red (weak) to green (strong) based on password strength.

## Technologies Used

- **HTML**: Provides the structure for the password checker interface.
- **CSS**: Styles the interface, including the password input field and the indicator.
- **JavaScript**: Implements the logic for password validation and dynamic feedback.

## How It Works

1. **User Input**: Users are prompted to enter a password into a text input field.
2. **Validation**: As the user types, JavaScript evaluates the password based on predefined criteria:
   - Minimum length
   - Inclusion of numbers, lowercase letters, uppercase letters, and special characters
3. **Feedback**: The system displays a message and updates the color of a circular indicator to reflect the password's strength:
   - **Red**: Password is considered weak or incomplete.
   - **Green**: Password meets all strength criteria.
