import React from 'react';
import "../components/compo.css"; 
import aboutImage from '../assets/About.jpg';
import img1 from '../assets/A.jpg';
import img2 from '../assets/B.jpg';
import img3 from '../assets/C.jpg';

const blogPosts = [
  {
    date: 'Mar 16, 2020',
    author: 'Michael Foster',
    title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
    imageUrl: img1,
  },
  {
    date: 'Mar 10, 2020',
    author: 'Lindsay Walton',
    title: 'Libero quisquam voluptatibus nam iusto qui dolor',
    imageUrl: img2,
  },
  {
    date: 'Feb 12, 2020',
    author: 'Tom Cook',
    title: 'Asperiores mollitia et dolor autem modi sit eius quisquam',
    imageUrl: img3,
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2>From the Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="date">{post.date}</p>
              <p className="author">{post.author}</p>
              <h3 className="title">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-blog-container">
      <div className="about-container">
        <div className="about-text">
          <h1>Cityscape: Your Gateway to Urban Living</h1>
          <p>Discover your dream home with Cityscape, the premier real estate platform specializing in urban properties. Whether you're searching for a chic downtown apartment, a cozy suburban house, or a commercial space for your business, Cityscape offers a comprehensive and user-friendly experience. With an extensive database of listings, personalized recommendations, and expert insights into the latest market trends, finding your perfect property has never been easier. Explore Cityscape today and step into the future of urban living.</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Team" />
        </div>
      </div>
      <BlogSection />
    </div>
  );
};

export default About;
