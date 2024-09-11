"use client";
import { useState } from 'react';

export default function About() {
  const [currentContent, setCurrentContent] = useState(0);

  const aboutContent = [
    {
      title: (
        <>
          About <span className="text-green-600">Us</span>
        </>
      ),
      text: `Favour Holdings is dedicated to empowering women in the tech industry.
      We are committed to creating opportunities for women to advance in their careers by providing resources, mentorship, 
      and access to industry experts. Through our diverse events and programs, we help women navigate the challenges they 
      face in the tech world. From workshops to networking events, we offer platforms for knowledge exchange, professional 
      growth, and building lasting connections that can enhance their tech journeys. Our goal is to foster an inclusive 
      community where women can thrive and drive technological innovations.`
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to empower women in tech by providing them with the resources and networks they need to succeed.'
    },
    {
      title: 'Our Vision',
      text: 'We envision a future where women lead in technology, shaping innovation and driving positive change.'
    },
    {
      title: 'Our Values',
      text: 'Our core values are inclusion, empowerment, innovation, and continuous learning.'
    }
  ];

  const nextContent = () => {
    setCurrentContent((prevContent) => (prevContent + 1) % aboutContent.length);
  };

  const prevContent = () => {
    setCurrentContent((prevContent) => (prevContent - 1 + aboutContent.length) % aboutContent.length);
  };

  return (
    <section
      className="about py-20 relative"
      id="about"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Maintain the dark overlay color without an image
        color: 'white',
        height: '60vh', 
        width: '100%', 
        maxWidth: '1200px',
        margin: '80px auto 0 auto', // Added margin-top for space between Home and About
      }}
    >
      <div className="about-content text-center mx-auto" style={{ maxWidth: '80%' }}>
        <h2 className="text-4xl font-bold">{aboutContent[currentContent].title}</h2>
        <p className="mt-4 text-lg">{aboutContent[currentContent].text}</p>
      </div>

      {/* Left swiper */}
      <button
        onClick={prevContent}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-green-600 transition duration-300"
        style={{
          background: 'rgba(0, 128, 0, 0.6)', 
          borderRadius: '50%', 
          padding: '0.5rem', 
          cursor: 'pointer',
        }}
      >
        &lt;
      </button>

      {/* Right swiper */}
      <button
        onClick={nextContent}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-green-600 transition duration-300"
        style={{
          background: 'rgba(0, 128, 0, 0.6)', 
          borderRadius: '50%', 
          padding: '0.5rem', 
          cursor: 'pointer',
        }}
      >
        &gt;
      </button>
    </section>
  );
}
