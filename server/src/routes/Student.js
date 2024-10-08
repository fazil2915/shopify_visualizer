import express from "express"
import { Student_login,Student_register } from "../controller/auth.js";
import { getAssessment,getOverdueAssessments,submitAssessment } from "../controller/Student.js";
import {verifyToken} from "../middleware/auth.js"
const router=express.Router()

router.post('/register',Student_register)
router.post('/login',Student_login)
router.get('/assessment/visibility/:id',verifyToken,getAssessment)
router.get("/assessment/overdue",verifyToken,getOverdueAssessments)
router.post("/assessment/submit",verifyToken,submitAssessment)
export default router;