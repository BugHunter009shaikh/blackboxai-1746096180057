
Built by https://www.blackbox.ai

---

```markdown
# Army Public School Panagarh Chatbot

## Project Overview
The Army Public School Panagarh Chatbot is a web application that provides an interactive chatbot interface for answering admission-related queries. It utilizes the OpenAI GPT-3.5 model to generate responses, making it a helpful tool for prospective students and their families.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd army-public-school-chatbot
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the server**:
   ```bash
   npm start
   ```
   The server will start running at `http://localhost:3000`.

## Usage

1. Open `index.html` in your web browser.
2. Type your query related to admissions at Army Public School Panagarh in the input box.
3. Click on the send button or press Enter to see the chatbot's response.

## Features

- Interactive chat interface for easy communication.
- Uses OpenAI's GPT-3.5-turbo model to provide intelligent responses.
- Supports message input from users and shows replies from the chatbot.
- Responsive and styled UI with Tailwind CSS.

## Dependencies

The project requires the following npm packages:
- **express**: Web framework for Node.js.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **body-parser**: Middleware for parsing incoming request bodies.
- **dotenv**: Module to load environment variables.
- **openai**: OpenAI API client library.

These dependencies are listed in `package.json` as follows:
```json
"dependencies": {
  "body-parser": "^2.2.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "openai": "^4.96.2"
}
```

## Project Structure

```
army-public-school-chatbot/
│
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked versions of dependencies for reproducible builds
├── server.js               # Backend logic for handling chat requests
└── index.html              # Frontend markup and styling
```

## License
This project is licensed under the ISC License. See the LICENSE file for details.
```