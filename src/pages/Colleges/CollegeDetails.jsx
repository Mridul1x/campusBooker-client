import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const handlePurchase = () => {
    console.log("okay");
  };
  const {
    collegeName,
    image,
    sports,
    admissionDates,
    details,
    researchWorks,
    sportsCategories,
  } = useLoaderData();

  return (
    <main className="">
      <div>
        <div
          className="image w-full h-[60vh] justify-center items-center flex flex-col bg-cover bg-no-repeat bg-center bg-fixed"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-100">
              {collegeName}
            </span>
          </div>
        </div>
        <div className="details-area container px-4 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 py-20">
          <div className="details-left md:col-span-2 flex flex-col gap-5">
            <h1 className="text-2xl font-semibold text-black uppercase">
              Admission Process
            </h1>
            <p className="text-lg">{details.admissionProcess}</p>

            <h1 className="text-2xl font-semibold text-black uppercase">
              Event Details
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(details.eventsDetails).map(
                ([eventName, eventDetail]) => (
                  <div key={eventName}>
                    <h2 className="text-lg font-semibold">{eventName}</h2>
                    <p className="text-lg">{eventDetail}</p>
                  </div>
                )
              )}
            </div>

            <h1 className="text-2xl font-semibold text-black uppercase">
              Research Works
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(details.researchWorks).map(
                ([researchArea, researchDetail]) => (
                  <div key={researchArea}>
                    <h2 className="text-lg font-semibold">{researchArea}</h2>
                    <p className="text-lg">{researchDetail}</p>
                  </div>
                )
              )}
            </div>

            <h1 className="text-2xl font-semibold text-black uppercase">
              Sports Categories
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(details.sportsCategories).map(
                ([sport, sportDetail]) => (
                  <div key={sport}>
                    <h2 className="text-lg font-semibold">{sport}</h2>
                    <p className="text-lg">{sportDetail}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="details-right md:row-auto gap-5 flex flex-col">
            <div className="flex flex-col gap-3 justify-between font-semibold">
              <span className="text-xl text-red-500">
                Admission Deadline: {admissionDates}
              </span>
              <span className="text-xl"></span>
            </div>

            <Link
              to="/colleges"
              className="text-center  bg-black/80 self-start p-3 w-full  text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollegeDetails;
