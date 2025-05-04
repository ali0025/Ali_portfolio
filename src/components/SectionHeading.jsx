// components/SectionHeading.jsx
const SectionHeading = ({ highlight = "", text = "", align = "center" }) => {
    return (
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-20 text-center sm:text-left text-white`}
      >
        {highlight && <span className="text-indigo-400">{highlight}</span>} {text}
      </h2>
    );
  };
  
  export default SectionHeading;
  