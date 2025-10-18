import React, { useState, useContext } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import { VacancyContext } from '../contexts/VacancyContext';  
import { ArrowLeft, Briefcase, MapPin, Send, BookOpen, User, Search, LogOut } from 'lucide-react';  
import StudentAdvice from './StudentAdvice';  

const DashboardStudent = () => {  
  const navigate = useNavigate();  
  const { vacancies, addApplication } = useContext(VacancyContext);  
  const [activeTab, setActiveTab] = useState('vacantes');  
  const [searchQuery, setSearchQuery] = useState('');  

  const filteredVacancies = vacancies.filter(vacancy =>  
    vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    vacancy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    vacancy.company.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    vacancy.requirements.toLowerCase().includes(searchQuery.toLowerCase())  
  );  

  const handleApply = (vacancy) => {  
    addApplication(vacancy.id);  
    alert(`¡Aplicación enviada para "${vacancy.title}" en ${vacancy.company}! Espera respuesta en tu dashboard.`);  
  };  

  const handleLogout = () => {  
    if (window.confirm('¿Seguro que quieres salir?')) {  
      alert('¡Logout exitoso! Redirigiendo al inicio.');  
      navigate('/');  
    }  
  };  

  const tabs = [  
    { id: 'vacantes', label: 'Vacantes', icon: Briefcase },  
    { id: 'consejos', label: 'Consejos', icon: BookOpen },  
    { id: 'perfil', label: 'Perfil', icon: User }  
  ];  

  const renderVacantes = () => (  
    <div>  
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vacantes Disponibles ({filteredVacancies.length})</h2>  
      {/* Barra de búsqueda debajo tabs */}  
      <div className="relative mb-6">  
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />  
        <input  
          type="text"  
          placeholder="Buscar vacantes por título, empresa o descripción..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"  
        />  
      </div>  
      {filteredVacancies.length === 0 ? (  
        <div className="text-center py-12">  
          <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />  
          <p className="text-gray-500 text-lg mb-2">No hay vacantes que coincidan con tu búsqueda.</p>  
          <p className="text-sm text-gray-400">Intenta con otras palabras clave o revisa todas las vacantes.</p>  
        </div>  
      ) : (  
        <div className="space-y-4 max-h-96 overflow-y-auto">  
          {filteredVacancies.map((vacancy) => (  
            <motion.div  
              key={vacancy.id}  
              className="bg-gray-50 p-4 md:p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"  
              whileHover={{ y: -2 }}  
            >  
              <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-3 md:space-y-0">  
                <div className="flex-1">  
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{vacancy.title}</h3>  
                  <p className="text-gray-600 mb-2 leading-relaxed">{vacancy.description}</p>  
                  <p className="text-sm text-gray-500 mb-2 md:mb-3">Requisitos: {vacancy.requirements}</p>  
                  <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-sm text-gray-500 space-y-1 md:space-y-0">  
                    <div className="flex items-center">  
                      <Briefcase size={14} className="mr-1 w-3.5 h-3.5 md:w-4 md:h-4" />  
                      {vacancy.company}  
                    </div>  
                    <div className="flex items-center">  
                      <MapPin size={14} className="mr-1 w-3.5 h-3.5 md:w-4 md:h-4" />  
                      {vacancy.location}  
                    </div>  
                    <div className="text-xs text-gray-400">  
                      {new Date(vacancy.createdAt).toLocaleDateString()}  
                    </div>  
                  </div>  
                </div>  
                <motion.button  
                  onClick={() => handleApply(vacancy)}  
                  className="w-full md:w-auto md:ml-4 px-4 md:px-6 py-3 md:py-2 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"  
                  whileHover={{ scale: 1.02 }}  
                  whileTap={{ scale: 0.98 }}  
                >  
                  <Send size={16} className="flex-shrink-0" />  
                  <span className="whitespace-nowrap">Aplicar Ahora</span>  
                </motion.button>  
              </div>  
            </motion.div>  
          ))}  
        </div>  
      )}  
    </div>  
  );  

  const renderPerfil = () => (  
    <div>  
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tu Perfil</h2>  
      {/* Barra de búsqueda para perfil */}  
      <div className="relative mb-6">  
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />  
        <input  
          type="text"  
          placeholder="Buscar en tu perfil..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"  
        />  
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
        <motion.div  
          className="bg-white rounded-2xl p-6 shadow-lg"  
          whileHover={{ y: -4 }}  
        >  
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h3>  
          <div className="space-y-3 text-sm">  
            <p><span className="font-medium">Nombre:</span> {searchQuery ? (searchQuery.toLowerCase().includes('juan') ? 'Juan Pérez' : '') : 'Juan Pérez'}</p>  
            <p><span className="font-medium">Carrera:</span> {searchQuery ? (searchQuery.toLowerCase().includes('sistema') ? 'Ing. en Sistemas' : '') : 'Ing. en Sistemas'}</p>  
            <p><span className="font-medium">Universidad:</span> {searchQuery ? (searchQuery.toLowerCase().includes('uac') ? 'Universidad Autónoma de Coahuila' : '') : 'Universidad Autónoma de Coahuila'}</p>  
            <p><span className="font-medium">Correo:</span> {searchQuery ? (searchQuery.toLowerCase().includes('juan') ? 'juan@estudiante.com' : '') : 'juan@estudiante.com'}</p>  
          </div>  
        </motion.div>  
        <motion.div  
          className="bg-white rounded-2xl p-6 shadow-lg"  
          whileHover={{ y: -4 }}  
        >  
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Estadísticas</h3>  
          <div className="space-y-3 text-sm">  
            <p><span className="font-medium">Vacantes Aplicadas:</span> 3</p>  
            <p><span className="font-medium">Respuestas Pendientes:</span> 2</p>  
            <p><span className="font-medium">Perfil Completado:</span> 85%</p>  
          </div>  
          <motion.button  
            className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"  
            whileHover={{ scale: 1.02 }}  
          >  
            Actualizar Perfil  
          </motion.button>  
        </motion.div>  
      </div>  
    </div>  
  );  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4">  
      <motion.div  
        className="max-w-4xl mx-auto"  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5 }}  
      >  
        <button  
          onClick={() => navigate('/')}  
          className="flex items-center space-x-2 text-gray-600 mb-6 hover:text-emerald-600 transition-colors"  
        >  
          <ArrowLeft size={20} />  
          <span>Volver al inicio</span>  
        </button>  

        <motion.div  
          className="bg-white rounded-3xl p-8 shadow-2xl"  
          initial={{ y: 20 }}  
          animate={{ y: 0 }}  
          transition={{ delay: 0.1 }}  
        >  
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Estudiante</h1>  
          <p className="text-gray-600 mb-8">¡Bienvenido! Explora vacantes, consejos y tu perfil.</p>  

          {/* Barra de Navegación Tabs (diseño de antes, arriba) */}  
          <div className="flex bg-gray-50 rounded-xl p-1 mb-8">  
            {tabs.map((tab) => (  
              <motion.button  
                key={tab.id}  
                onClick={() => setActiveTab(tab.id)}  
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 ${  
                  activeTab === tab.id  
                    ? 'bg-white text-emerald-600 shadow-md'  
                    : 'text-gray-600 hover:text-emerald-500'  
                }`}  
                whileHover={{ scale: 1.02 }}  
              >  
                <tab.icon size={16} />  
                <span>{tab.label}</span>  
              </motion.button>  
            ))}  
            {/* Botón Salir en esquina derecha */}  
            <motion.button  
              onClick={handleLogout}  
              className="ml-1 p-2 text-gray-600 hover:text-red-600 rounded-lg transition-colors"  
              whileHover={{ scale: 1.05 }}  
              title="Salir"  
            >  
              <LogOut size={18} />  
            </motion.button>  
          </div>  

          {/* Contenido por Tab (con búsqueda debajo en vacantes/perfil) */}  
          <div className="min-h-[500px]">  
            {activeTab === 'vacantes' && renderVacantes()}  
            {activeTab === 'consejos' && <StudentAdvice onBack={() => setActiveTab('vacantes')} />}  
            {activeTab === 'perfil' && renderPerfil()}  
          </div>  
        </motion.div>  
      </motion.div>  
    </div>  
  );  
};  

export default DashboardStudent;