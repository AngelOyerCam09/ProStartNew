import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ message = "Cargando ProStart..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo en loader */}
        <div className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl p-6 mb-6 shadow-2xl">
          <img
            src="https://utfs.io/f/5BN0V4mlt4NUXbiOTt3ikVqSE2R0lvYyWceT5uxfm3UMzsrB"
            alt="ProStart Logo"
            className="w-24 h-auto mx-auto"
          />
        </div>
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
        <p className="text-gray-700 font-medium">{message}</p>
      </motion.div>
    </div>
  );
};

export default Loader;