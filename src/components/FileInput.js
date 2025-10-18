import React from 'react';  
import { Upload } from 'lucide-react';  
import { motion } from 'framer-motion';  

const FileInput = ({ label = '', onChange, accept = '*' }) => {  
  // Manejar label undefined/null para evitar error  
  const safeLabel = label ? label.toLowerCase() : 'archivo';  

  return (  
    <div className="relative">  
      {label && (  
        <label className="block text-sm font-medium text-gray-700 mb-2">  
          {label}  
        </label>  
      )}  
      <motion.div  
        className="w-full px-4 py-6 bg-white/90 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-emerald-400 transition-colors flex items-center justify-center"  
        whileHover={{ scale: 1.02 }}  
      >  
        <Upload size={24} className="text-gray-500 mr-2" />  
        <span className="text-gray-600 font-medium">Subir {safeLabel} (máx. 5MB)</span>  
        <input  
          type="file"  
          accept={accept}  
          onChange={onChange}  
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"  
        />  
      </motion.div>  
    </div>  
  );  
};  

export default FileInput;