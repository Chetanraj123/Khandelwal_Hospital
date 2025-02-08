
import "./Facility.css"; // Importing the CSS file

const facilities = [
  {
    title: "Advanced Diagnostic Center",
    image:
      "./generalWard.jpeg",
    description: "State-of-the-art diagnostic equipment for accurate and timely diagnosis.",
  },
  {
    title: "Modern Operation Theaters",
    image:
      "./operationTheater.jpeg",
    description: "Fully equipped operation theaters with the latest surgical technology.",
  },
  {
    title: "Intensive Care Unit",
    image:
      "./reception.jpeg",
    description: "24/7 intensive care facilities with advanced life support systems.",
  },
  {
    title: "Laboratory Services",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive laboratory services for all types of medical tests.",
  },
  {
    title: "Pharmacy Services",
    image:
      "./pharmacy.jpeg",
    description: "Complete pharmacy solutions providing quality medicines and healthcare products.",
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
