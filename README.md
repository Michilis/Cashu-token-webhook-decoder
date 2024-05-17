# Cashu-token-webhook-decoder


Cashu Token Checker is a Node.js application that listens for HTTP POST requests with Cashu tokens, checks their status, and responds with details including whether the token has been spent, the mint name, the amount in sats, and the mint URL.

## Features

- Check if a Cashu token has been spent
- Get the mint name of the token
- Get the amount in sats
- Get the mint URL

## Requirements

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cashu-token-checker.git
    cd cashu-token-checker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and specify the port (optional):
    ```dotenv
    PORT=3000
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Send a POST request to `http://localhost:3000/check-token` with a JSON payload containing the Cashu token:
    ```bash
    curl -X POST http://localhost:3000/check-token -H "Content-Type: application/json" -d '{"token":"your_cashu_token_here"}'
    ```

## API

### Check Token Status

**Endpoint:** `/check-token`

**Method:** `POST`

**Request Body:**
```json
{
  "token": "your_cashu_token_here"
}
Response:

json
Code kopiëren
{
  "spent": true,
  "mintName": "Mint Name",
  "amountSats": 1000,
  "mintUrl": "https://mint.url"
}
spent: true if the token has been spent, false otherwise.
mintName: The name of the mint.
amountSats: The amount in sats.
mintUrl: The URL of the mint.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Cashu for the Cashu library
Express for the web framework
dotenv for managing environment variables
sql
Code kopiëren

Make sure to update any placeholder information like the repository URL and the license file link if necessary.





