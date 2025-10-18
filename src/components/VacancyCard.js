import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Mail } from 'lucide-react';

const VacancyCard = ({ vacancy, onApply }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleFull = () => setShowFull(!showFull);

  return (
    <motion.div
      className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{vacancy.title}</h3>
      <p className="text-gray-600 mb-4">{showFull ? vacancy.fullDescription : vacancy.description}</p>
      
      {showFull && (
        <>
          <p className="text-sm text-gray-500 mb-2"><strong>Requisitos:</strong> {vacancy.requirements}</p>
          {vacancy.salary && <p className="text-sm text-emerald-600 mb-2"><strong>Sueldo:</strong> {vacancy.salary}</p>}
          <p className="text-sm text-gray-500 mb-2"><strong>Horario:</strong> {vacancy.schedule}</p>
          <p className="text-sm text-gray-500 mb-2"><strong>Ofrece:</strong> {vacancy.offers}</p>
        </>
      )}

      <div className="flex justify-between items-center mt-4">
        <motion.button
          onClick={toggleFull}
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
          whileTap={{ scale: 0.95 }}
        >
          <Eye size={16} />
          <span>{showFull ? 'Ver menos' : 'Ver más'}</span>
        </motion.button>
        
        {showFull && (
          <motion.button
            onClick={() => onApply(vacancy)}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-2xl font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} />
            <span>Aplicar a vacante</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default VacancyCard;