const mongoose = require("mongoose");

const academicYearSchema = new mongoose.Schema({
    academicYear: {
        type: String,
        required: [true, "Please enter an ACADEMIC YEAR."]
    },
    sem: {
        type: String,
        required: [true, "Please enter a SEM."]
    },
    isActive: {
        type: Bolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    enrolled: [{
        userId: {
            type: String,
            required: [true, "Please enter a USER ID."]
        },
        firstName: {
            type: String,
            required: [true, "Please enter FIRST NAME."]
        },
        middleName: {
            type: String,
            required: [true, "Please enter MIDDLE NAME."]
        },
        lastName: {
            type: String,
            required: [true, "Please enter LAST NAME."]
        },
        enrolledOn: {
            type: Date,
            default: new Date()
        }
    }]

});

module.exports = mongoose.model("Academic_Year", academicYearSchema);