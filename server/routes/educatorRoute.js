import express from 'express';
import { addCourses, EducatorDashboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleEducator } from '../controller/educatorController.js';
import upload from '../config/multer.js';
import { protectEducator } from '../middleware/authmiddleware.js';

const educatorRouter = express.Router();

// add educator roll
educatorRouter.get('/update-role', updateRoleEducator);
educatorRouter.post('/add-courses', upload.single('image'), protectEducator , addCourses);
educatorRouter.get("/courses" ,protectEducator , getEducatorCourses)
educatorRouter.get("/dashboard" ,protectEducator , EducatorDashboardData)
educatorRouter.get("/enrolled-student" ,protectEducator , getEnrolledStudentsData)

export default educatorRouter;
