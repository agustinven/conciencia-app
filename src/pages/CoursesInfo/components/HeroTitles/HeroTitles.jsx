import { useParams } from "react-router-dom";
import { heroTitleDescription } from "../../../../data/heroTitleDescription";


const HeroTitles = () => {
  const { id } = useParams();

  const course = heroTitleDescription[id];

  return (
    <>
      <div className="text-white">
        <h1 className="text-4xl md:text-7xl font-['Inter'] font-bold py-6">{course.title} </h1>
        <p className="text-lg md:text-3xl font-['Source_Sans_3'] font-medium">{course.description}</p>
      </div>
    </>
  );
};

export default HeroTitles;
