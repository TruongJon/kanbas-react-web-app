import "./index.css"
import { FaBan, FaCheckCircle, FaUpload, FaShareSquare, FaHome, FaBook, FaBullhorn, FaChartBar, FaExclamationCircle, FaCalendar, FaCircle } from 'react-icons/fa';

function CourseStatus() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Course Status</h3>
                </li>
                <li className="list-group-item">
                    <div className="btn-group-vertical">
                        <div className="btn-group">
                            <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                                <FaBan /> Unpublish
                            </button>
                            <button className="btn btn-outline-dark" style={{ textAlign: 'left', background: '#66FF99' }}>
                                <FaCheckCircle /> Publish
                            </button>
                        </div>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaUpload /> Import Existing Content
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaShareSquare /> Import From Commons
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaHome /> Choose Home Page
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaBook /> Choose Course Stream
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaBullhorn /> New Announcement
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaChartBar /> New Analytics
                        </button>
                        <button className="btn btn-outline-dark" style={{ textAlign: 'left' }}>
                            <FaExclamationCircle /> View Course Notifications
                        </button>
                    </div>
                </li>
                <li className="list-group-item">
                    <h4>To Do</h4>
                    <hr />
                    <div className="bg-light border d-flex align-items-center">
                        <FaCircle className="icon-red" />
                        <div>
                            <div className="text-red">Grade A1 - ENV + HTML</div>
                            <div>Sept 18 at 11:59pm</div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h4>Coming Up
                        <FaCalendar />
                        <a href="#0">View</a>
                    </h4>
                    <hr />
                    <FaCalendar />
                    <a href="#0">Lecture 1 - Sept 11 at 11am</a> <br />
                    <FaCalendar />
                    <a href="#0">Lecture 2 - Sept 11 at 6pm</a> <br />
                    <FaCalendar />
                    <a href="#0">Lecture 3 - Sept 11 at 7pm</a> <br />
                </li>
            </ul>
        </div>
    );
}
export default CourseStatus;
