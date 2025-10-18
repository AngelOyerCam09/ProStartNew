import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl p-6 shadow-2xl mb-8 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 mx-4">
        <img
          src="https://utfs.io/f/5BN0V4mlt4NUXbiOTt3ikVqSE2R0lvYyWceT5uxfm3UMzsrB"
          alt="ProStart Logo - pr@start"
          className="w-40 h-auto max-w-full"
        />
      </div>
      <p className="text-white/90 text-center font-medium mt-2 px-2">
        Conecta tu futuro profesional
      </p>
    </motion.div>
  );
};

export default Logo;