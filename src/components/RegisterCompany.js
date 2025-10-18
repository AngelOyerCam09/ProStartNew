import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { motion } from 'framer-motion';  
import PasswordInput from './PasswordInput';  
import FileInput from './FileInput';  
import CheckboxTerms from './CheckboxTerms';  
import { ArrowLeft, Building2, MapPin, FileText, Lock, File } from 'lucide-react';  

const RegisterCompany = () => {  
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({  
    name: '',  
    location: '',  
    fiscalProof: null,  
    fiscalPreviewUrl: null,  
    password: '',  
    terms: false  
  });  
  const [loading, setLoading] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (!formData.terms) {  
      alert('Debes aceptar los términos y condiciones');  
      return;  
    }  
    if (!formData.fiscalProof) {  
      alert('Debes subir la constancia fiscal');  
      return;  
    }  
    if (!formData.name || !formData.location || !formData.password) {  
      alert('Debes llenar todos los campos');  
      return;  
    }  

    setLoading(true);  
    setTimeout(() => {  
      console.log('Empresa registrada:', formData);  
      alert('¡Registro exitoso! Bienvenido.');  
      setLoading(false);  
      navigate('/dashboard-company');  
    }, 2000);  
  };  

  const handleFileChange = (e, field) => {  
    const file = e.target.files[0];  
    setFormData(prev => {  
      if (prev[field + 'PreviewUrl']) {  
        URL.revokeObjectURL(prev[field + 'PreviewUrl']);  
      }  

      let previewUrl = null;  
      if (file && file.type.startsWith('image/')) {  
        previewUrl = URL.createObjectURL(file);  
      }  

      return { ...prev, [field]: file, [field + 'PreviewUrl']: previewUrl };  
    });  
  };  

  const renderFilePreview = (file, previewUrl) => {  
    if (!file) return null;  

    const isImage = file.type.startsWith('image/');  
    const fileName = file.name.length > 20 ? file.name.substring(0, 17) + '...' : file.name;  

    return (  
      <motion.div  
        className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center space-x-3"  
        initial={{ opacity: 0, y: 10 }}  
        animate={{ opacity: 1, y: 0 }}  
      >  
        {isImage && previewUrl ? (  
          <>  
            <img src={previewUrl} alt="Preview" className="w-12 h-12 object-cover rounded" />  
            <div>  
              <p className="text-sm font-medium text-gray-800">Imagen seleccionada</p>  
              <p className="text-xs text-gray-500">{fileName}</p>  
            </div>  
          </>  
        ) : (  
          <>  
            {file.name.toLowerCase().endsWith('.pdf') ? <FileText size={32} className="text-red-500" /> : <File size={32} className="text-gray-500" />}  
            <div>  
              <p className="text-sm font-medium text-gray-800">Archivo seleccionado</p>  
              <p className="text-xs text-gray-500">{fileName}</p>  
            </div>  
          </>  
        )}  
      </motion.div>  
    );  
  };  

  if (loading) {  
    return (  
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 flex items-center justify-center p-4">  
        <div className="text-center">  
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>  
          <p className="text-gray-700 font-medium">Registrando...</p>  
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
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Regístrate como empresa</h2>  
          
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
                <MapPin size={16} />  
                <span>Ubicación de la empresa</span>  
              </label>  
              <input  
                type="text"  
                value={formData.location}  
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}  
                className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"  
                required  
              />  
            </div>  

            <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2">Constancia de Situación Fiscal (SAT)</label>  
              <FileInput  
                onChange={(e) => handleFileChange(e, 'fiscalProof')}  
                accept=".pdf,.jpg,.png"  
              />  
              {renderFilePreview(formData.fiscalProof, formData.fiscalPreviewUrl)}  
            </div>  

            <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">  
                <Lock size={16} />  
                <span>Contraseña</span>  
              </label>  
              <PasswordInput  
                placeholder="Crea una contraseña segura"  
                value={formData.password}  
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}  
              />  
            </div>  

            <CheckboxTerms  
              checked={formData.terms}  
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}  
            />  

            <motion.button  
              type="submit"  
              disabled={loading}  
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"  
              whileHover={{ scale: 1.02 }}  
              whileTap={{ scale: 0.98 }}  
            >  
              {loading ? 'Registrando...' : 'Registrarse'}  
            </motion.button>  
          </form>  
        </motion.div>  
      </motion.div>  
    </div>  
  );  
};  

export default RegisterCompany;