import React, { act, useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Quill from "quill";
import { assets } from "../../assets/assets";

const AddCourse = () => {
  const quillReff = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapter, setChapter] = useState([]);
  const [showpopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: 0,
    lectureUrl: "",
    IsPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    console.log("click");

    if (action === "add") {
      const title = prompt("Enter Chapter Title");
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapter.length > 0
              ? chapter[chapter.length - 1].chapterOrder + 1
              : 1,
        };

        setChapter([...chapter, newChapter]);
      }
    } else if (action === "remove") {
      setChapter(chapter.filter((ch) => ch.chapterId !== chapterId));
    } else if (action === "toggle") {
      setChapter(
        chapter.map((ch) =>
          ch.chapterId === chapterId ? { ...ch, collapsed: !ch.collapsed } : ch
        )
      );
    }
  };
  const handleLacture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapter(chapter.map((ch) => {
        if (ch.chapterId === chapterId) {
          return {
            ...ch,
            chapterContent: ch.chapterContent.filter((_, i) => i !== lectureIndex)
          };
        }
        return ch;
      }));
    }
 };
 

 const AddLecture = () => {
  setChapter((prevChapters) =>
    prevChapters.map((ch) =>
      ch.chapterId === currentChapterId
        ? { ...ch, chapterContent: [...ch.chapterContent, {
            lectureId: uniqid(),
            ...lectureDetails,
            lectureOrder: ch.chapterContent.length + 1,
          }] }
        : ch
    )
  );
  setShowPopup(false);
  setLectureDetails({
    lectureTitle: "",
    lectureDuration: '',
    lectureUrl: "",
    IsPreviewFree: false,
  });
};


  const handleSubmmit = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    if (!quillReff.current || !editorRef.current) {
      quillReff.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Course Description",
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-0 pt-8 pb-0">
      <form onSubmit={handleSubmmit} className="flex flex-col gap-4 max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-md p-4">
        <div className=" flex flex-col gap-1">
          <p className="">Course Title</p>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            placeholder="Type Here"
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
              placeholder="Type Here"
              required
            />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <img
                src={assets.file_upload_icon}
                alt="file-upload"
                className="p-3 bg-blue-500 rounded-full"
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
              <img
                src={image ? URL.createObjectURL(image) : ""}
                className="max-h-10"
              />
            </label>
          </div>
        </div>
        <div>
          <p>discount</p>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            placeholder="Type Here"
            min={0}
            max={100}
            required
          />
        </div>
        {/* adding chatper and lectures */}
        <div>
          {chapter.map((chapter, index) => (
            <div key={index} className="bg-white border mb-4 rounded-md">
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                    src={assets.dropdown_icon}
                    alt="down-arrow"
                    width={14}
                    className={`mr-2 cursor-pointer transition-all ${
                      chapter.collapsed && "-rotate-90"
                    }`}
                  />
                  <span className="font-semibold">
                    {index + 1} {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img
                  onClick={() => handleChapter("remove", chapter.chapterId)}
                  src={assets.cross_icon}
                  className="cursor-pointer"
                />
              </div>
              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      <span>
                        {index + 1} {lecture.lectureTitle} -{" "}
                        {lecture.lectureDuration} mins -{" "}
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          className="text-blue-500 "
                        >
                          Link
                        </a>{" "}
                        - {lecture.IsPreviewFree ? "Free Preview" : "Paid "}
                      </span>
                      <img
                        src={assets.cross_icon}
                        className="cursor pointer"
                        onClick={() =>
                          handleLacture("remove", chapter.chapterId, index)
                        }
                      />
                    </div>
                  ))}
                  <div
                    className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"
                    onClick={() => handleLacture("add", chapter.chapterId)}
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}
          <div
            className="flex justify-center bg-blue-100 p-2 rounded-lg  cursor-pointer"
            onClick={() => handleChapter("add")}
          >
            + Add Chapter
          </div>
          {showpopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                <h2 className="text-lg font-semibold mb-4"> Add Lecture</h2>
                <div className="mb-2">
                  <p>Lecture Title</p>
                  <input
                    type="text"
                    value={lectureDetails.lectureTitle}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
                    placeholder="Type Here"
                    required
                  />
                </div>
                <div className="mb-2">
                  <p>Duration </p>
                  <input
                    type="number"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
                    placeholder="Type Here"
                    required
                  />
                </div>
                <div className="mb-2">
                  <p>Lecture Url</p>
                  <input
                    type="text"
                    value={lectureDetails.lectureUrl}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
                    placeholder="Type Here"
                    required
                  />
                </div>
                <div className="mb-2">
                  <p>Is Preview Free</p>
                  <input
                    type="checkbox"
                    value={lectureDetails.IsPreviewFree}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        IsPreviewFree: e.target.checked,
                      })
                    }
                    className="mt-1 scale-125"
                    required
                  />
                </div>
                <button
                onClick={AddLecture}
                  type="button"
                  className="w-full bg-blue-400 text-white  px-4  py-2 rounded"
                >
                  Add
                </button>
                <img
                  src={assets.cross_icon}
                  alt="cross-icon"
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowPopup(false)}
                />
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-black w-max py-2.5 px-8 my-4 text-white  rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
