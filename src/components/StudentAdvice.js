import React from 'react';  
import { motion } from 'framer-motion';  
import { Play, FileText, Image as ImageIcon } from 'lucide-react';  
import { mockCompanyAdvice } from '../mock/applications';  

const StudentAdvice = ({ onBack }) => {  
  const adviceContent = [  
    {  
      title: 'Cómo actuar en tu primera entrevista',  
      type: 'video',  
      url: 'https://www.youtube.com/embed/toYqGCBi1gM',  
      description: 'Aprende tips esenciales para impresionar en entrevistas laborales.'  
    },  
    {  
      title: 'Cómo armar tu primer CV',  
      type: 'video',  
      url: 'https://www.youtube.com/embed/Rl7a8LWM0L4',  
      description: 'Guía paso a paso para crear un CV que destaque tus habilidades.'  
    },  
    {  
      title: '5 grandes consejos para practicantes',  
      type: 'video',  
      url: 'https://www.youtube.com/embed/BdTtrczZMYo',  
      description: 'Consejos clave para triunfar en tu práctica profesional.'  
    },  
    {  
      title: 'Mentalidad exitosa',  
      type: 'video',  
      url: 'https://www.youtube.com/embed/pI3EgEamWWA',  
      description: 'Desarrolla la mentalidad ganadora para tu carrera profesional.'  
    },  
    {  
      title: 'Infograma: Errores comunes en entrevistas',  
      type: 'image',  
      url: '/Slide-1.jpg', // Ruta directa: pon la imagen en /public/Slide-1.jpg  
      description: 'Visualiza los errores más frecuentes y cómo evitarlos.'  
    },  
    {  
      title: 'Infograma: Estructura ideal de CV',  
      type: 'image',  
      url: '/Slide-2.jpg', // Ruta directa: pon la imagen en /public/Slide-2.jpg  
      description: 'Descubre la estructura perfecta para tu currículum.'  
    }  
  ];  

  return (  
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4 pt-32 relative">  
      {/* Fondo degradado suave */}  
      <motion.div  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5 }}  
        className="space-y-6 max-w-4xl mx-auto"  
      >  
        {/* Botón Volver */}  
        <div className="flex items-center space-x-2 mb-6">  
          <button  
            onClick={onBack}  
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"  
          >  
            <Play size={20} className="rotate-180" />  
            <span>Volver a vacantes</span>  
          </button>  
        </div>  

        {/* Título Principal */}  
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 px-4">Consejos para tu carrera</h1>  

        {/* Sección Videos Educativos */}  
        <div className="bg-white rounded-3xl p-6 shadow-xl">  
          <h2 className="text-xl font-bold text-gray-800 mb-4">Videos educativos</h2>  
          <div className="grid md:grid-cols-2 gap-6">  
            {adviceContent.filter(item => item.type === 'video').map((item, index) => (  
              <motion.div  
                key={index}  
                className="bg-gray-50 rounded-2xl p-4"  
                whileHover={{ scale: 1.02 }}  
                transition={{ duration: 0.2 }}  
              >  
                <iframe  
                  className="w-full h-80 rounded-lg shadow-md"  
                  src={item.url}  
                  title={item.title}  
                  frameBorder="0"  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                  allowFullScreen  
                ></iframe>  
                <div className="mt-3">  
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>  
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>  
                </div>  
              </motion.div>  
            ))}  
          </div>  
        </div>  

        {/* Sección Recursos Visuales (Infogramas) */}  
        <div className="bg-white rounded-3xl p-6 shadow-xl">  
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recursos visuales</h2>  
          <div className="grid md:grid-cols-2 gap-6">  
            {adviceContent.filter(item => item.type === 'image').map((item, index) => (  
              <motion.div  
                key={index}  
                className="bg-gray-50 rounded-2xl p-4 text-center"  
                whileHover={{ scale: 1.02 }}  
                transition={{ duration: 0.2 }}  
              >  
                <ImageIcon size={24} className="mx-auto mb-3 text-emerald-600" />  
                <img  
                  src={item.url}  
                  alt={item.title}  
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-3"  
                  onError={(e) => { // Fallback si imagen no existe  
                    e.target.src = 'https://via.placeholder.com/300x200?text=Infograma+No+Disponible';  
                  }}  
                />  
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>  
                <p className="text-gray-600 text-sm">{item.description}</p>  
              </motion.div>  
            ))}  
          </div>  
          <p className="text-sm text-gray-500 mt-4 text-center italic">Nota: Las imágenes se cargan desde /public. Si no ves las imágenes, súbelas como Slide-1.jpg y Slide-2.jpg en /public.</p>  
        </div>  

        {/* Sección Recomendaciones de Empresas */}  
        <div className="bg-white rounded-3xl p-6 shadow-xl">  
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recomendaciones de empresas</h2>  
          <div className="space-y-4">  
            {mockCompanyAdvice.map((advice, index) => (  
              <motion.div  
                key={index}  
                className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-2xl"  
                whileHover={{ x: 4 }}  
                transition={{ duration: 0.2 }}  
              >  
                <div className="flex items-start space-x-3">  
                  <FileText size={20} className="text-emerald-600 flex-shrink-0 mt-1" />  
                  <div className="flex-1">  
                    <h4 className="font-semibold text-gray-800 mb-1">{advice.company}</h4>  
                    <p className="text-gray-600 mb-2">{advice.tip}</p>  
                    {advice.type === 'video' && advice.url && (  
                      <div className="mt-2">  
                        <iframe  
                          className="w-full h-32 rounded-lg shadow-sm"  
                          src={advice.url}  
                          title={advice.tip}  
                          frameBorder="0"  
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                          allowFullScreen  
                        ></iframe>  
                      </div>  
                    )}  
                    {advice.type === 'infographic' && advice.image && (  
                      <div className="mt-2">  
                        <img  
                          src={advice.image}  
                          alt={advice.tip}  
                          className="w-full h-32 object-cover rounded-lg shadow-sm"  
                          onError={(e) => {  
                            e.target.src = 'https://via.placeholder.com/300x120?text=Infográfico+No+Disponible';  
                          }}  
                        />  
                      </div>  
                    )}  
                    {(!advice.type || !advice.url || !advice.image) && (  
                      <p className="text-sm text-gray-500 italic">Contenido en desarrollo...</p>  
                    )}  
                  </div>  
                </div>  
              </motion.div>  
            ))}  
          </div>  
          <p className="text-sm text-gray-500 mt-4 text-center">Más recomendaciones se cargan diariamente de nuestras empresas aliadas.</p>  
        </div>  

        {/* Footer simple para más consejos */}  
        <div className="text-center mt-8 p-4 bg-gray-100 rounded-2xl">  
          <p className="text-gray-600">¿Quieres más consejos? <button onClick={() => alert('¡Pronto más contenido!')} className="text-emerald-600 font-semibold underline">Suscríbete aquí</button></p>  
        </div>  
      </motion.div>  
    </div>  
  );  
};  

export default StudentAdvice;