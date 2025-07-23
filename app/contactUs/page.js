import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '40px 32px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '18px',
      boxShadow: '0 8px 32px rgba(44,62,80,0.10)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      color: '#222',
      border: '1px solid #e2e8f0'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '0.5em',
        color: '#2d3748',
        fontWeight: 700,
        letterSpacing: '-1px'
      }}>
        Contact Us
      </h1>
      <p style={{
        marginBottom: '1em',
        fontSize: '1.15rem',
        color: '#475569'
      }}>
        We&apos;d love to hear from you!
      </p>
      <p style={{
        marginBottom: '1.5em',
        color: '#555',
        lineHeight: 1.7
      }}>
        Whether you have a question, feedback, collaboration idea, or just want to say hello—feel free to reach out. We're always open to connecting with you.
      </p>
      <div style={{
        background: '#f1f5f9',
        borderRadius: '8px',
        padding: '18px 20px',
        marginBottom: '1.5em',
        borderLeft: '4px solid #3182ce'
      }}>
        <h2 style={{
          fontSize: '1.15rem',
          margin: '0 0 0.5em',
          color: '#3182ce',
          fontWeight: 600
        }}>
          📧 Email Us
        </h2>
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@aninfinitethread.com"
          target="_blank"
          style={{
            color: '#3182ce',
            textDecoration: 'underline',
            fontWeight: 'bold',
            fontSize: '1.05rem'
          }}
        >
          contact@aninfinite-thread.com
        </Link>
      </div>
      <div style={{
        background: '#f1f5f9',
        borderRadius: '8px',
        padding: '18px 20px',
        borderLeft: '4px solid #3182ce'
      }}>
        <h2 style={{
          fontSize: '1.15rem',
          margin: '0 0 0.5em',
          color: '#3182ce',
          fontWeight: 600
        }}>
          🗨️ Social Media
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <Link
              href="https://linkedin.com/in/koushal-kumar-sharma-4a1766358"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0077b5',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.05rem',
                display: 'inline-block',
                padding: '4px 0'
              }}
            >
              <span style={{ marginRight: 8, fontSize: '1.2em' }}>🔗</span>
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
