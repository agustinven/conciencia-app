import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const CourseInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to="/courses" />;
  }

  return <div>CourseInfo</div>;
};

export default CourseInfo;
