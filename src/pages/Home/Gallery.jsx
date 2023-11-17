import SectionTitle from "../../components/SectionTitle";
import { data } from "../../data/galleryImages";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      id="gallery"
      className="wrapper section-padding"
    >
      <SectionTitle title="Success Stories" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((image, index) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
