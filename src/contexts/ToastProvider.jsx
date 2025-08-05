import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createContext } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
   const value = {
      toast,
   };

   return (
      <ToastContext.Provider value={value}>
         {children}
         <ToastContainer autoClose={1500} />
      </ToastContext.Provider>
   );
};
