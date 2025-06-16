const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require('./routes/auth');


const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://vachhanijay6631:test1234@cluster0.abv3l6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Default route
app.get("/", (req, res) => {
  res.send("Laundry Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
