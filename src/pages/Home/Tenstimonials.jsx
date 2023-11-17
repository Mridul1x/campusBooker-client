import { data } from "../../data/reviews";
import Testimonial from "./Tenstimonial";

const Tenstimonials = () => {
  return (
    <main
      data-aos="fade-up"
      data-aos-duration="1000"
      className="packeges container mx-auto px-5 md:px-0 justify-center items-center py-10"
    >
      <h1 className="text-4xl font-semibold text-center">
        Campus Booker Testimonials
      </h1>

      <div className="testimonials-wrapper grid py-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </main>
  );
};

export default Tenstimonials;
