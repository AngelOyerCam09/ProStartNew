import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Botón de regreso */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>

        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Términos y Condiciones y Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Información importante para usuarios de ProStart. Al registrarte, aceptas estos términos.
          </p>
        </div>

        {/* Sección 1: Términos y Condiciones */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-8 border border-gray-200/50">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">TÉRMINOS Y CONDICIONES - PROSTART</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Introducción</h3>
              <p>Al registrarse en ProStart, tanto empresas como estudiantes aceptan los presentes Términos y Condiciones.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Empresas</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Las empresas deben proporcionar información verídica y documentación oficial (Constancia SAT).</li>
                <li>Las ofertas publicadas deben ser reales y cumplir con la legislación laboral vigente.</li>
                <li>ProStart no se hace responsable por falsedad de datos o incumplimientos laborales.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Estudiantes</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Los estudiantes garantizan que la información proporcionada es real y su CV es de su autoría.</li>
                <li>Está prohibido usar correos falsos o ajenos a su institución.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. ProStart</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ProStart actúa únicamente como intermediario entre empresa y estudiante.</li>
                <li>No garantiza contratación ni condiciones laborales.</li>
                <li>Se reserva el derecho de suspender cuentas fraudulentas.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Publicidad</h3>
              <p>La plataforma incluye publicidad de Google AdSense que podrá mostrarse en distintas secciones.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">6. Aceptación</h3>
              <p>El registro implica la aceptación total de estos términos.</p>
            </div>
          </div>
        </section>

        {/* Sección 2: Políticas de Privacidad */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-8 border border-gray-200/50">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">POLÍTICAS DE PRIVACIDAD - PROSTART</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Recolección de datos</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Recolectamos datos personales como nombre, correo, teléfono, CV y documentación de empresa.</li>
                <li>Estos datos se almacenan en bases de datos seguras.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Uso de datos</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>La información se utiliza exclusivamente para la conexión entre empresas y estudiantes.</li>
                <li>Los CV solo se envían a empresas cuando el estudiante aplica a una vacante.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Seguridad</h3>
              <p>Usamos encriptación de contraseñas (hash) y protocolos seguros para proteger la información.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Compartición</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ProStart no vende ni comparte información con terceros ajenos al proceso de vinculación.</li>
                <li>Solo se comparte la información necesaria con las empresas seleccionadas por el estudiante.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Derechos del usuario</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Los usuarios pueden eliminar su cuenta en cualquier momento.</li>
                <li>Al hacerlo, se eliminan sus datos de la base de datos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pie de Página */}
        <footer className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-200/50">
          <p>&copy; 2025 ProStart. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}