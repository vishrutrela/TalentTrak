const Signup = require("../models/SignupSchema");

exports.SignupCreate = async (req, res) => {
    try {
        const { email, password, confirm_password } = req.body;

        // Validate password and confirm_password (you might want to add more validation logic)
        if (password !== confirm_password) {
            return res.status(400).json({ message: 'Password and confirm_password do not match' });
        }

        const newUser = new Signup({
            email,
            password,
            confirm_password,
        });

        await newUser.save();

        console.log('Document signup saved successfully:', newUser);
        return res.status(200).json({ message: 'Data signup saved successfully', user: newUser });
    } catch (error) {
        console.error('Error saving signup document:', error);
        return res.status(500).json({ message: 'Error saving signup data' });
    }
};

// module.exports = {
//     SignupCreate
// };