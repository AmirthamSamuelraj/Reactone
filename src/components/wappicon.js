import React from "react";
const WhatsAppIcon = () => {
    const handleClick = () => {
        const phoneNumber = '9361266726'; // Replace with your WhatsApp number
        const message = 'Hello, I would like to chat with you!';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div onClick={handleClick} >
             <i className="bi bi-whatsapp icons wappcolor"></i>
             <small className="fs-5 ms-3">9361266726</small>
        </div>
    );
};
export default WhatsAppIcon;