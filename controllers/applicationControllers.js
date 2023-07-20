const Application = require("../models/Application.js");
const auth = require("../auth.js");



//Adding products -> Admin Only
//Duplication of product is not allowed
module.exports.newApplication = (req, res) => {
        let newApplication = new Application({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            lrn: req.body.lrn,
            birthDate: req.body.birthDate,
            address: req.body.address,
            mobileNumber: req.body.mobileNumber,
            socialAccount: req.body.socialAccount,
            gradeLevelToEnroll: req.body.gradeLevelToEnroll,
            strandToEnroll: req.body.strandToEnroll,
            medicalCondition: req.body.medicalCondition,
            presentSchool: req.body.presentSchool,
            studentStatus: req.body.studentStatus,
            parentFullName: req.body.parentFullName,
            parentMobileNumber: req.body.parentMobileNumber
        });
        return Application.findOne({ fullName: req.body.fullName, mobileNumber: req.body.mobileNumber })
            .then(result => {
                console.log(result);
                if (result == null) {
                    newApplication.save()
                        .then(application => {
                            console.log(application);
                            return res.send("1");
                        })
                        .catch(err => {
                            console.log(err);
                            return res.send("0");
                        });
                } else {
                    return res.send("2");
                }
            });
    
}

module.exports.getAllApplications = (req, res) => {
    return Application.find({ isDoneAdmission: false, isDoneAssessment: false, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getSpecificApplication = (req, res) => {
    return Application.findById(req.params.applicationId).then(result => {
            if (result) {
                return res.send(result);
            } else {
                return res.send("0");
            }
        })
        .catch(error => {
            return res.send("2");
        });
}


module.exports.getAllApplicationsAddmission = (req, res) => {
    return Application.find({ isDoneAdmission: false, isDoneAssessment: false, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getAllApplicationsAssessment = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment: false, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getAllApplicationsFinalVerification = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment: true, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getAllEnrolledStudents = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment: true, isDoneFinalVerification: true }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.updateForAdmission = (req, res) => {
    let updateForAdmission = {
        isDoneAdmission: true

    }
        return Application.findById(req.params.applicationId)
            .then(result => {
                console.log(updateForAdmission);
                if (result.isDoneAdmission != updateForAdmission.isDoneAdmission) {
                    Application.findByIdAndUpdate(req.params.applicationId, updateForAdmission, { new: true })
                        .then(result => {
                            console.log(result);
                            res.send(result.fullName + " Application is done for admission.");
                        })
                } else if (result.isDoneAdmission === true) {
                    console.log(result);
                    res.send("ERROR: The application is already done for admission.");
                }
            })
            .catch(error => {
                console.log(error);
                res.send("ERROR: Something is wrong with the data provided.");
            });

}

module.exports.updateForAssessment = (req, res) => {
    let updateForAssessment = {
        isDoneAssessment: true

    }
        return Application.findById(req.params.applicationId)
            .then(result => {
                console.log(updateForAssessment);
                if (result.isDoneAssessment != updateForAssessment.isDoneAssessment) {
                    Application.findByIdAndUpdate(req.params.applicationId, updateForAssessment, { new: true })
                        .then(result => {
                            console.log(result);
                            res.send(result.fullName + " Application is done for assessment.");
                        })
                } else if (result.isDoneAdmission === true && result.isDoneAssessment === true) {
                    console.log(result);
                    res.send("ERROR: The application is already done for assessment.");
                }
            })
            .catch(error => {
                console.log(error);
                res.send("ERROR: Something is wrong with the data provided.");
            });

}

module.exports.updateForFinalVerification = (req, res) => {
    let updateForFinalVerification = {
        isDoneFinalVerification: true

    }
        return Application.findById(req.params.applicationId)
            .then(result => {
                console.log(updateForFinalVerification);
                if (result.isDoneFinalVerification != updateForFinalVerification.isDoneFinalVerification) {
                    Application.findByIdAndUpdate(req.params.applicationId, updateForFinalVerification, { new: true })
                        .then(result => {
                            console.log(result);
                            res.send(result.fullName + " Application is done for final verification.");
                        })
                } else if (result.isDoneAdmission === true && result.isDoneAssessment === true && result.isDoneFinalVerification === true) {
                    console.log(result);
                    res.send("ERROR: The application is already done for final verification.");
                }
            })
            .catch(error => {
                console.log(error);
                res.send("ERROR: Something is wrong with the data provided.");
            });

}


