import React from "react";
import WhatsappChatBubbleStyle from './Whatsapppop.module.css';

const WhatsappChatBubble = () => {
    return (
      <a
        href="https://web.whatsapp.com/send?phone=97192244880&text="
        target="_blank"
        rel="noopener noreferrer"
        className={WhatsappChatBubbleStyle["whatsapp-chat-bubble"]}
      >
        <i className="bx text-white bxl-whatsapp"></i>
      </a>
    );
  };
  
  export default WhatsappChatBubble;