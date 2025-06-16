const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register API route
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, state, district, address, pincode, password } =
      req.body;

    // Basic validation
    if (
      !name ||
      !email ||
      !phone ||
      !state ||
      !district ||
      !address ||
      !pincode ||
      !password
    ) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "User already exists with this email" });
    }

    // Check if phone already exists
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res
        .status(400)
        .json({ error: "User already exists with this phone number" });
    }

    // Save new user
    const newUser = new User({
      name,
      email,
      phone,
      state,
      district,
      address,
      pincode,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login API route
router.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    // Check if both fields are provided
    if (!emailOrPhone || !password) {
      return res.status(400).json({ error: 'Email/Phone and Password are required' });
    }

    // Find user by email or phone
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare password (since we are not hashing now, compare directly)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Success
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
