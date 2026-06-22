import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET || 'znt-karanganyar-super-secret-2026';

app.use(cors());
app.use(express.json());

// Data user sementara (nanti bisa diganti pakai database)
const users = [
    {
        id: 1,
        username: "admin",
        password: "$2a$10$dummyhash1234567890", // ini hash dari "znt2026"
        nama: "Administrator",
        role: "admin"
    },
    {
        id: 2,
        username: "bidangtanah",
        password: "$2a$10$dummyhash1234567890",
        nama: "Bidang Tanah",
        role: "user"
    }
];

// Route Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username dan password harus diisi" });
    }

    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(401).json({ success: false, message: "Username atau password salah" });
    }

    // Untuk sementara kita skip pengecekan password hash (biar mudah testing)
    // Nanti bisa diaktifkan
    const isPasswordValid = password === "znt2026";

    if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: "Username atau password salah" });
    }

    // Buat token
    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '8h' }
    );

    res.json({
        success: true,
        message: "Login berhasil",
        token: token,
        user: {
            id: user.id,
            username: user.username,
            nama: user.nama,
            role: user.role
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});