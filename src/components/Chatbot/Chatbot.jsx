// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import styles from './styles.module.scss';
// import chatbotIconUrl from '../../assets/images/icon-hotro.png';

// const Chatbot = () => {
//    const {
//       chatbotContainer,
//       chatbotIcon,
//       chatbotBox,
//       chatbotHeader,
//       chatbotMessages,
//       chatbotInput,
//       chatbotMessage,
//       productCard,
//       botMessageCard,
//       user,
//       bot,
//       open: openClass,
//    } = styles;

//    const [open, setOpen] = useState(false);
//    const [messages, setMessages] = useState([]);
//    const [input, setInput] = useState('');
//    const messagesEndRef = useRef(null);
//    const boxRef = useRef(null);

//    const WEBHOOK_URL = 'https://dom2310.app.n8n.cloud/webhook/chat_bot';

//    // Hàm kiểm tra lời chào
//    const isGreeting = text => {
//       if (!text) return false;
//       const greetings = ['hi', 'hello', 'chào', 'hey', 'xin chào'];
//       const normalized = text.toLowerCase().trim();
//       return greetings.some(
//          g => normalized === g || normalized.startsWith(g + ' ')
//       );
//    };

//    const sendMessage = async () => {
//       if (!input.trim()) return;

//       // Hiển thị tin nhắn người dùng
//       setMessages(prev => [...prev, { from: 'user', text: input }]);

//       // Nếu là lời chào, trả lời ngay mà không gọi webhook
//       if (isGreeting(input)) {
//          setMessages(prev => [
//             ...prev,
//             {
//                from: 'bot',
//                text: '👋 Chào bạn! Mình là TiTi Chatbot,mình luôn ở đây để lắng nghe bạn',
//             },
//          ]);
//          setInput('');
//          return;
//       }

//       // Gửi request tìm sản phẩm
//       try {
//          const res = await axios.post(WEBHOOK_URL, { message: input });
//          const data = res.data.data;

//          setMessages(prev => [
//             ...prev,
//             {
//                from: 'bot',
//                text:
//                   data.message ||
//                   'Xin lỗi, mình chưa tìm thấy sản phẩm phù hợp!',
//                products: data.products || [],
//                totalResults: data.totalResults || 0,
//                suggestions: data.suggestions || [],
//             },
//          ]);
//       } catch (error) {
//          console.error(error);
//          setMessages(prev => [
//             ...prev,
//             { from: 'bot', text: '❌ Lỗi kết nối tới server.' },
//          ]);
//       }

//       setInput('');
//    };

//    const handleKeyPress = e => {
//       if (e.key === 'Enter') sendMessage();
//    };

//    // Scroll xuống tin nhắn mới
//    useEffect(() => {
//       if (messagesEndRef.current) {
//          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//    }, [messages, open]);

//    // Click ra ngoài đóng chatbot
//    useEffect(() => {
//       const handleClickOutside = event => {
//          if (
//             boxRef.current &&
//             !boxRef.current.contains(event.target) &&
//             !event.target.closest(`.${chatbotIcon}`)
//          ) {
//             setOpen(false);
//          }
//       };
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//          document.removeEventListener('mousedown', handleClickOutside);
//       };
//    }, [boxRef, chatbotIcon]);

//    // Hiển thị tin nhắn chào ngay khi mở chatbot
//    useEffect(() => {
//       if (open && messages.length === 0) {
//          setMessages([
//             {
//                from: 'bot',
//                text: '👋 Hi! Mình là TiTi Chatbot, mình luôn sẵn sàng giúp bạn tìm sản phẩm theo tên, size, giá…',
//             },
//          ]);
//       }
//    }, [open]);

//    return (
//       <div className={chatbotContainer}>
//          {!open && (
//             <div className={chatbotIcon} onClick={() => setOpen(true)}>
//                <img src={chatbotIconUrl} alt="ChatbotIcon" />
//             </div>
//          )}

//          <div ref={boxRef} className={`${chatbotBox} ${open ? openClass : ''}`}>
//             <div className={chatbotHeader}>
//                <span>TiTi Assistant</span>
//                <button onClick={() => setOpen(false)}>✖</button>
//             </div>

//             <div className={chatbotMessages}>
//                {messages.map((msg, index) => (
//                   <div
//                      key={index}
//                      className={`${chatbotMessage} ${
//                         msg.from === 'user' ? user : bot
//                      }`}
//                   >
//                      {msg.from === 'bot' &&
//                      msg.products &&
//                      msg.products.length > 0 ? (
//                         <div className={botMessageCard}>
//                            <p>
//                               🛍️ Mình tìm thấy {msg.totalResults} sản phẩm phù
//                               hợp:
//                            </p>
//                            {msg.products.map((p, i) => (
//                               <div key={i} className={productCard}>
//                                  {p.IMAGE && (
//                                     <img
//                                        src={p.IMAGE}
//                                        alt={p.NAME}
//                                        style={{
//                                           width: '100px',
//                                           height: '100px',
//                                           objectFit: 'cover',
//                                           marginBottom: '5px',
//                                           borderRadius: '5px',
//                                        }}
//                                     />
//                                  )}
//                                  <strong>{p.NAME}</strong>
//                                  <p>📏 Size: {p.SIZE}</p>
//                                  <p>💰 Giá: {p.PRICE}</p>
//                                  <p>
//                                     📦{' '}
//                                     {p.QUANTITY > 5
//                                        ? '✅ Còn hàng'
//                                        : p.QUANTITY > 0
//                                        ? '⚠️ Sắp hết'
//                                        : '❌ Hết hàng'}{' '}
//                                     (SL: {p.QUANTITY})
//                                  </p>
//                                  <p>
//                                     📊 Độ phù hợp: {Math.round(p.matchScore)}%
//                                  </p>
//                               </div>
//                            ))}
//                            {msg.totalResults > 8 && (
//                               <p>
//                                  📋 Và {msg.totalResults - 8} sản phẩm khác...
//                               </p>
//                            )}

//                            {msg.suggestions && msg.suggestions.length > 0 && (
//                               <p>🔹 Gợi ý size: {msg.suggestions.join(', ')}</p>
//                            )}
//                         </div>
//                      ) : (
//                         <span>{msg.text}</span>
//                      )}
//                   </div>
//                ))}
//                <div ref={messagesEndRef} />
//             </div>

//             <div className={chatbotInput}>
//                <input
//                   type="text"
//                   value={input}
//                   onChange={e => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Nhập tin nhắn..."
//                />
//                <button onClick={sendMessage}>Gửi</button>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Chatbot;

// NEWWWWWWWWWWW

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import chatbotIconUrl from '../../assets/images/icon-hotro.png';

const Chatbot = () => {
   const {
      chatbotContainer,
      chatbotIcon,
      chatbotBox,
      chatbotHeader,
      chatbotMessages,
      chatbotInput,
      chatbotMessage,
      productCard,
      botMessageCard,
      user,
      bot,
      open: openClass,
   } = styles;

   const [open, setOpen] = useState(false);
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState('');
   const messagesEndRef = useRef(null);
   const boxRef = useRef(null);

   const WEBHOOK_URL = 'https://dom2310.app.n8n.cloud/webhook/chat_bot';

   // Khi mở chatbot, thêm tin nhắn chào mừng
   useEffect(() => {
      if (open && messages.length === 0) {
         setMessages([
            {
               from: 'bot',
               text: 'Hi, mình là Titi chatbot, luôn sẵn sàng giúp đỡ bạn!',
               isWelcome: true,
            },
         ]);
      }
   }, [open]);

   const sendMessage = async () => {
      if (!input.trim()) return;

      const userText = input.trim();
      const greetings = ['hi', 'hello', 'hey', 'chào'];

      // Hiển thị tin nhắn người dùng
      setMessages(prev => [...prev, { from: 'user', text: userText }]);

      // Kiểm tra nếu chỉ là lời chào
      const isGreeting = userText
         .toLowerCase()
         .split(' ')
         .some(word => greetings.includes(word));
      if (isGreeting) {
         setMessages(prev => [
            ...prev,
            {
               from: 'bot',
               text: 'Chào bạn! Mình là Titi chatbot, bạn muốn tìm sản phẩm nào?',
            },
         ]);
         setInput('');
         return; // Không gọi API
      }

      // Trường hợp người dùng hỏi sản phẩm → gọi API
      try {
         const res = await axios.post(WEBHOOK_URL, { message: userText });
         const data = res.data.data;

         setMessages(prev => [
            ...prev,
            {
               from: 'bot',
               text:
                  data.message ||
                  'Xin lỗi, mình chưa tìm thấy sản phẩm phù hợp!',
               products: data.products || [],
               totalResults: data.totalResults || 0,
               suggestions: data.suggestions || [],
            },
         ]);
      } catch (error) {
         console.error(error);
         setMessages(prev => [
            ...prev,
            { from: 'bot', text: '❌ Lỗi kết nối tới server.' },
         ]);
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
               <img src={chatbotIconUrl} alt="ChatbotIcon" />
            </div>
         )}

         <div ref={boxRef} className={`${chatbotBox} ${open ? openClass : ''}`}>
            <div className={chatbotHeader}>
               <span>TiTi Assistant</span>
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
                     {msg.from === 'bot' &&
                     msg.products &&
                     msg.products.length > 0 ? (
                        <div
                           className={botMessageCard}
                           style={{
                              animation: 'fadeIn 0.3s',
                              animationFillMode: 'forwards',
                           }}
                        >
                           <p>
                              🛍️ Mình tìm thấy {msg.totalResults} sản phẩm phù
                              hợp:
                           </p>
                           {msg.products.map((p, i) => (
                              <div
                                 key={i}
                                 className={productCard}
                                 style={{
                                    animation: 'fadeIn 0.3s',
                                    animationFillMode: 'forwards',
                                    animationDelay: `${i * 0.1}s`,
                                 }}
                              >
                                 {p.IMAGE && <img src={p.IMAGE} alt={p.NAME} />}
                                 <strong>{p.NAME}</strong>
                                 <p>📏 Size: {p.SIZE}</p>
                                 <p>💰 Giá: {p.PRICE}</p>
                                 <p>
                                    📦{' '}
                                    {p.QUANTITY > 5
                                       ? '✅ Còn hàng'
                                       : p.QUANTITY > 0
                                       ? '⚠️ Sắp hết'
                                       : '❌ Hết hàng'}{' '}
                                    (SL: {p.QUANTITY})
                                 </p>
                                 <p>
                                    📊 Độ phù hợp: {Math.round(p.matchScore)}%
                                 </p>
                              </div>
                           ))}
                           {msg.totalResults > 8 && (
                              <p>
                                 📋 Và {msg.totalResults - 8} sản phẩm khác...
                              </p>
                           )}
                           {msg.suggestions && msg.suggestions.length > 0 && (
                              <p>🔹 Gợi ý size: {msg.suggestions.join(', ')}</p>
                           )}
                        </div>
                     ) : (
                        <span
                           style={{
                              animation: 'fadeIn 0.3s',
                              animationFillMode: 'forwards',
                              animationDelay: `${index * 0.05}s`,
                           }}
                        >
                           {msg.text}
                        </span>
                     )}
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
