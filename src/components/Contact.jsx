import React from 'react';

const contactData = [
  { icon: '📧', title: 'Email', content: 'shubham12rai@gmail.com', href: 'mailto:shubham12rai@gmail.com' },
  { icon: '📱', title: 'Phone', content: '+91 9074356013' },
  { icon: '🔗', title: 'LinkedIn', content: 'shubham-rai-react-dev', href: 'https://linkedin.com/in/shubham-rai-react-dev' },
  { icon: '📍', title: 'Location', content: 'Bhopal, Madhya Pradesh' }
];

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <h2><span className="num">07</span> Contact</h2>
        <div className="line"></div>
      </div>
      <div className="contact-grid">
        {contactData.map((item, i) => (
          <div className="contact-item" key={i}>
            <div className="icon-wrap">{item.icon}</div>
            <h4>{item.title}</h4>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.content}</a>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;