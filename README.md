# AI Email Rewriter

A web app that rewrites emails based on a selected or custom profession and the intended recipient using an AI API.

## Features
- Enter an email and choose from a wide range of professions (tech, healthcare, education, business, creative, etc.).
- Option to type a custom profession if not listed.
- Select the recipient (e.g., Manager, Client) to tailor the email's tone.
- Copy the result to your clipboard.
- Shows a loading spinner during processing.

## How to Run
1. Clone or download this repository:
   - Click the green "Code" button and select "Download ZIP".
   - Extract the ZIP file to a folder on your computer.
2. Get an OpenRouter API key:
   - Sign up at https://openrouter.ai and go to https://openrouter.ai/keys to generate a key.
3. Add the API key to `script.js`:
   - Open `script.js` in a text editor (e.g., Notepad).
   - Find the line: `"Authorization": "Bearer YOUR_API_KEY",`
   - Replace `YOUR_API_KEY` with your OpenRouter API key (e.g., `"Authorization": "Bearer sk-or-98765",`).
   - Save the file.
4. Open `index.html` in a browser:
   - Double-click `index.html` to open it in Chrome.
   - Type an email, select a profession and recipient, and click "Rewrite Email".

## Security Note
The OpenRouter API key in `script.js` is set to `Bearer YOUR_API_KEY` for security reasons. To test the app, follow the steps above to add your own API key locally. Do not share your API key publicly.

## Tech Used
- HTML, CSS, JavaScript
- OpenRouter API (Mistral AI model)

## Author
Astha
