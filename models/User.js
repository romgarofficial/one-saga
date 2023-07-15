const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter a FIRST NAME."]
    },
    middleName: {
        type: String,
        required: [true, "Please enter a LAST NAME."]
    },
    lastName: {
        type: String,
        required: [true, "Please enter a LAST NAME."]
    },
    email: {
        type: String,
        required: [true, "Please enter an EMAIL"]
    },
    password: {
        type: String,
        required: [true, "Please enter a PASSWORD"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Please enter a MOBILE NUMBER"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        default: "USER"
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("User", userSchema);