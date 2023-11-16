import { Link } from "react-router-dom";

const CollegeItem = ({ college }) => {
  return (
    <div className="college flex flex-col gap-5 shadow-lg rounded-xl overflow-hidden w-full border bg-white h-full">
      <Link className="img relative group h-[14rem] md:h-[20rem] overflow-hidden">
        <img
          src={college.image}
          alt={college.collegeName}
          height={500}
          width={500}
          className="w-full h-full object-cover group-hover:brightness-75 duration-500 group-hover:scale-125"
        />
        <div className="absolute bottom-0 left-0 translate-y-full right-0 w-full h-10 bg-orange-500 flex items-center justify-center text-center uppercase tracking-widest text-orange-50 font-semibold group-hover:translate-y-0 duration-500">
          Explore Now
        </div>
      </Link>
      <div className="texts flex flex-col gap-4 px-7 pb-10 bg-white rounded-b-xl ">
        <h3 className="title text-2xl font-semibold truncate mb-2 ">
          {college.collegeName}
        </h3>
        <div className="group">
          <p className="info-item">
            <span className="info-label">Admission Date:</span>{" "}
            <span className="font-semibold">{college.admissionDates}</span>
          </p>
          <p className="info-item">
            <span className="info-label">Events:</span>{" "}
            <span className="font-semibold">{college.events.join(", ")}</span>
          </p>
          <p className="info-item">
            <span className="info-label">Research History:</span>{" "}
            <span className="font-semibold">
              {college.researchHistory.join(", ")}
            </span>
          </p>
          <p className="info-item">
            <span className="info-label">Sports:</span>
            <span className="font-semibold">{college.sports.join(", ")}</span>
          </p>
        </div>
        <Link
          to={`/college-details/${college.collegeId}`} // Use the correct route for detailed information
          className="bg-primary text-white text-center py-3 rounded-lg uppercase font-medium mt-3 hover:bg-indigo-500 duration-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CollegeItem;
