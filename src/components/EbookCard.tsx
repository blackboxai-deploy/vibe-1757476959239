"use client";

interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
  hotmartLink: string;
  featured: boolean;
  tags: string[];
  pages: number;
  format: string;
}

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const handleDirectPurchase = () => {
    alert('🎉 Funcionalidad de compra directa - Próximamente disponible');
  };

  const handlePayPalPurchase = () => {
    // Aquí integrarías con PayPal
    window.open(`https://www.paypal.com/paypalme/mividaketoalmacreativa/${ebook.price}?locale.x=es_ES&country.x=ES`, '_blank');
  };

  const handleHotmartPurchase = () => {
    window.open(ebook.hotmartLink, '_blank', 'noopener,noreferrer');
  };

  const getCategoryStyles = (category: string) => {
    const styles = {
      'keto': 'bg-gradient-to-r from-keto-primary to-keto-teal text-white',
      'creatividad': 'bg-gradient-to-r from-keto-secondary to-keto-pink text-white',
      'idiomas': 'bg-gradient-to-r from-keto-blue to-keto-indigo text-white',
      'salud': 'bg-gradient-to-r from-keto-lime to-keto-primary text-white',
      'bienestar': 'bg-gradient-to-r from-keto-purple to-keto-pink text-white',
    };
    return styles[category as keyof typeof styles] || 'bg-gradient-to-r from-gray-500 to-gray-700 text-white';
  };

  const getRandomGlow = () => {
    const glows = [
      'hover:shadow-2xl hover:shadow-keto-primary/50',
      'hover:shadow-2xl hover:shadow-keto-secondary/50',
      'hover:shadow-2xl hover:shadow-keto-purple/50',
      'hover:shadow-2xl hover:shadow-keto-orange/50',
      'hover:shadow-2xl hover:shadow-keto-teal/50',
    ];
    return glows[Math.floor(Math.random() * glows.length)];
  };

  return (
    <div className={`bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group card-hover relative ${getRandomGlow()}`}>
      {/* Gradiente decorativo animado en el borde */}
      <div className="absolute inset-0 bg-gradient-to-r from-keto-primary via-keto-secondary via-keto-purple to-keto-teal opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Cover Image con efectos */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
        <img 
          src={ebook.coverImage}
          alt={ebook.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 brightness-110 saturate-125"
        />
        
        {/* Etiquetas flotantes súper llamativas */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse-slow ${getCategoryStyles(ebook.category)}`}>
            ✨ {ebook.category.toUpperCase()} ✨
          </span>
        </div>
        
        {ebook.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-gradient-to-r from-keto-accent to-keto-orange text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce pulse-rainbow">
              🔥 DESTACADO 🔥
            </span>
          </div>
        )}

        {/* Precio flotante */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg neon-glow">
            <span className="text-2xl font-bold gradient-text">
              ${ebook.price}
            </span>
            <span className="text-xs text-gray-600 ml-1">USD</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:gradient-text transition-all duration-300">
          {ebook.title}
        </h3>
        
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
          {ebook.description}
        </p>

        {/* Book Details con iconos */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4 bg-gradient-to-r from-keto-cream to-transparent p-3 rounded-xl">
          <span className="flex items-center">📖 {ebook.pages} páginas</span>
          <span className="flex items-center">💾 {ebook.format}</span>
        </div>

        {/* Tags coloridos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ebook.tags.slice(0, 3).map((tag, index) => {
            const colors = ['bg-keto-primary/20 text-keto-primary', 'bg-keto-secondary/20 text-keto-secondary', 'bg-keto-purple/20 text-keto-purple'];
            return (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${colors[index % colors.length]} hover:scale-110 transition-transform duration-200`}
              >
                #{tag}
              </span>
            );
          })}
        </div>

        {/* Purchase Buttons - SÚPER LLAMATIVOS */}
        <div className="space-y-3">
          {/* PayPal Button */}
          <button
            onClick={handlePayPalPurchase}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 button-3d neon-glow flex items-center justify-center space-x-3 group"
          >
            <span className="text-2xl group-hover:animate-bounce">💳</span>
            <span>Pagar con PayPal</span>
            <span className="text-xl">→</span>
          </button>
          
          {/* Compra Directa */}
          <button
            onClick={handleDirectPurchase}
            className="w-full bg-gradient-to-r from-keto-primary to-keto-teal hover:from-keto-teal hover:to-keto-primary text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 button-3d neon-glow flex items-center justify-center space-x-3 group"
          >
            <span className="text-2xl group-hover:animate-spin">⚡</span>
            <span>Comprar Directo</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-200">💫</span>
          </button>
          
          {/* Hotmart Button */}
          <button
            onClick={handleHotmartPurchase}
            className="w-full bg-gradient-to-r from-keto-secondary to-keto-pink hover:from-keto-pink hover:to-keto-secondary text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 button-3d flex items-center justify-center space-x-3 group"
          >
            <span className="text-xl group-hover:animate-pulse">🛒</span>
            <span>Comprar en Hotmart</span>
          </button>
        </div>

        {/* Garantía llamativa */}
        <div className="mt-4 text-center">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs font-bold rounded-full">
            ✅ Garantía 30 días ✅
          </span>
        </div>
      </div>
    </div>
  );
}