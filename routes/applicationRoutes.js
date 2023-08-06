const express = require("express");
const router = express.Router();
const applicationControllers = require("../controllers/applicationControllers.js");
const auth = require("../auth.js");

console.log(applicationControllers);
//STUDENT ENROLLMENT
router.post("/enroll", applicationControllers.newApplication);

//GET ALL APPLICATIONS
router.get("/all", applicationControllers.getAllApplications);

//GET SPECIFIC ADMISSION
router.get("/admission/:applicationId", applicationControllers.getSpecificApplication);
router.get("/academic-assessment/:applicationId", applicationControllers.getSpecificAcademicAssessment);
router.get("/financial-assessment/:applicationId", applicationControllers.getSpecificFinancialAssessment);
router.get("/final-verification/:applicationId", applicationControllers.getSpecificFinalVerification);

//GET ALL ADMISSION
router.get("/admission", applicationControllers.getAllApplicationsAddmission);

//GET ALL ASSESSMENT
router.get("/academic-assessment", applicationControllers.getAllApplicationsAssessment1);
router.get("/financial-assessment", applicationControllers.getAllApplicationsAssessment2);


//GET ALL FINAL VERIFICATION
router.get("/verification", applicationControllers.getAllApplicationsFinalVerification);

//GET DONE FINAL VERIFICATION
router.get("/verified", applicationControllers.getAllEnrolledStudents);

//GET DONE FINAL VERIFICATION
router.put("/admission/:applicationId", applicationControllers.updateForAdmission);

//UPDATE APROVALS
router.put("/academic-assessment/:applicationId", applicationControllers.updateForAssessment1);
router.put("/financial-assessment/:applicationId", applicationControllers.updateForAssessment2);

//GET DONE FINAL VERIFICATION
router.put("/verification/:applicationId", applicationControllers.updateForFinalVerification);

//PUT FILES
router.put("/final-verification/:applicationId", applicationControllers.updateFilesVerification);

module.exports = router;