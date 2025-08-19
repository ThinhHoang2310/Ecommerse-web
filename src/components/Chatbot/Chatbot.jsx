// const WEBHOOK_URL = 'https://n8n-chatbot-g2du.onrender.com/webhook/chatbot';

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

const Chatbot = () => {
   const {
      chatbotContainer,
      chatbotIcon,
      chatbotBox,
      chatbotHeader,
      chatbotMessages,
      chatbotInput,
      chatbotMessage,
      user,
      bot,
      open: openClass,
   } = styles;

   const [open, setOpen] = useState(false);
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState('');
   const messagesEndRef = useRef(null);
   const boxRef = useRef(null);

   const WEBHOOK_URL = 'https://thinhhoang.app.n8n.cloud/webhook/chatbot';

   const sendMessage = async () => {
      if (!input.trim()) return;

      // Hiển thị tin nhắn người dùng
      setMessages(prev => [...prev, { from: 'user', text: input }]);

      try {
         const res = await axios.post(WEBHOOK_URL, { message: input });

         const suggestions = res.data.suggestions;

         let replyText = '';

         if (suggestions && suggestions.length > 0) {
            replyText = suggestions
               .map(
                  s => `${s.name} - Size: ${s.size} - Số lượng: ${s.quantity}`
               )
               .join('\n');
         } else {
            replyText = 'Xin lỗi, mình chưa tìm được sản phẩm phù hợp!';
         }

         setMessages(prev => [...prev, { from: 'bot', text: replyText }]);
      } catch (error) {
         console.error(error);
         setMessages(prev => [...prev, { from: 'bot', text: 'Lỗi server.' }]);
      }

      setInput('');
   };

   const handleKeyPress = e => {
      if (e.key === 'Enter') sendMessage();
   };

   // Scroll xuống tin nhắn mới
   useEffect(() => {
      if (messagesEndRef.current) {
         messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   }, [messages, open]);

   // Click ra ngoài đóng chatbot
   useEffect(() => {
      const handleClickOutside = event => {
         if (
            boxRef.current &&
            !boxRef.current.contains(event.target) &&
            !event.target.closest(`.${chatbotIcon}`)
         ) {
            setOpen(false);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [boxRef, chatbotIcon]);

   return (
      <div className={chatbotContainer}>
         {!open && (
            <div className={chatbotIcon} onClick={() => setOpen(true)}>
               💬
            </div>
         )}

         <div ref={boxRef} className={`${chatbotBox} ${open ? openClass : ''}`}>
            <div className={chatbotHeader}>
               <span>Chatbot</span>
               <button onClick={() => setOpen(false)}>✖</button>
            </div>

            <div className={chatbotMessages}>
               {messages.map((msg, index) => (
                  <div
                     key={index}
                     className={`${chatbotMessage} ${
                        msg.from === 'user' ? user : bot
                     }`}
                  >
                     <span>{msg.text}</span>
                  </div>
               ))}
               <div ref={messagesEndRef} />
            </div>

            <div className={chatbotInput}>
               <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn..."
               />
               <button onClick={sendMessage}>Gửi</button>
            </div>
         </div>
      </div>
   );
};

export default Chatbot;
