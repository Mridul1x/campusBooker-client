const SectionTitle = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-semibold text-black text-center uppercase mb-10">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
