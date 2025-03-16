import Course from "../modle/course.js";
import course from "../modle/course.js";


export const getAllCourses = async (req, res) => {
  try {
    const courses = await course.find({ ispublished: true })
      .select(["-courseContent", "-enrolledStudents"])
      .populate({ path: "educator" });
    res.json({ success: true,  courses });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

// get course by id

export const getCourseId = async (req, res) => {
  const { id } = req.params;
  try {
    const courseData = await course.findById(id).populate({ path: "educator" });

    // remove url if ispreview is false
    courseData.courseContent.forEach((chapter) => {
        chapter.chapterContent.forEach((lecture) => {
            if (!lecture.isPreview) {
            lecture.lectureUrl = "";
            }
        });
    });
    res.json({ success: true, courseData });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

