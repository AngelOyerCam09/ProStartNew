import React from 'react';  
import { useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import Logo from './Logo';  
import { User, Building, LogIn } from 'lucide-react';  

const LandingPage = () => {  
  const navigate = useNavigate();  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-300 flex flex-col items-center justify-center p-4 space-y-6">  
      <motion.div  
        className="w-full max-w-md"  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6 }}  
      >  
        <Logo />  
      </motion.div>  

      {/* Sección de Registro - Siempre visible arriba */}  
      <motion.div  
        className="w-full max-w-md space-y-4"  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, delay: 0.2 }}  
      >  
        <div className="text-center text-white/90 mb-6">  
          <h2 className="text-2xl font-bold mb-2">¡Únete a ProStart!</h2>  
          <p className="text-sm">Conecta tu futuro profesional</p>  
        </div>  

        <motion.button  
          onClick={() => navigate('/register-student')}  
          className="w-full bg-white text-emerald-700 px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-3"  
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}  
        >  
          <User size={20} />  
          <span>Registrarse como estudiante</span>  
        </motion.button>  

        <motion.button  
          onClick={() => navigate('/register-company')}  
          className="w-full bg-white text-emerald-700 px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-3"  
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}  
        >  
          <Building size={20} />  
          <span>Registrarse como empresa</span>  
        </motion.button>  
      </motion.div>  

      {/* Sección de Login - Siempre visible abajo */}  
      <motion.div  
        className="w-full max-w-md space-y-3"  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, delay: 0.4 }}  
      >  
        <div className="text-center text-white/90 mb-4">  
          <h3 className="text-xl font-semibold">¿Ya tienes cuenta?</h3>  
        </div>  

        <motion.button  
          onClick={() => navigate('/login-student')}  
          className="w-full bg-white/20 text-white px-6 py-3 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center space-x-3"  
          whileHover={{ scale: 1.02 }}  
          whileTap={{ scale: 0.98 }}  
        >  
          <LogIn size={20} />  
          <span>Iniciar sesión como estudiante</span>  
        </motion.button>  

        <motion.button  
          onClick={() => navigate('/login-company')}  
          className="w-full bg-white/20 text-white px-6 py-3 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center space-x-3"  
          whileHover={{ scale: 1.02 }}  
          whileTap={{ scale: 0.98 }}  
        >  
          <LogIn size={20} />  
          <span>Iniciar sesión como empresa</span>  
        </motion.button>  
      </motion.div>  
    </div>  
  );  
};  

export default LandingPage;