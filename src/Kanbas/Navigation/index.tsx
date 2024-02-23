import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaMicrophone, FaUsers, FaInfo } from "react-icons/fa"
import "./index.css"
function KanbasNavigation() {
    const links = [
        { label: "Account",     icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard",   icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",     icon: <FaBook className="fs-2" />           },
        { label: "Calendar",    icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox",       icon: <FaInbox className="fs-2" />          },
        { label: "History",     icon: <FaHistory className="fs-2" />        },
        { label: "Studio",      icon: <FaMicrophone className="fs-2" />     },
        { label: "Commons",     icon: <FaUsers className="fs-2" />          },
        { label: "Help",        icon: <FaInfo className="fs-2" />           },
    ];
    const { pathname } = useLocation();
    return (
    <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
            </li>
        ))}
    </ul>
    );
}
export default KanbasNavigation;