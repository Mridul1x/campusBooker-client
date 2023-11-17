import { useEffect, useState } from "react";
import CollegeItem from "./CollegeItem";
import { useLocation } from "react-router-dom";

const Colleges = ({ forHome }) => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  useEffect(() => {
    fetch(`https://campus-booker-server.vercel.app/colleges`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <main
      data-aos="fade-up"
      data-aos-duration="1000"
      className="packeges wrapper section-padding justify-center items-center"
    >
      <h1 className="text-4xl font-semibold text-center uppercase">Colleges</h1>
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-lg mt-12"></span>
        </div>
      ) : (
        <div className="packeges-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 items-center">
          {!forHome &&
            (searchResults.length > 0
              ? searchResults.map((college) => (
                  <CollegeItem key={college.id} college={college} />
                ))
              : colleges.map((college) => (
                  <CollegeItem key={college.id} college={college} />
                )))}
          {forHome &&
            colleges
              ?.slice(0, 3)
              .map((college) => (
                <CollegeItem key={college.id} college={college} />
              ))}
        </div>
      )}
    </main>
  );
};

export default Colleges;
