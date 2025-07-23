import React from 'react';
import Link from 'next/link';

const gradientBg = {
 minHeight: '100vh',
 background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
 padding: '0',
 margin: '0',
};

const cardStyle = {
 maxWidth: '700px',
 margin: '60px auto',
 padding: '40px 36px',
 background: 'rgba(255,255,255,0.95)',
 borderRadius: '18px',
 boxShadow: '0 8px 32px rgba(60,60,120,0.12), 0 1.5px 6px rgba(80,80,180,0.06)',
 fontFamily: 'Segoe UI, Arial, sans-serif',
 color: '#1a202c',
 lineHeight: 1.8,
 border: '1.5px solid #e0e7ff',
 position: 'relative',
 overflow: 'hidden',
};

const headingStyle = {
 fontSize: '2.5rem',
 marginBottom: '0.5em',
 fontWeight: 700,
 letterSpacing: '-1px',
 color: '#3730a3',
 textShadow: '0 2px 8px #e0e7ff',
};

const subHeadingStyle = {
 fontSize: '1.25rem',
 marginTop: '2.5em',
 marginBottom: '0.7em',
 fontWeight: 600,
 color: '#6366f1',
 borderLeft: '4px solid #6366f1',
 paddingLeft: '12px',
 background: 'linear-gradient(90deg, #f1f5ff 60%, transparent 100%)',
};

const paragraphStyle = {
 color: '#374151',
 marginBottom: '1.5em',
 fontSize: '1.08rem',
};

const listStyle = {
 marginBottom: '1.5em',
 paddingLeft: '1.5em',
 fontSize: '1.08rem',
};

const linkStyle = {
 color: '#4f46e5',
 textDecoration: 'underline',
 fontWeight: 500,
 transition: 'color 0.2s',
};

const lastUpdatedStyle = {
 color: '#64748b',
 marginBottom: '2em',
 fontSize: '1rem',
 fontStyle: 'italic',
};

const dividerStyle = {
 height: '2px',
 background: 'linear-gradient(90deg, #6366f1 0%, #e0e7ff 100%)',
 border: 'none',
 margin: '2.5em 0 2em 0',
 opacity: 0.2,
};

const Privacy = () => (
 <div style={gradientBg}>
  <div style={cardStyle}>
   <h1 style={headingStyle}>Privacy Policy</h1>
   <p style={lastUpdatedStyle}>
    <strong>Last Updated:</strong> [07 July 2025]
   </p>
   <p style={paragraphStyle}>
    <strong>An Infinite Thread</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
   </p>
   <hr style={dividerStyle} />
   <h2 style={subHeadingStyle}>1. Information We Collect</h2>
   <ul style={listStyle}>
    <li>
     <strong>Personal Information:</strong> Email address, and any information you voluntarily submit.
    </li>
    <li>
     <strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on site, etc., collected via cookies or analytics tools.
    </li>
   </ul>
   <h2 style={subHeadingStyle}>2. How We Use Your Information</h2>
   <ul style={listStyle}>
    <li>Improve website content and user experience</li>
    <li>Respond to inquiries or feedback</li>
    <li>Send occasional blog notifications (if opted-in)</li>
    <li>Monitor website performance and traffic</li>
   </ul>
   <h2 style={subHeadingStyle}>3. Cookies</h2>
   <p style={paragraphStyle}>
    Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, but it may affect how certain parts of the site function.
   </p>
   <h2 style={subHeadingStyle}>4. Data Sharing</h2>
   <p style={paragraphStyle}>
    We do not sell, rent, or trade your personal information with third parties.
   </p>
   <ul style={listStyle}>
    <li>Required by law</li>
    <li>To operate our website we use trusted third-party tools.</li>
   </ul>
   <h2 style={subHeadingStyle}>5. Data Security</h2>
   <p style={paragraphStyle}>
    We take reasonable measures to protect your information, but please note that no method of transmission over the internet is 100% secure.
   </p>
   <h2 style={subHeadingStyle}>6. Third-Party Links</h2>
   <p style={paragraphStyle}>
    Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites.
   </p>
   <h2 style={subHeadingStyle}>7. Your Rights</h2>
   <ul style={listStyle}>
    <li>Request access to the personal data we hold about you</li>
    <li>Ask us to update or delete your data</li>
    <li>Opt-out of any marketing communications</li>
   </ul>
   <p style={paragraphStyle}>
    To exercise these rights, email us at:{' '}
    <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@aninfinitethread.com" style={linkStyle}>
     contact@aninfinite-thread.com
    </Link>
   </p>
   <h2 style={subHeadingStyle}>8. Updates to This Policy</h2>
   <p style={paragraphStyle}>
    We may update this Privacy Policy from time to time.
   </p>
   <hr style={dividerStyle} />
   <p style={{ ...paragraphStyle, marginTop: '2em', fontWeight: 500 }}>
    Thank you for trusting An Infinite Thread.<br />
    If you have any questions about this policy, feel free to contact us.
   </p>
  </div>
 </div>
);

export default Privacy;
