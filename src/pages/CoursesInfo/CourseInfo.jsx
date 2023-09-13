import * as compSource from "../../components";
import * as compPage from "./components";

const CourseInfo = () => {
  return (
    <>
      <compSource.NavBar />
      <compPage.HeroCourse />
      <compPage.StudyPlan />
      <compSource.WhyChoose />
      <compPage.SitePlans />
      <compSource.Community />
      <compSource.Footer />
    </>
  );
};

export default CourseInfo;
