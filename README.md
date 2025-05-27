## 📞 Phone Number Tracker API

This lightweight API acts as a proxy to the [`call-tracker-api`](https://call-tracker-api.vercel.app/) for retrieving information based on a phone number. It provides a simple query-based GET endpoint to fetch tracking data.

## 🚀 Features

- ⚡ Fast and minimal Node.js API.
- 🔄 Proxies requests to `https://call-tracker-api.vercel.app/`.
- ✅ Simple `number`-parameter query interface.
- 🧩 Easy to integrate with frontends, bots, or external services.

## 📦 Requirements

- Node.js 14+
- npm package: `node-fetch`

## 📡 Usage

**1. Endpoint**  
Send a GET request to the deployed or local endpoint:  
`GET /?number=XXXXXXXXXX`

**2. Query Parameters**

| Parameter | Required | Description                       |
|-----------|----------|-----------------------------------|
| `number`  | ✅        | The phone number to be tracked.   |

**✅ Example Request**
```bash
curl "http://localhost:3000/?number=9876543210"
```

**✅ Example Response**
```json
{
  "number": "9876543210",
  "location": "Mumbai, Maharashtra",
  "carrier": "Airtel",
  "type": "Mobile"
}
```

**❌ Error Response**
```json
{
  "error": "Missing number parameter"
}
```

## 🔍 Code Explanation

- `GET /`: Accepts a `number` query parameter.
- Forwards the request to:  
  `https://call-tracker-api.vercel.app/?number=YOUR_NUMBER`
- Returns the proxied response to the client.

## ⚠️ Error Handling

- 🛑 400 Bad Request: If `number` is not provided.
- 💥 500 Internal Error: If the proxy request to the external API fails.

## 🛠️ Setup & Run

```bash
git clone https://github.com/your-username/number-tracker-proxy.git
cd number-tracker-proxy
npm install
node index.js
```

> The app will run on `http://localhost:3000/` by default.

## 🧪 Test It Online

You can deploy this on platforms like **Vercel**, **Render**, or **Replit** for free.

## 📄 License

This project is licensed under the License – see the [LICENSE](https://github.com/your-username/number-tracker-proxy/blob/main/LICENSE) file for details.
