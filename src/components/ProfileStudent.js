import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, User, Mail, Phone, Book, FileText } from 'lucide-react';

const ProfileStudent = ({ student, onLogout, onBack }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Eliminar cuenta? Esto borrará todos tus datos.')) {
      console.log('Cuenta eliminada');
      navigate('/');
    }
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 mb-6 hover:text-emerald-600"
        >
          <ArrowLeft size={20} />
          <span>Volver a vacantes</span>
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Tu perfil</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <User size={20} className="text-emerald-600" />
              <span className="font-medium">{student.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-emerald-600" />
              <span>{student.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-emerald-600" />
              <span>{student.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Book size={20} className="text-emerald-600" />
              <span>Universidad y Carrera (actualiza en registro)</span>
            </div>
            <div className="flex items-center space-x-3">
              <FileText size={20} className="text-emerald-600" />
              <span>CV: {student.cv}</span>
            </div>
          </div>

          <motion.button
            onClick={handleDelete}
            className="w-full bg-red-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <Trash2 size={16} className="inline mr-2" />
            Eliminar cuenta
          </motion.button>

          <button
            onClick={handleLogoutClick}
            className="w-full mt-4 text-red-600 hover:underline font-medium"
          >
            Salir de sesión
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileStudent;