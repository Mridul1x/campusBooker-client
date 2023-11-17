import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const handlePurchase = () => {
    console.log("okay");
  };
  const { collegeName, image } = useLoaderData();

  return (
    <main>
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
        <div className="details-area container mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 py-20">
          <div className="details-left md:col-span-2 flex flex-col gap-5">
            <h1 className="text-2xl font-semibold text-black uppercase">
              Overview
            </h1>
            <p className="text-lg"> {}</p>
            <span className="text-xl font-medium text-rose-500">{}</span>
          </div>
          <div className="details-right md:col-span-1 md:row-auto gap-5 flex flex-col">
            <div className="flex flex-col gap-3 justify-between font-semibold">
              <span className="text-3xl text-red-500">
                <span className="text-black"> Price: </span>
              </span>
              <span className="text-xl"></span>
            </div>
            <button
              onClick={handlePurchase}
              className="text-center w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
            >
              Purchase Package
            </button>
            <Link
              href="/colleges"
              className="text-center w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
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
