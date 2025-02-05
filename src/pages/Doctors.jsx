import React from "react";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. B. S. Khandelwal",
    specialty: "M.B.B.S (S.M.S. Medical College) F.I.D.(Diabetes Specialist) M.I.M.A. (Senior Physician)",
    role:"Director",
    image:
      "/profile.jpeg",
  },
  {
    name: "Dr. Chanchal Khandelwal",
    specialty: "B.H.M.S DGO (Ayu) (Gynac)",
    role:"Director",
    image:
      "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
  },
  {
    name: "Dr. Kshitij Sharma",
    specialty: "Dentist (B.D.S)",
    image:
      "https://t3.ftcdn.net/jpg/02/48/87/00/360_F_248870078_Wuf8dA4IVf1SB8aH9Ah0HMNYOCNun479.jpg",
  },
  {
    name: "Dr. Pankaj Bansal",
    specialty: "M.B.B.S. (DNB)",
    image:
      "https://t3.ftcdn.net/jpg/02/48/87/00/360_F_248870078_Wuf8dA4IVf1SB8aH9Ah0HMNYOCNun479.jpg",
  },
];

const Doctors = () => {
  return (
    <section className="doctors-section">
      <h2 className="section-title">Meet Our Doctors</h2>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-specialty">{doctor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
