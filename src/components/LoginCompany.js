import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import PasswordInput from './PasswordInput';  
import { ArrowLeft, Building2, Lock } from 'lucide-react';  

const LoginCompany = () => {  
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({ name: '', password: '' });  
  const [loading, setLoading] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (!formData.name || !formData.password) {  
      alert('Debes llenar nombre de empresa y contraseña');  
      return;  
    }  

    setLoading(true);  
    setTimeout(() => {  
      console.log('Empresa logueada:', formData);  
      alert('¡Login exitoso! Bienvenido.');  
      setLoading(false);  
      navigate('/dashboard-company');  
    }, 2000);  
  };  

  if (loading) {  
    return (  
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 flex items-center justify-center p-4">  
        <div className="text-center">  
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>  
          <p className="text-gray-700 font-medium">Iniciando sesión...</p>  
        </div>  
      </div>  
    );  
  }  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4">  
      <motion.div  
        className="max-w-md mx-auto mt-8"  
        initial={{ opacity: 0, x: -20 }}  
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.5 }}  
      >  
        <button  
          onClick={() => navigate('/')}  
          className="flex items-center space-x-2 text-gray-600 mb-6 hover:text-emerald-600 transition-colors"  
        >  
          <ArrowLeft size={20} />  
          <span>Volver</span>  
        </button>  

        <motion.div  
          className="bg-white rounded-3xl p-8 shadow-2xl"  
          initial={{ y: 20 }}  
          animate={{ y: 0 }}  
          transition={{ delay: 0.1 }}  
        >  
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Inicia sesión como empresa</h2>  
          
          <form onSubmit={handleSubmit} className="space-y-4">  
            <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">  
                <Building2 size={16} />  
                <span>Nombre de la empresa</span>  
              </label>  
              <input  
                type="text"  
                value={formData.name}  
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}  
                className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"  
                required  
              />  
            </div>  

            <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">  
                <Lock size={16} />  
                <span>Contraseña</span>  
              </label>  
              <PasswordInput  
                placeholder="Tu contraseña"  
                value={formData.password}  
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}  
              />  
            </div>  

            <motion.button  
              type="submit"  
              disabled={loading}  
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"  
              whileHover={{ scale: 1.02 }}  
              whileTap={{ scale: 0.98 }}  
            >  
              {loading ? 'Iniciando...' : 'Iniciar sesión'}  
            </motion.button>  
          </form>  
        </motion.div>  
      </motion.div>  
    </div>  
  );  
};  

export default LoginCompany;