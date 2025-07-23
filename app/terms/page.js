import React from 'react';

const styles = {
 container: {
  maxWidth: '700px',
  margin: '40px auto',
  padding: '32px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  color: '#222',
  lineHeight: 1.7,
 },
 heading: {
  fontSize: '2.2rem',
  fontWeight: 700,
  marginBottom: '8px',
  color: '#1a202c',
 },
 updated: {
  fontSize: '1rem',
  color: '#718096',
  marginBottom: '24px',
 },
 sectionTitle: {
  fontSize: '1.15rem',
  fontWeight: 600,
  marginTop: '28px',
  marginBottom: '8px',
  color: '#2d3748',
 },
 list: {
  marginLeft: '24px',
  marginBottom: '12px',
 },
 email: {
  color: '#3182ce',
  textDecoration: 'underline',
  wordBreak: 'break-all',
 },
};

const page = () => (
 <div style={styles.container}>
  <h1 style={styles.heading}>Terms &amp; Conditions</h1>
  <div style={styles.updated}>Last Updated: 17 July 2025</div>
  <p>
   Welcome to <b>An Infinite Thread</b>. By accessing or using our blogs, you agree to these Terms &amp; Conditions. Please read them carefully before continuing to use the site.
  </p>

  <div>
   <div style={styles.sectionTitle}>1. Use of Our Content</div>
   <p>
    All articles, images, and other content on this blog are the property of An Infinite Thread, unless otherwise credited.
   </p>
   <b>You may:</b>
   <ul style={styles.list}>
    <li>Read, share, and link to our content for personal, non-commercial purposes.</li>
    <li>Quote brief excerpts with proper credit and a backlink.</li>
   </ul>
   <b>You may not:</b>
   <ul style={styles.list}>
    <li>Republish full content without permission</li>
    <li>Modify or sell our content.</li>
    <li>Use any material for commercial purposes without prior written consent.</li>
   </ul>
  </div>

  <div>
   <div style={styles.sectionTitle}>2. User Behavior</div>
   <p>When using this site, you agree not to:</p>
   <ul style={styles.list}>
    <li>Post spam, offensive, or misleading content.</li>
    <li>Try to hack, disrupt, or damage the website.</li>
   </ul>
   <p>
    We reserve the right to moderate or delete any comments or user-submitted content at our discretion.
   </p>
  </div>

  <div>
   <div style={styles.sectionTitle}>3. External Links</div>
   <p>
    Our blog may include links to third-party websites. We are not responsible for the content, practices, or policies of those external sites.
   </p>
  </div>

  <div>
   <div style={styles.sectionTitle}>4. No Guarantees</div>
   <p>
    All content is provided for informational and educational purposes only. We strive for accuracy but cannot guarantee that everything is up-to-date or error-free.
   </p>
  </div>

  <div>
   <div style={styles.sectionTitle}>5. Limitation of Liability</div>
   <p>
    An Infinite Thread is not liable for:
   </p>
   <ul style={styles.list}>
    <li>Any direct or indirect damages resulting from your use of the site</li>
    <li>Content on external websites linked from this blog</li>
    <li>Errors, omissions, or delays in content</li>
   </ul>
  </div>

  <div>
   <div style={styles.sectionTitle}>6. Changes to Terms</div>
   <p>
    We may update these Terms &amp; Conditions at any time without notice. Continued use of the blog after changes means you accept the updated terms.
   </p>
  </div>

  <div>
   <div style={styles.sectionTitle}>7. Contact</div>
   <p>
    For questions about these terms, email us at:<br />
    <span style={styles.email}>contact@aninfinitethread.com</span>
   </p>
  </div>

  <p style={{marginTop: 32}}>
   Thanks for reading and supporting An Infinite Thread. We're glad to have you here.
  </p>
 </div>
);

export default page;
