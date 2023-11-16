import { useEffect, useState } from "react";
import CollegeItem from "./CollegeItem";

const Colleges = ({ forHome }) => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/colleges`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, []);
  console.log(colleges);
  return (
    <main className="packeges container mx-auto px-5 md:px-0 justify-center items-center py-10">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-semibold text-center"
      >
        Colleges
      </h1>
      <div className="packeges-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 items-center">
        {!forHome &&
          colleges?.map((college) => (
            <CollegeItem key={college.collegeId} college={college} />
          ))}

        {forHome &&
          colleges
            ?.slice(0, 3)
            .map((college) => (
              <CollegeItem key={college.collegeId} college={college} />
            ))}
      </div>
    </main>
  );
};

export default Colleges;
