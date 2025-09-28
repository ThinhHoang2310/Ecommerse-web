import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
import Chatbot from '@components/Chatbot/Chatbot';

function App() {
   return (
      <StoreProvider>
         <ToastProvider>
            <SideBarProvider>
               <BrowserRouter>
                  <SideBar />
                  <Suspense fallback={<div>Loading...</div>}>
                     <Routes>
                        {routers.map((item, index) => {
                           return (
                              <Route
                                 key={index}
                                 path={item.path}
                                 element={<item.component />}
                              />
                           );
                        })}
                     </Routes>
                  </Suspense>

                  {/* Thêm chatbot luôn hiển thị */}
                  <div
                     style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 999,
                     }}
                  >
                     <Chatbot />
                  </div>
               </BrowserRouter>
            </SideBarProvider>
         </ToastProvider>
      </StoreProvider>
   );
}

export default App;
