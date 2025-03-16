import express from 'express';
import { getUserData, purchesCourse, userEnrolledCourses } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data' , getUserData);
userRouter.get('/enrolled-courses' , userEnrolledCourses);
userRouter.post('/purches' , purchesCourse);

export default userRouter;