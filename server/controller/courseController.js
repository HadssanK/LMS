import Course from "../modle/course.js";  // ek baar hi import karo

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })  // Correct key: isPublished
      .select(["-courseContent", "-enrolledStudents"])
      .populate({ path: "educator" });

    res.json({ success: true, courses });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const getCourseId = async (req, res) => {
  const { id } = req.params;
  try {
    const courseData = await Course.findById(id).populate({ path: "educator" });

    courseData.courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        if (!lecture.isPreviewFree) {   // yahan bhi aapka schema me 'isPreviewFree' hai, 'isPreview' nahi
          lecture.lectureUrl = "";
        }
      });
    });

    res.json({ success: true, courseData });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};
