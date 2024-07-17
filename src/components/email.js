import React from 'react';
 

const MailIcon = ({ email, subject, body }) => {
  const handleMailClick = () => {
    if (!email) {
      console.error('Email prop is missing');
      return;
    }

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // console.log('Redirecting to:', mailtoLink); // Debugging line to check the mailto link

    window.location.href = mailtoLink;
  };

  return (
    <>
    <i 
      className="bi bi-envelope-fill icons email-icon" 
      style={{   cursor: 'pointer'  }} 
      onClick={handleMailClick}
    ></i>
    <small className="ms-3 fs-5">amirtham802@gmail.com</small>
    </>
  );
};

export default MailIcon;
