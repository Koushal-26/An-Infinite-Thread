import React from 'react';

const About = () => {
  return (
   <div style={{
    maxWidth: '700px',
    margin: '40px auto',
    padding: '32px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    fontFamily: 'Inter, Arial, sans-serif',
    color: '#222',
    lineHeight: 1.7
   }}>
    <h1 style={{
     fontSize: '2.5rem',
     fontWeight: 700,
     marginBottom: '1.2rem',
     color: '#1a237e',
     letterSpacing: '-1px'
    }}>
     About Us <span style={{color:'#ff7043'}}>-</span> An Infinite Thread
    </h1>
    <p style={{fontSize: '1.15rem', marginBottom: '1.5rem'}}>
     Welcome to <b>An Infinite Thread</b>! This is a space where endless ideas take shape and grow. We believe that every thought or story starts small, but together, they can become something much bigger.
    </p>
    <section style={{marginBottom: '1.5rem'}}>
     <h2 style={{
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#3949ab',
      margin: '1.2rem 0 0.5rem 0'
     }}>Who We Are</h2>
     <p>
      We are a group of creators, developers, and storytellers who love sharing useful and inspiring content. Our goal is to make knowledge and creativity easy for everyone to access, whether through articles, technology, or stories.
     </p>
    </section>
    <section style={{marginBottom: '1.5rem'}}>
     <h2 style={{
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#3949ab',
      margin: '1.2rem 0 0.5rem 0'
     }}>What We Do</h2>
     <ul style={{
      paddingLeft: '1.2rem',
      marginBottom: '0.7rem',
      listStyle: 'disc',
      color: '#333'
     }}>
      <li>Write blogs about technology, lifestyle, and culture.</li>
      <li>Share web development tips for all skill levels.</li>
      <li>Offer insights to encourage new ideas and discussions.</li>
      <li>Provide food and recipe guides for everyone to enjoy.</li>
     </ul>
    </section>
    <section style={{marginBottom: '1.5rem'}}>
     <h2 style={{
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#3949ab',
      margin: '1.2rem 0 0.5rem 0'
     }}>Our Mission</h2>
     <p>
      We want to share helpful content that inspires people to learn, create, and connect. Our aim is to build a space where ideas can grow and people can meet.
     </p>
    </section>
    <p style={{marginTop: '2rem', color: '#3949ab'}}> Thank you for being a part of our journey. We’re excited to grow with you.</p>
    <p style={{marginTop: '2rem', fontStyle: 'italic', color: '#3949ab'}}>Thank you for Visiting!</p>
   </div>
  );
};

export default About;
