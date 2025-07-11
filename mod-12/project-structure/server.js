import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = 3000;

// === Routes ====
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send("hello......")
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))