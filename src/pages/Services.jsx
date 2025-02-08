import React from 'react';
import {
  Stethoscope,
  Microscope,
  Syringe,
  Pill,
  Ambulance,
  HeartPulse,
  Scan,
  Baby,
  Bone,
  Brain,
  Eye,
  Bluetooth as Tooth,
} from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import './Services.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Stethoscope,
    name: 'Primary Care',
    description: 'Comprehensive primary healthcare services for all age groups.',
    price: 'From $100',
  },
  {
    icon: Microscope,
    name: 'Laboratory Tests',
    description: 'Advanced diagnostic and pathology laboratory services.',
    price: 'From $50',
  },
  // {
  //   icon: HeartPulse,
  //   name: 'Cardiac Care',
  //   description: 'Specialized cardiac diagnosis and treatment services.',
  //   price: 'From $200',
  // },
  {
    icon: Scan,
    name: 'Medical Imaging',
    description: 'Modern imaging services including MRI, CT, and X-ray.',
    price: 'From $300',
  },
  {
    icon: Baby,
    name: 'Maternity Care',
    description: 'Complete maternity and childbirth services.',
    price: 'From $5000',
  },
  {
    icon: Ambulance,
    name: 'Emergency Care',
    description: '24/7 emergency medical services and critical care.',
    price: 'From $500',
  },
  // {
  //   icon: Brain,
  //   name: 'Neurology',
  //   description: 'Diagnosis and treatment of neurological disorders.',
  //   price: 'From $250',
  // },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Treatment for bone and joint related conditions.',
    price: 'From $200',
  },
  {
    icon: Eye,
    name: 'Ophthalmology',
    description: 'Complete eye care and vision correction services.',
    price: 'From $150',
  },
  // {
  //   icon: faTooth ,
  //   name: 'Dental Care',
  //   description: 'Comprehensive dental and oral health services.',
  //   price: 'From $100',
  // },
  {
    icon: Syringe,
    name: 'Vaccinations',
    description: 'Routine and travel vaccination services.',
    price: 'From $50',
  },
  {
    icon: Pill,
    name: 'Pharmacy',
    description: '24-hour pharmacy services with home delivery.',
    price: 'Varies',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-heading">
          <h1 className="services-title">Our Services</h1>
          <p className="services-description">
            Comprehensive healthcare services delivered by experienced professionals using state-of-the-art technology.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
              <div className="flex items-center justify-between mb-4">
                <img width="48" height="48" src="https://img.icons8.com/color/48/diabetes-monitor.png" alt="diabetes-monitor"/>
                {/* <span className="service-price">{service.price}</span> */}
              </div>
              <h3 className="service-name">Dibetes Care</h3>
              <p className="service-description">Controls of diabetes gives new life.</p>
              {/* <button className="service-button">Learn More →</button> */}
            </div>

          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex items-center justify-between mb-4">
                <service.icon className="service-icon"/>
                {/* <span className="service-price">{service.price}</span> */}
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              {/* <button className="service-button">Learn More →</button> */}
            </div>
          ))}

          <div className="service-card">
              <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={faTooth} size="2x" color="#3b82f6" />
                {/* <span className="service-price">{service.price}</span> */}
              </div>
              <h3 className="service-name">Dental Care</h3>
              <p className="service-description">Comprehensive dental and oral health services.</p>
              {/* <button className="service-button">Learn More →</button> */}
            </div>

        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Need Medical Assistance?</h2>
          <p className="cta-description">
            Our team of medical professionals is here to help you 24/7.
          </p>
          <Link to="https://www.apollohospitals.com/" ><button className="cta-button">Book an Appointment</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;