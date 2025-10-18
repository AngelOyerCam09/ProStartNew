import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <motion.div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full p-4 rounded-2xl shadow-2xl ${
        type === 'success'
          ? 'bg-emerald-100 border border-emerald-300 text-emerald-800'
          : 'bg-red-100 border border-red-300 text-red-800'
      }`}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        {type === 'success' ? (
          <CheckCircle2 size={20} className="text-emerald-600" />
        ) : (
          <AlertCircle size={20} className="text-red-600" />
        )}
        <span className="font-medium">{message}</span>
      </div>
    </motion.div>
  );
};

export default Toast;