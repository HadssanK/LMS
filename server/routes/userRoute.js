import express from 'express';
import { AddUserRating, getUserCourseProgress, getUserData, purchesCourse, updateUserCourseProgress, userEnrolledCourses } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data' , getUserData);
userRouter.get('/enrolled-courses' , userEnrolledCourses);
userRouter.post('/purches' , purchesCourse);

userRouter.post('/update-course-progress' , updateUserCourseProgress);
userRouter.post('/get-Course-Progress' , getUserCourseProgress);
userRouter.post('/add-rating' , AddUserRating);



export default userRouter;