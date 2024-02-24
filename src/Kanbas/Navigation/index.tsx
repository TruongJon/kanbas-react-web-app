import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaMicrophone, FaUsers, FaInfo } from "react-icons/fa"
import "./index.css"
function KanbasNavigation() {
    const links = [
        { label: "Account",     icon: <FaUser className="fs-2 account-color" />  },
        { label: "Dashboard",   icon: <FaTachometerAlt className="fs-2 icon-color" />  },
        { label: "Courses",     icon: <FaBook className="fs-2 icon-color" />           },
        { label: "Calendar",    icon: <FaRegCalendarAlt className="fs-2 icon-color" /> },
        { label: "Inbox",       icon: <FaInbox className="fs-2 icon-color" />          },
        { label: "History",     icon: <FaHistory className="fs-2 icon-color" />        },
        { label: "Studio",      icon: <FaMicrophone className="fs-2 icon-color" />     },
        { label: "Commons",     icon: <FaUsers className="fs-2 icon-color" />          },
        { label: "Help",        icon: <FaInfo className="fs-2 icon-color" />           },
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