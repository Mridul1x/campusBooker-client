const GalleryItem = ({ src, alt }) => {
  return (
    <div className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700">
      <img
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-full object-cover group-hover:scale-125 duration-1000"
      />
    </div>
  );
};

export default GalleryItem;
