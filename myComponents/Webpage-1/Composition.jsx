import React from 'react';
import '../CSS/Composition.css';
import img from '../Image/image.png';
// Header Component
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={img} alt="Logo" /> {/* Replace with actual logo */}
        </div>
        <ul className="nav-links">
          <li>Courses</li>
          <li>Tutorials</li>
          <li>Jobs</li>
          <li>Practice</li>
          <li>Contests</li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
};

// Course Banner Component
const CourseBanner = () => {
  return (
    <div className="course-banner">
      <span className="banner-text">DSA Classroom Course</span>
      {/* Add other banner items as needed */}
    </div>
  );
};

// Search Section Component
const SearchSection = () => {
  return (
    <section className="search-section">
      <h2>Hello, What Do You Want To Learn?</h2>
      <div className="search-box">
        <input type="text" placeholder="GeeksforGeeks Course" />
        <button>Search</button>
      </div>
      {/* Add course categories here */}
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="card-icon">{icon}</div> {/* Replace with actual icon */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section className="features-section">
      <FeatureCard
        title="Read"
        description="How to Use ChatGPT API in ..."
        icon={<span>Read Icon</span>}
      />
      <FeatureCard
        title="Practice"
        description="Explore Practice Problems"
        icon={<span>Practice Icon</span>}
      />
      <FeatureCard
        title="Learn"
        description="DSA for Interview Preparation"
        icon={<span>Learn Icon</span>}
      />
    </section>
  );
};


// Footer Component
const Footer = () => {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        {/* Add more footer content as needed */}
      </footer>
    );
  };

// App Component (Main Component)
const Composition = () => {
  return (
    <div>
      <Header />
      <CourseBanner />
      <SearchSection />
      <FeaturesSection />
      <Footer/>
    </div>
  );
};

export default Composition;