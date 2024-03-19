import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "../Assignments";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  var page_url = pathname.split("/").pop();
  var page = page_url?.replace("%20", " ")
  return (
    <div>
      <div className="flex-grow-0 me-2 d-none d-lg-block">
        <h2 style={{ paddingLeft: "30px" }}><HiMiniBars3 /> {course?.number} {">"} {page} 
        <button style={{ fontSize: '20px', float: 'right', position: 'relative', left: '-5%' }}>
            <FaGlasses /> Student View
        </button>
        <hr/>
        </h2>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="position-absolute bottom-0 end-0"
          style={{ left: "320px", top: "65px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;