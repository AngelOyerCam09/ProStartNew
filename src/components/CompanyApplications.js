import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Trash2 } from 'lucide-react';
import { mockApplications } from '../mock/applications';

const CompanyApplications = ({ onBack }) => {
  const [applications, setApplications] = useState(mockApplications);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = applications.filter(app =>
    app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('¿Eliminar esta aplicación?')) {
      setApplications(applications.filter(app => app.id !== id));
    }
  };

  const handleDownloadCV = (path) => {
    // Simular descarga; en real: window.open(`https://sqnumeyvvzobabpwgqkj.supabase.co/storage/v1/object/public/cvs/${path}`)
    alert(`Descargando CV: ${path}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600"
          >
            <ArrowLeft size={20} />
            <span>Volver a mis vacantes</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Aplicaciones recibidas</h1>
          <div className="flex items-center space-x-2 mb-4">
            <Mail size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por nombre o mensaje..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl space-y-4">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
              <motion.div
                key={app.id}
                className="border border-gray-200 rounded-2xl p-6 hover:bg-gray-50 transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{app.studentName}</h3>
                    <p className="text-gray-600">{app.studentEmail}</p>
                    <p className="text-sm text-gray-500 mt-1">Aplicó a: {"Práctica en Desarrollo Web"}</p>
                    <p className="text-sm text-emerald-600 mt-2">Mensaje: {app.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Aplicado el: {new Date(app.appliedAt).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => handleDownloadCV(app.cvPath)}
                      className="mt-2 inline-flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      <Download size={16} />
                      <span>Descargar CV</span>
                    </button>
                  </div>
                  <motion.button
                    onClick={() => handleDelete(app.id)}
                    className="text-red-500 hover:text-red-600 ml-4"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              No hay aplicaciones que coincidan. Intenta otra búsqueda o revisa más tarde.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyApplications;