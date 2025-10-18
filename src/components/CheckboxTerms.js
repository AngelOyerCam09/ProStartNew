import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const CheckboxTerms = ({ checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <motion.div
        className={`w-5 h-5 border-2 rounded ${checked ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'} flex items-center justify-center`}
        onClick={(e) => {
          e.stopPropagation();
          onChange({ target: { checked: !checked } });
        }}
        whileTap={{ scale: 0.95 }}
      >
        {checked && <Check size={16} className="text-white" />}
      </motion.div>
      <span className="text-sm text-gray-600">
        Acepto los{' '}
        <Link 
          to="/terms" 
          className="text-emerald-600 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-all"
          onClick={(e) => { 
            e.stopPropagation(); // Evitar cambiar el check al clic en link
          }}
        >
          términos y condiciones
        </Link>
      </span>
    </label>
  );
};

export default CheckboxTerms;