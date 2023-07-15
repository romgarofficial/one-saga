const express = require("express");
const router = express.Router();
const applicationControllers = require("../controllers/applicationControllers.js");
const auth = require("../auth.js");

console.log(applicationControllers);
//STUDENT ENROLLMENT
router.post("/enroll", applicationControllers.newApplication);

//GET ALL APPLICATIONS
router.get("/all", applicationControllers.getAllApplications);

//GET DONE ADMISSION
router.get("/admission", applicationControllers.getAllApplicationsAddmission);

//GET DONE ASSESSMENT
router.get("/assessment", applicationControllers.getAllApplicationsAssessment);

//GET DONE FINAL VERIFICATION
router.get("/verification", applicationControllers.getAllApplicationsFinalVerification);

//GET DONE FINAL VERIFICATION
router.get("/verified", applicationControllers.getAllEnrolledStudents);

//GET DONE FINAL VERIFICATION
router.put("/admission/:applicationId", applicationControllers.updateForAdmission);

//GET DONE FINAL VERIFICATION
router.put("/assessment/:applicationId", applicationControllers.updateForAssessment);

//GET DONE FINAL VERIFICATION
router.put("/verification/:applicationId", applicationControllers.updateForFinalVerification);

module.exports = router;