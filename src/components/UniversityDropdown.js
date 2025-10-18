import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  'UANE',
  'Instituto Tecnológico de Monterrey',
  'La Salle',
  'UAdeC',
  'Instituto Tecnológico de Saltillo'
];

const UniversityDropdown = ({ value, onChange }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 text-gray-900"
      >
        <option value="">Selecciona tu universidad</option>
        {universities.map((uni) => (
          <option key={uni} value={uni}>
            {uni}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UniversityDropdown;