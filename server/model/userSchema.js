const moongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    work: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }

        }

    ]

})


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();

});

userSchema.methods.generateAuthToken = async function () {
    try {
        let tokenSA = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: tokenSA });
        await this.save();
        return tokenSA;
    } catch (error) {
        console.log(error);
    }
}

const User = moongoose.model('registrations', userSchema);

module.exports = User;