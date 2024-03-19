import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();

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
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      <ul className="list-group wd-modules">
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {module.lessons?.map((lesson : any, index : any) => (
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
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;