import React, { useState, useContext } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import { VacancyContext } from '../contexts/VacancyContext';  
import { ArrowLeft, Plus, Trash2, Briefcase, MapPin, FileText, UserCheck, CheckCircle, XCircle, Search, LogOut } from 'lucide-react';  

const DashboardCompany = () => {  
  const navigate = useNavigate();  
  const { vacancies, applications, addVacancy, deleteVacancy, updateApplicationStatus, getApplicationsByVacancy } = useContext(VacancyContext);  
  const [activeTab, setActiveTab] = useState('vacantes');  
  const [showForm, setShowForm] = useState(false);  
  const [searchQuery, setSearchQuery] = useState('');  
  const [formData, setFormData] = useState({  
    title: '',  
    description: '',  
    requirements: '',  
    location: 'Saltillo, Coahuila'  
  });  

  const companyVacancies = vacancies.filter(v => v.company === 'Mi Empresa');  
  const filteredVacancies = companyVacancies.filter(vacancy =>  
    vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||  
    vacancy.description.toLowerCase().includes(searchQuery.toLowerCase())  
  );  

  const pendingApps = applications.filter(app => app.status === 'pending');  
  const filteredPendingApps = pendingApps.filter(app =>  
    app.studentName.toLowerCase().includes(searchQuery.toLowerCase())  
  );  

  const appsByVacancy = {};  
  filteredPendingApps.forEach(app => {  
    if (!appsByVacancy[app.vacancyId]) {  
      appsByVacancy[app.vacancyId] = [];  
    }  
    appsByVacancy[app.vacancyId].push(app);  
  });  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (formData.title && formData.description) {  
      addVacancy({ ...formData, company: 'Mi Empresa' });  
      setFormData({ title: '', description: '', requirements: '', location: 'Saltillo, Coahuila' });  
      setShowForm(false);  
    } else {  
      alert('Llena al menos título y descripción');  
    }  
  };  

  const handleLogout = () => {  
    if (window.confirm('¿Seguro que quieres salir?')) {  
      alert('¡Logout exitoso! Redirigiendo al inicio.');  
      navigate('/');  
    }  
  };  

  const tabs = [  
    { id: 'vacantes', label: 'Mis Vacantes', icon: Briefcase },  
    { id: 'aplicadas', label: 'Aplicaciones', icon: FileText }  
  ];  

  const renderVacantes = () => (  
    <div>  
      <div className="flex items-center justify-between mb-6">  
        <h2 className="text-2xl font-semibold text-gray-800">Mis Vacantes ({filteredVacancies.length})</h2>  
        <motion.button  
          onClick={() => setShowForm(!showForm)}  
          className="bg-emerald-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 font-semibold hover:bg-emerald-600 transition-colors"  
          whileHover={{ scale: 1.05 }}  
        >  
          <Plus size={20} />  
          <span>{showForm ? 'Cancelar' : 'Nueva Vacante'}</span>  
        </motion.button>  
      </div>  
      {/* Barra de búsqueda debajo tabs */}  
      <div className="relative mb-6">  
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />  
        <input  
          type="text"  
          placeholder="Buscar vacantes por título o descripción..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"  
        />  
      </div>  
      <span className="text-sm text-gray-500 block mb-4">Muestra {filteredVacancies.length} de {companyVacancies.length}</span>  

      {showForm && (  
        <motion.div  
          className="space-y-4 mb-8 p-6 bg-gray-50 rounded-2xl"  
          initial={{ opacity: 0, height: 0 }}  
          animate={{ opacity: 1, height: 'auto' }}  
          transition={{ duration: 0.3 }}  
        >  
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Agregar Nueva Vacante</h3>  
          <form onSubmit={handleSubmit} className="space-y-3">  
            <input  
              type="text"  
              placeholder="Título (ej: Desarrollador Junior)"  
              value={formData.title}  
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}  
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"  
              required  
            />  
            <textarea  
              placeholder="Descripción de la vacante"  
              value={formData.description}  
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}  
              rows="3"  
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"  
              required  
            />  
            <input  
              type="text"  
              placeholder="Requisitos (ej: React, Git)"  
              value={formData.requirements}  
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}  
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"  
            />  
            <input  
              type="text"  
              placeholder="Ubicación"  
              value={formData.location}  
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}  
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"  
            />  
            <motion.button  
              type="submit"  
              className="w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors"  
              whileHover={{ scale: 1.02 }}  
            >  
              Publicar Vacante  
            </motion.button>  
          </form>  
        </motion.div>  
      )}  

      <div className="space-y-4">  
        {filteredVacancies.length === 0 ? (  
          <div className="text-center py-12">  
            <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />  
            <p className="text-gray-500 text-lg">No hay vacantes que coincidan con tu búsqueda.</p>  
            <p className="text-sm text-gray-400 mt-2">Intenta con otras palabras o agrega una nueva vacante.</p>  
          </div>  
        ) : (  
          filteredVacancies.map((vacancy) => (  
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
                      <MapPin size={14} className="mr-1 w-3.5 h-3.5 md:w-4 md:h-4" />  
                      {vacancy.location}  
                    </div>  
                    <div className="text-xs text-gray-400">  
                      {new Date(vacancy.createdAt).toLocaleDateString()}  
                    </div>  
                  </div>  
                </div>  
                <motion.button  
                  onClick={() => deleteVacancy(vacancy.id)}  
                  className="w-full md:w-auto md:ml-4 px-4 md:px-6 py-3 md:py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"  
                  whileHover={{ scale: 1.02 }}  
                  whileTap={{ scale: 0.98 }}  
                >  
                  <Trash2 size={16} className="flex-shrink-0" />  
                  <span>Eliminar</span>  
                </motion.button>  
              </div>  
            </motion.div>  
          ))  
        )}  
      </div>  
    </div>  
  );  

  const renderAplicadas = () => (  
    <div>  
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aplicaciones Pendientes ({filteredPendingApps.length})</h2>  
      {/* Barra de búsqueda debajo tabs */}  
      <div className="relative mb-6">  
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />  
        <input  
          type="text"  
          placeholder="Buscar estudiantes por nombre..."  
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}  
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"  
        />  
      </div>  
      <span className="text-sm text-gray-500 block mb-4">Muestra {filteredPendingApps.length} de {pendingApps.length}</span>  
      {filteredPendingApps.length === 0 ? (  
        <div className="text-center py-12">  
          <FileText size={48} className="mx-auto text-gray-300 mb-4" />  
          <p className="text-gray-500 text-lg">No hay aplicaciones pendientes que coincidan.</p>  
          <p className="text-sm text-gray-400 mt-2">Publica más vacantes o revisa otras secciones.</p>  
        </div>  
      ) : (  
        <div className="space-y-6">  
          {Object.keys(appsByVacancy).map(vacancyId => {  
            const vacancy = vacancies.find(v => v.id === vacancyId);  
            if (!vacancy) return null;  
            const apps = getApplicationsByVacancy(vacancyId).filter(app => app.status === 'pending' && app.studentName.toLowerCase().includes(searchQuery.toLowerCase()));  
            if (apps.length === 0) return null;  

            return (  
              <motion.div  
                key={vacancyId}  
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200"  
                initial={{ opacity: 0, y: 20 }}  
                animate={{ opacity: 1, y: 0 }}  
              >  
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 space-y-2 md:space-y-0">  
                  <div className="flex-1">  
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{vacancy.title}</h3>  
                    <p className="text-gray-600 mb-1 md:mb-2 leading-relaxed">{vacancy.description}</p>  
                    <div className="flex items-center space-x-4 text-sm text-gray-500">  
                      <div>{apps.length} Aplicación{apps.length > 1 ? 'es' : ''} Pendiente{apps.length > 1 ? 's' : ''}</div>  
                    </div>  
                  </div>  
                </div>  

                <div className="space-y-3">  
                  {apps.map((app) => (  
                    <motion.div  
                      key={app.id}  
                      className="bg-gray-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0"  
                      whileHover={{ scale: 1.02 }}  
                    >  
                      <div className="flex items-center space-x-3 flex-1">  
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">  
                          {app.studentName.charAt(0).toUpperCase()}  
                        </div>  
                        <div className="flex-1 min-w-0">  
                          <p className="font-medium text-gray-800 truncate">{app.studentName}</p>  
                          <p className="text-sm text-gray-500">Aplicó: {new Date(app.appliedAt).toLocaleDateString()}</p>  
                        </div>  
                      </div>  
                      <div className="flex space-x-2 w-full sm:w-auto flex-col sm:flex-row">  
                        <motion.button  
                          onClick={() => {  
                            updateApplicationStatus(app.id, 'accepted');  
                            alert(`¡Aplicación de ${app.studentName} aceptada! Envía un email de confirmación.`);  
                          }}  
                          className="flex-1 sm:flex-none px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-1 text-sm"  
                          whileHover={{ scale: 1.02 }}  
                        >  
                          <CheckCircle size={16} className="flex-shrink-0" />  
                          <span>Aceptar</span>  
                        </motion.button>  
                        <motion.button  
                          onClick={() => {  
                            updateApplicationStatus(app.id, 'rejected');  
                            alert(`¡Aplicación de ${app.studentName} rechazada! Considera feedback.`);  
                          }}  
                          className="flex-1 sm:flex-none px-4 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-1 text-sm"  
                          whileHover={{ scale: 1.02 }}  
                        >  
                          <XCircle size={16} className="flex-shrink-0" />  
                          <span>Rechazar</span>  
                        </motion.button>  
                      </div>  
                    </motion.div>  
                  ))}  
                </div>  
              </motion.div>  
            );  
          })}  
        </div>  
      )}  
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Empresa</h1>  
          <p className="text-gray-600 mb-8">Gestiona tus vacantes y revisa aplicaciones recibidas.</p>  

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

          {/* Contenido por Tab */}  
          <div className="min-h-[500px]">  
            {activeTab === 'vacantes' && renderVacantes()}  
            {activeTab === 'aplicadas' && renderAplicadas()}  
          </div>  
        </motion.div>  
      </motion.div>  
    </div>  
  );  
};  

export default DashboardCompany;