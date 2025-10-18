import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Mail, FileText, DollarSign, Clock, Gift } from 'lucide-react';

const NewVacancyForm = ({ onAdd, onCancel }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    rhEmail: '',
    description: '',
    requirements: '',
    salary: '',
    schedule: '',
    offers: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVacancy = { ...formData, id: Date.now().toString() };
    onAdd(newVacancy);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4">
      <motion.div
        className="max-w-2xl mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={onCancel}
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600"
          >
            <ArrowLeft size={20} />
            <span>Volver</span>
          </button>
        </div>

        <motion.div
          className="bg-white rounded-3xl p-8 shadow-2xl"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Nueva oferta de práctica</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Briefcase size={16} />
                <span>Nombre de la vacante</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Mail size={16} />
                <span>Correo de RH</span>
              </label>
              <input
                type="email"
                value={formData.rhEmail}
                onChange={(e) => setFormData({ ...formData, rhEmail: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <FileText size={16} />
                <span>Descripción breve</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 h-20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <FileText size={16} />
                <span>Requisitos</span>
              </label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 h-20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <DollarSign size={16} />
                <span>Sueldo (opcional)</span>
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                placeholder="Ej: $5000/mes"
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Clock size={16} />
                <span>Horario y días de labor</span>
              </label>
              <input
                type="text"
                value={formData.schedule}
                onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Gift size={16} />
                <span>Qué ofrece</span>
              </label>
              <textarea
                value={formData.offers}
                onChange={(e) => setFormData({ ...formData, offers: e.target.value })}
                className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 h-20"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              Enviar vacante
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewVacancyForm;