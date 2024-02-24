import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "2" }}>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div style={{ flex: "1", marginLeft: "20px" }}>
        <CourseStatus/>
      </div>
    </div>
  );
}
export default Home;