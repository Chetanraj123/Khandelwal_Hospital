
import "./Facility.css"; // Importing the CSS file

const facilities = [
  {
    title: "Advanced Diagnostic Center",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art diagnostic equipment for accurate and timely diagnosis.",
  },
  {
    title: "Modern Operation Theaters",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Fully equipped operation theaters with the latest surgical technology.",
  },
  {
    title: "Intensive Care Unit",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "24/7 intensive care facilities with advanced life support systems.",
  },
  {
    title: "Laboratory Services",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive laboratory services for all types of medical tests.",
  },
];

const Facilities = () => {
  return (
    <div className="facilities-section">
      <div className="facilities-container">
        <h1 className="facilities-title">Our Facilities</h1>
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <img
                src={facility.image}
                alt={facility.title}
                className="facility-img"
              />
              <div className="facility-info">
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
                {/* <button className="facility-btn">Learn More →</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
