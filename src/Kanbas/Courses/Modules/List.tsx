import React, { useState } from "react";
import { useParams } from "react-router";
import "./index.css";
import { modules } from "../../Databases";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module._id === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="button-container">
          <button type="button">Collapse All</button>
          <button type="button">View Progress</button>
          <select>
              <option>Publish All</option>
              <option>Unpublish All</option>
          </select>
          <button type="button" className="module-button">+ Module</button>
          <button type="button">
            <FaEllipsisV />
          </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;