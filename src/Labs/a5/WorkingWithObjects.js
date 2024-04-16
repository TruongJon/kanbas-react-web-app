import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const [module, setModule] = useState({
        id: 1, name: "HTML",
        description: "Learn HTML + CSS",
        course: "CS4550",
    });
    const MODULE_URL = `${API_BASE}/a5/module`
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);    
    return (
        <div>
        <h3>Working With Objects</h3>
        <h4>Modifying Properties</h4>
        <button onClick={updateTitle} 
            className="btn btn-primary me-2">
            Update Title to: {assignment.title}
        </button>
        <button onClick={fetchAssignment} 
            className="btn btn-primary me-2">
            Fetch Assignment
        </button>
        <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
        <br/>
        <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
            className="btn btn-primary me-2">
            Update Title
        </a>
        <input type="text" 
            onChange={(e) => setAssignment({ ...assignment,
                title: e.target.value })}
            value={assignment.title}/>
        <br/>
        <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
            className="btn btn-primary me-2">
            Update Score
        </a>
        <input type="number" 
            onChange={(e) => setAssignment({ ...assignment,
                score: e.target.value })}
            value={assignment.score}/>
        <br/>
        <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
            className="btn btn-primary me-2">
            Update Completed
        </a>
        <input type="checkbox" 
            onChange={(e) => setAssignment({ ...assignment,
                completed: e.target.checked })}
            checked={assignment.completed}/>
        <br/>
        <a href={`${MODULE_URL}/name/${module.name}`}
            className="btn btn-primary me-2">
            Update Module Name
        </a>
        <input type="text" 
            onChange={(e) => setModule({ ...module,
                name: e.target.value })}
            value={module.name}/>
        <br/>
        <a href={`${MODULE_URL}/description/${module.description}`}
            className="btn btn-primary me-2">
            Update Module Description
        </a>
        <input type="text" 
            onChange={(e) => setModule({ ...module,
                description: e.target.value })}
            value={module.description}/>
        <h4>Retrieving Objects</h4>
        <a href={`${API_BASE}/a5/assignment`}
            className="btn btn-primary me-2">
            Get Assignment
        </a>
        <a href={`${API_BASE}/a5/module`}
            className="btn btn-primary me-2">
            Get Module
        </a>
        <h4>Retrieving Properties</h4>
        <a href={`${API_BASE}/a5/assignment/title`}
            className="btn btn-primary me-2">
            Get Title
        </a>
        <a href={`${API_BASE}/a5/module/name`}
            className="btn btn-primary me-2">
            Get Module Name
        </a>
        </div>
    );
}
export default WorkingWithObjects;