import React from 'react';
import { ArrowRight, Award, Phone, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from '../pages/Carousel';
import '../pages/Home.css';

const Home = () => {
  const stats = {
    patients: 50000,
    doctors: 100,
    experience: 25,
    satisfaction: 98
  };

  return (
    <div>
      {/* Carousel Section */}
      <Carousel />

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{stats.patients.toLocaleString()}+</div>
            <div className="stat-label">Patients Treated</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.doctors}+</div>
            <div className="stat-label">Expert Doctors</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.satisfaction}%</div>
            <div className="stat-label">Patient Satisfaction</div>
          </div>
        </div>
      </section>


    <section className="leadership">
      <div className="leadership-container">
        <div className="leader-card">
          <img src="/profile.jpeg" alt="President" className="leader-image" />
          <h3 className='leader-name'>Hon.Dr. B. S. Khandelwal  </h3>
          <p className="leader-title">President</p>
          <p className="leader-card-content">At Khandelwal Multispeciality Hospital, we are committed to providing compassionate and high-quality healthcare. Under my leadership, our goal is to ensure that every patient receives the best possible medical care with a personal touch. Your health and well-being remain our top priority.</p>
        </div>
        <div className="leader-card">
          <img src="https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png" alt="President" className="leader-image" />
         <h3 className='leader-name'>Dr. Chanchal Khandelwal</h3>
          <p className="leader-title">Director</p>
          <p className="leader-card-content">At Khandelwal Multispeciality Hospital, we strive for medical excellence and patient satisfaction. Our highly skilled professionals work tirelessly to ensure that you receive world-class treatment in a safe and comforting environment.</p>
        </div>
      </div>
    </section>


    <div className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/LOSa3YPo6MU?si=x7XoauGrRTdRhycH" 
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Why Choose LifeCare?</h2>
            <p>Experience healthcare excellence with our comprehensive medical services and dedicated team of professionals.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Award className="feature-icon" />
              <h3>Expert Doctors</h3>
              <p>Our team consists of highly qualified and experienced medical professionals.</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3>Quality Care</h3>
              <p>We maintain the highest standards of medical care and patient safety.</p>
            </div>
            <div className="feature-card">
              <Activity className="feature-icon" />
              <h3>Modern Technology</h3>
              <p>State-of-the-art medical equipment and advanced treatment methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="emergency">
        <div className="emergency-container">
          <div className="emergency-text">
            <h2>Emergency? Call Us 24/7</h2>
            <p>Immediate medical attention when you need it most</p>
          </div>
          <div className="emergency-phone">
            <Phone className="phone-icon" />
            <span>+91 9314660352</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;