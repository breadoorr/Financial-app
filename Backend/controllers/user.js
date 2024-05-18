const UserSchema = require("../models/UserModel")
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    if(err.message === 'Incorrect email') {
        errors.email = 'That email is not registered';
    }

    if(err.message === 'Incorrect password') {
        errors.password = 'That password is not correct';
    }


    if(err.code === 11000) {
        errors.email = "This email is already registered";
        return errors;
    }

    if(err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}


const maxage = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'my financial secret', {
        expiresIn: maxage
    });
}

exports.addUser = async (req, res) =>  {
    const {username, email, password} = req.body;

    try {
        const user = await UserSchema.create({ username, email, password });
        console.log(user._id);
        const token = createToken(user._id);
        res.cookie('jwt', token);
        res.status(201).json({ user: user._id });
    } catch(error) {
        const errors = handleErrors(error);
        console.log(errors);
        res.status(400).json({ errors });
    }
}

exports.getUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserSchema.login(email, password);
        const token = createToken(user._id);
        console.log(token);
        res.cookie('jwt', token, {
            httpOnly: true, // Secure flag for HTTPS environments
        });

        res.status(201).json({user: user._id});
        // res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}


exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    UserSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "User deleted", user});
        })
        .catch((err) => {
            res.status(500).json({message: "Server error"});
        })
}

exports.logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.status(200);
    res.redirect('/');
    // window.location.assign('/signup');
}