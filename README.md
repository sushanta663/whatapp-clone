# 💬 WhatsApp Web Clone

A full-stack real-time chat application that replicates the core experience of WhatsApp Web — built with the complete **MERN stack** and **WebSockets**, following industry-standard Software Development Life Cycle (SDLC) practices from design to deployment.

---

## 🚀 Features

- **Real-Time Messaging** — Bidirectional communication powered by WebSockets for instant message delivery.
- **Secure Authentication** — User registration and login with JWT-based session handling.
- **Responsive UI** — Clean, WhatsApp-inspired interface built with React.js and Material-UI.
- **Chat History** — Persistent message storage and retrieval using MongoDB (Cloud).
- **Online Presence** — See when contacts are online or last active.
- **Message Timestamps** — Every message is time-stamped for clarity.
- **Multi-User Support** — Scalable architecture supporting multiple concurrent users and conversations.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Material-UI |
| Backend | Node.js, Express.js |
| Real-Time | WebSockets (Socket.io) |
| Database | MongoDB (Cloud / Atlas) |
| Auth | JSON Web Tokens (JWT) |
| Deployment | Netlify (client), Railway/Render (server) |

---

## 📁 Project Structure

```
whatapp-clone/
├── client/          # React.js frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Login, Register, Chat pages
│   │   ├── context/      # Auth & Socket context
│   │   └── App.js
│   └── package.json
│
├── server/          # Express.js REST API backend
│   ├── routes/      # API route handlers
│   ├── models/      # MongoDB schemas (User, Message, Conversation)
│   ├── middleware/  # JWT auth middleware
│   └── index.js
│
└── socket/          # Socket.io real-time server
    └── index.js
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v16 or later
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### 1. Clone the repository

```bash
git clone https://github.com/sushanta663/whatapp-clone.git
cd whatapp-clone
```

### 2. Setup environment variables

Create `.env` files in both `client/` and `server/` directories.

**server/.env**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

**client/.env**
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:8900
```

### 3. Install dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Install socket dependencies
cd ../socket
npm install
```

### 4. Run the application

Open three terminal windows and run each service:

```bash
# Terminal 1 — Start the backend server
cd server
npm start

# Terminal 2 — Start the Socket.io server
cd socket
npm start

# Terminal 3 — Start the React frontend
cd client
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🎛️ Usage Guide

### Register & Login

1. Open the app and click **Register** to create a new account.
2. Enter your username, email, and password.
3. Log in with your credentials — a JWT token is issued and stored for your session.

### Start a Conversation

1. Search for a registered user by username.
2. Click on a user to open the chat window.
3. Type your message and hit **Enter** or the send button.
4. Messages are delivered in real-time via WebSockets.

### Real-Time Features

- Messages appear instantly on both sender and receiver screens without page refresh.
- Online/offline status updates automatically as users connect or disconnect.

---

## 🔌 API Reference

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/users?search=` | Search users by username |
| GET | `/api/conversations/:userId` | Get all conversations for a user |
| POST | `/api/conversations` | Create or fetch a conversation |
| GET | `/api/messages/:conversationId` | Fetch chat history |
| POST | `/api/messages` | Send a new message |

---

## 🌐 WebSocket Events

| Event | Direction | Description |
|---|---|---|
| `addUser` | Client → Server | Register user socket on connect |
| `getUsers` | Server → Client | Broadcast updated online users list |
| `sendMessage` | Client → Server | Emit a new message |
| `getMessage` | Server → Client | Receive a message in real-time |
| `disconnect` | Client → Server | Handle user going offline |

---

## 🗄️ Database Schema

### User
```json
{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "password": "hashed string",
  "profilePicture": "string (URL)",
  "createdAt": "timestamp"
}
```

### Conversation
```json
{
  "_id": "ObjectId",
  "members": ["userId1", "userId2"],
  "createdAt": "timestamp"
}
```

### Message
```json
{
  "_id": "ObjectId",
  "conversationId": "ObjectId",
  "sender": "userId",
  "text": "string",
  "createdAt": "timestamp"
}
```

---

## 🚢 Deployment

### Client (Netlify)

The React frontend is deployed on **Netlify** with `_redirects` configured for React Router:

```
/* /index.html 200
```

### Server & Socket (Railway / Render)

Deploy the `server` and `socket` folders as separate Node.js services. Set all environment variables in the platform dashboard.

---

## 🔮 Upcoming Features

- [ ] Group chat support
- [ ] Image and file sharing
- [ ] Message read receipts (double ticks ✓✓)
- [ ] Typing indicators
- [ ] Message deletion (delete for everyone)
- [ ] Emoji reactions

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sushanta**
- GitHub: [@sushanta663](https://github.com/sushanta663)

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!
