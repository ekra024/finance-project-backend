const login = async (req, res) => {
    try {
        // req.user is attached by the verifyToken middleware
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: req.user._id,
                email: req.user.email,
                name: req.user.name,
                firebaseUid: req.user.firebaseUid
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error during login', error: error.message });
    }
};

module.exports = { login };
