const User = require('../models/User'); // Adjust the path as per your project structure

// Update User Details function
const updateUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { firstname, lastname, email, gender, dob, contactno } = req.body;

    // Validate required fields
    if (!firstname || !lastname || !email || !gender || !dob || !contactno) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Find user by ID and update details
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { firstname, lastname, email, gender, dob, contactno },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

const fetchUserProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('order product cart rating');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};


module.exports = { updateUserProfile , fetchUserProfile };
