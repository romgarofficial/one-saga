const Application = require("../models/Application.js");
const auth = require("../auth.js");
const nodemailer = require('nodemailer');

function mail(enrol_email){
            
    // Create a transporter using Gmail SMTP with App Password
    
}



//Adding products -> Admin Only
//Duplication of product is not allowed
module.exports.newApplication = (req, res) => {

    const sender_email = "romgarofficial@gmail.com";

        let newApplication = new Application({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
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
                            
                            const transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: sender_email,           
                                    pass: 'tsektlzcscalvqho',   
                                },
                                });
                            
                                // Email details
                                const mailOptions = {
                                from: sender_email,
                                to: newApplication.email,
                                subject: 'SAGA Online Enrolment',  
                                text: `${newApplication.firstName} ${newApplication.lastName} you are now enrolled online! Please visit our school to finish the enrolment process. Thank you!`,
                                };
                            
                                // Send the email
                                transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    console.log('Error:', error);
                                } else {
                                    console.log('Email sent:', info.response);
                                }
                                });


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

module.exports.getSpecificAcademicAssessment = (req, res) => {
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

module.exports.getSpecificFinancialAssessment = (req, res) => {
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

module.exports.getSpecificFinalVerification = (req, res) => {
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

module.exports.getAllApplicationsAssessment1 = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment1: false, isDoneAssessment2: false, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getAllApplicationsAssessment2 = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment1: true, isDoneAssessment2: false, isDoneFinalVerification: false }).then(result => {
        // result.orders = [];
        res.send(result)
    });
}

module.exports.getAllApplicationsFinalVerification = (req, res) => {
    return Application.find({ isDoneAdmission: true, isDoneAssessment1: true, isDoneAssessment2: true, isDoneFinalVerification: false }).then(result => {
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
                            return res.send("1");
                        })
                } else if (result.isDoneAdmission === true) {
                    console.log(result);
                    return res.send("2");
                }else{
                    return res.send("0");
                }
            })
            .catch(error => {
                console.log(error);
                return res.send("0");
            });

}

module.exports.updateForAssessment1 = (req, res) => {
    let updateForAssessment = {
        isDoneAssessment1: true

    }
        return Application.findById(req.params.applicationId)
            .then(result => {
                console.log(updateForAssessment);
                if (result.isDoneAssessment1 != updateForAssessment.isDoneAssessment1) {
                    Application.findByIdAndUpdate(req.params.applicationId, updateForAssessment, { new: true })
                        .then(result => {
                            console.log(result);
                            res.send("1");
                        })
                } else if (result.isDoneAssessment1 === true && updateForAssessment.isDoneAssessment1 === true) {
                    console.log(result);
                    res.send("2");
                }
            })
            .catch(error => {
                console.log(error);
                return res.send("0");
            });

}

module.exports.updateForAssessment2 = (req, res) => {
    let updateForAssessment = {
        isDoneAssessment2: true

    }
        return Application.findById(req.params.applicationId)
            .then(result => {
                console.log(updateForAssessment);
                if (result.isDoneAssessment2 != updateForAssessment.isDoneAssessment2) {
                    Application.findByIdAndUpdate(req.params.applicationId, updateForAssessment, { new: true })
                        .then(result => {
                            console.log(result);
                            res.send("1");
                        })
                } else if (result.isDoneAssessment2 === true && updateForAssessment.isDoneAssessment2 === true) {
                    console.log(result);
                    res.send("2");
                }
            })
            .catch(error => {
                console.log(error);
                return res.send("0");
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
                            return res.send("1");
                        })
                } else if (result.isDoneAdmission === true && result.isDoneAssessment === true && result.isDoneFinalVerification === true) {
                    console.log(result);
                    return res.send("2");
                }
            })
            .catch(error => {
                console.log(error);
                return res.send("2");
            });

}

module.exports.updateFilesVerification = (req, res) => {
    const { birthCert, reportCard, transcriptOfRecords } = req.body.requirements;

    // Update the Application document
    Application.findByIdAndUpdate(
        req.params.applicationId,
        {
            $set: {
                "requirements.birthCert": birthCert,
                "requirements.reportCard": reportCard,
                "requirements.transcriptOfRecords": transcriptOfRecords
            }
        },
        { new: true }
    )
    .then((updatedApplication) => {
        if (updatedApplication) {
            return res.send("1")
        } else {
            return res.send("2")
        }
    })
    .catch((error) => {
        return res.send("0")
    });
};



