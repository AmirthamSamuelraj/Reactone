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
             <i className="bi bi-whatsapp iconsmall wappcolor"></i>
        </div>
    );
};
export default WhatsAppIcon;