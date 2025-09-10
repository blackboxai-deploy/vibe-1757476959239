import Header from '@/components/Header';
import EbookCard from '@/components/EbookCard';

// Datos de ebooks de ejemplo con imágenes coloridas
const ebooks = [
  {
    id: '1',
    title: '🥑 Guía Completa del Estilo de Vida Keto',
    description: 'Descubre cómo transformar tu salud y energía con el protocolo keto paso a paso. ¡Incluye recetas coloridas, planes de comida vibrantes y tips para mantener la cetosis de forma divertida!',
    price: 29.99,
    category: 'keto',
    coverImage: 'https://placehold.co/400x600/059669/FFFFFF?text=🥑+GUÍA+KETO+COMPLETA+✨',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/guia-keto-completa',
    featured: true,
    tags: ['keto', 'nutrición', 'recetas', 'salud'],
    pages: 120,
    format: 'PDF'
  },
  {
    id: '2',
    title: '🎨 Creatividad Sin Límites: Despertar tu Alma',
    description: '¡Un viaje de autodescubrimiento súper colorido! Combina técnicas artísticas vibrantes con desarrollo personal para liberar todo tu potencial creativo.',
    price: 24.99,
    category: 'creatividad',
    coverImage: 'https://placehold.co/400x600/e11d48/FFFFFF?text=🎨+CREATIVIDAD+INFINITA+💫',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/creatividad-sin-limites',
    featured: true,
    tags: ['creatividad', 'arte', 'desarrollo personal'],
    pages: 95,
    format: 'PDF'
  },
  {
    id: '3',
    title: '🌍 Inglés Keto: Idiomas con Estilo Saludable',
    description: '¡Método innovador súper divertido! Combina el aprendizaje del inglés con conceptos de nutrición y bienestar para una experiencia educativa completamente colorida.',
    price: 34.99,
    category: 'idiomas',
    coverImage: 'https://placehold.co/400x600/3b82f6/FFFFFF?text=🌍+INGLÉS+KETO+🗣️',
    hotmartLink: 'https://hotmart.com/es/marketplace/productos/ingles-keto',
    featured: false,
    tags: ['inglés', 'idiomas', 'salud', 'método'],
    pages: 150,
    format: 'PDF'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section SÚPER LLAMATIVO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Fondo súper colorido animado */}
          <div className="absolute inset-0 gradient-bg-rainbow opacity-30"></div>
          
          {/* Elementos decorativos flotantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-keto-primary/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-40 right-20 w-48 h-48 bg-keto-secondary/30 rounded-full blur-xl animate-bounce-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-keto-purple/40 rounded-full blur-lg animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-keto-orange/30 rounded-full blur-xl animate-float"></div>
            
            {/* Elementos emoji flotantes */}
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce opacity-70">🥑</div>
            <div className="absolute top-1/2 right-1/4 text-5xl animate-float opacity-80">✨</div>
            <div className="absolute bottom-1/4 right-1/3 text-4xl animate-pulse-slow opacity-70">🎨</div>
            <div className="absolute top-3/4 left-1/3 text-5xl animate-bounce-slow opacity-60">💫</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Título MEGA llamativo */}
            <div className="space-y-8">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block gradient-text text-glow animate-pulse-slow">
                  🥑 Transforma
                </span>
                <span className="block text-keto-secondary text-5xl sm:text-6xl lg:text-7xl animate-bounce-slow">
                  tu Vida Keto
                </span>
                <span className="block font-creative text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-keto-pink to-keto-purple bg-clip-text text-transparent animate-float">
                  ✨ con ALMA CREATIVA ✨
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                🌈 <strong>¡Descubre el poder transformador más colorido!</strong> 🌈<br/>
                El estilo de vida cetogénico se encuentra con la creatividad en una explosión de colores, energía y bienestar integral.
              </p>
            </div>

            {/* Beneficios súper coloridos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: '📚', title: 'Ebooks Exclusivos', desc: 'Guías coloridas premium', color: 'from-keto-primary to-keto-teal' },
                { icon: '💡', title: 'Tips Súper Diarios', desc: 'Contenido fresco y vibrante', color: 'from-keto-secondary to-keto-pink' },
                { icon: '🎨', title: 'Comunidad Creativa', desc: 'Miles transformándose juntos', color: 'from-keto-purple to-keto-indigo' },
                { icon: '🌟', title: 'Enfoque Holístico', desc: 'Salud + Creatividad + Energía', color: 'from-keto-orange to-keto-accent' }
              ].map((benefit, index) => (
                <div key={index} className={`bg-gradient-to-br ${benefit.color} p-6 rounded-3xl shadow-2xl button-3d neon-glow text-white transform hover:scale-110 transition-all duration-300`}>
                  <div className="text-4xl mb-3 animate-bounce">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm opacity-90">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Actions MEGA llamativos */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <button className="bg-gradient-to-r from-keto-primary via-keto-teal to-keto-blue text-white font-bold text-xl py-6 px-12 rounded-full shadow-2xl button-3d neon-glow hover:scale-110 transition-all duration-300 pulse-rainbow">
                🛒 Explorar Ebooks Increíbles ✨
              </button>
              
              <button className="bg-gradient-to-r from-keto-secondary via-keto-pink to-keto-purple text-white font-bold text-xl py-6 px-12 rounded-full shadow-2xl button-3d neon-glow hover:scale-110 transition-all duration-300">
                📖 Ver Tips Gratuitos 🎉
              </button>
            </div>

            {/* Social Proof súper llamativo */}
            <div className="mt-16 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl neon-glow">
              <p className="text-lg font-semibold text-gray-800 mb-6">🚀 Únete a nuestra comunidad súper vibrante:</p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { number: '2,500+', platform: 'Instagram', icon: '📸', color: 'text-keto-secondary' },
                  { number: '1,800+', platform: 'Telegram', icon: '📱', color: 'text-keto-primary' },
                  { number: '950+', platform: 'TikTok', icon: '🎵', color: 'text-keto-purple' },
                  { number: '1,200+', platform: 'Facebook', icon: '👥', color: 'text-keto-blue' }
                ].map((social, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl mb-2 group-hover:animate-bounce">{social.icon}</div>
                    <div className={`text-3xl font-bold ${social.color} group-hover:scale-125 transition-transform duration-200`}>
                      {social.number}
                    </div>
                    <div className="text-gray-600 font-medium">{social.platform}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Ebooks Section SÚPER LLAMATIVA */}
        <section className="py-20 bg-gradient-to-br from-keto-cream via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl font-bold mb-6">
                <span className="gradient-text text-glow">🔥 Ebooks Súper Destacados 🔥</span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                ✨ Descubre nuestras guías más populares y coloridas para transformar tu estilo de vida ✨
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-keto-orange via-keto-accent to-keto-secondary text-white font-bold text-xl py-6 px-12 rounded-full shadow-2xl button-3d neon-glow hover:scale-110 transition-all duration-300 pulse-rainbow">
                🌈 Ver Todos los Ebooks Increíbles 🌈
              </button>
            </div>
          </div>
        </section>

        {/* Community CTA - MEGA COLORIDO */}
        <section className="py-20 gradient-bg-rainbow relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-display text-5xl font-bold mb-8 text-glow animate-pulse-slow">
              🎉 ¡Únete a la Revolución Colorida! 🎉
            </h2>
            <p className="text-2xl mb-12 opacity-95">
              🌈 Más de <strong>5,000 personas</strong> ya están transformando su vida con colores, energía y creatividad 🌈
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { platform: 'Telegram', icon: '📱', desc: 'Tips súper diarios y contenido exclusivo', color: 'from-blue-500 to-cyan-400' },
                { platform: 'Instagram', icon: '📸', desc: 'Inspiración visual súper colorida', color: 'from-pink-500 to-rose-400' }
              ].map((social, index) => (
                <div key={index} className={`bg-gradient-to-br ${social.color} rounded-3xl p-8 shadow-2xl button-3d neon-glow hover:scale-110 transition-all duration-300`}>
                  <div className="text-6xl mb-4 animate-bounce">{social.icon}</div>
                  <h3 className="font-bold text-2xl mb-3">{social.platform}</h3>
                  <p className="opacity-90">{social.desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-white text-keto-primary font-bold text-2xl py-6 px-16 rounded-full shadow-2xl button-3d hover:scale-110 transition-all duration-300 neon-glow">
              💬 ¡Conecta Conmigo Ahora! 🚀
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}