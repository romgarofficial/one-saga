const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your FULL NAME."]
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, "Please enter your LAST NAME."]
    },
    gender: {
        type: String,
        required: [true, "Please select a GENDER."]
    },
    lrn: {
        type: String
    },
    email: {
        type: String,
        default: ""
    },
    birthDate: {
        type: String,
        required: [true, "Please enter your BIRTHDAY."]
    },
    address: {
        type: String,
        required: [true, "Please enter your HOME ADDRESS."]
    },
    mobileNumber: {
        type: String,
        required: [true, "Please enter your MOBILE NUMBER."]
    },
    socialAccount: {
        type: String,
        required: [true, "Please enter your SOCIAL MEDIA NAME."]
    },
    gradeLevelToEnroll: {
        type: String,
        required: [true, "Please Select your GRADE LEVEL"]
    },
    strandToEnroll: {
        type: String
    },
    presentSchool: {
        type: String,
        required: [true, "Please enter your PRESENT SCHOOL"]
    },
    medicalCondition: {
        type: String,
    },
    studentStatus: {
        type: String,
        required: [true, "Please select your STATUS"]
    },
    parentFullName: {
        type: String,
        required: [true, "Please enter your PRESENT SCHOOL"]
    },
    parentMobileNumber: {
        type: String,
        required: [true, "Please enter your PARENT OR GUARDIAN MOBILE NUMBER"]
    },
    isDoneAdmission: {
        type: Boolean,
        default: false
    },
    isDoneAssessment1: {
        type: Boolean,
        default: false
    },
    isDoneAssessment2: {
        type: Boolean,
        default: false
    },
    isDoneFinalVerification: {
        type: Boolean,
        default: false
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    requirements:[{
        birthCert: {
            type: Boolean,
            default: false
        },
        reportCard:{
            type: Boolean,
            default: false
        },
        transcriptOfRecords:{
            type: Boolean,
            default: false
        }
    }],
    createdOn: {
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model("Application", applicationSchema);