## Vanilla Custom Alert Project

This is a lightweight custom alert project that replaces the default JavaScript alert dialog with a fully customizable one. It allows you to display an alert message with a title and custom content, and it can be easily styled using CSS.

Features
--------
- Customizable alert title and message.
- Custom styles with an option to style the alert box, buttons, and content.
- Simple "Okay" button to close the alert.
- Modular JavaScript code for easy integration into any project.

Getting Started
---------------

Prerequisites
-------------
Ensure you have a working environment that supports JavaScript.

Installation
------------
1. Clone the repository to your project directory:
```bash
git clone https://github.com/TreasureUzoma/VanillaCustomAlert.git
```
Import the `showCustomAlert` and `closeCustomAlert` functions in your project.

Usage
-----
1. To show the custom alert, use the `showCustomAlert` function with a title and message:

```javascript
import { showCustomAlert } from './customAlert.js';

// calling the function 
showCustomAlert("Alert Title", "This is a custom alert message.");

// closing the custom alert 
closeCustomAlert();
```
