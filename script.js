// Variable global para controlar el idioma activo
let currentLang = 'es';

// Diccionario de textos fijos de la interfaz para soporte bilingüe
const interfaceTranslations = {
    es: {
        title: "¡Bienvenido a la Capital!",
        subtitle: "Toca tu perfil de viajero para activar las recomendaciones inteligentes de IA",
        lblNegocios: "Negocios y Conexiones",
        subNegocios: "Hoteles ejecutivos, zonas VIP y restaurantes top",
        lblFamilia: "Vacaciones en Familia",
        subFamilia: "Diversión, cultura y parques para todas las edades",
        lblAventura: "Cultura y Alrededores",
        subAventura: "Pueblos coloniales, naturaleza y café de origen",
        resultsTitle: "✨ Sugerencias de la IA para tu estadía:",
        btnReset: "🔄 Nueva Consulta"
    },
    en: {
        title: "Welcome to the Capital!",
        subtitle: "Touch your traveler profile to activate AI smart recommendations",
        lblNegocios: "Business & Connections",
        subNegocios: "Executive hotels, VIP lounges, and top restaurants",
        lblFamilia: "Family Vacations",
        subFamilia: "Fun, culture, and parks for all generations",
        lblAventura: "Culture & Surroundings",
        subAventura: "Colonial towns, nature, and specialty coffee",
        resultsTitle: "✨ AI Recommendations for your stay:",
        btnReset: "🔄 New Query"
    }
};

// Base de datos de recomendaciones analíticas bilingües (Bogotá y Sabana)
const bogotaDatabase = {
    es: {
        negociomix: `
            <div class="recommendation-item"><strong>🏢 Alojamiento:</strong> Hoteles corporativos de primer nivel en la Av. Calle 26 o el Centro Internacional.</div>
            <div class="recommendation-item"><strong>🍽️ Gastronomía:</strong> Almuerzos de negocios exclusivos en la Zona G o el Parque de la 93.</div>
            <div class="recommendation-item"><strong>🚶‍♂️ Actividad express:</strong> Conexión rápida en las salas VIP de El Dorado o visita guiada al Museo del Oro.</div>
        `,
        familiamix: `
            <div class="recommendation-item"><strong>🏨 Alojamiento:</strong> Hoteles con suites confortables en los sectores de Usaquén o Corferias.</div>
            <div class="recommendation-item"><strong>🍲 Gastronomía:</strong> Desayuno tradicional con chocolate completo en el centro histórico y postres en la sabana.</div>
            <div class="recommendation-item"><strong>🎡 Actividad:</strong> Ascenso al Cerro de Monserrate (Teleférico) y tarde interactiva de ciencia en Maloka.</div>
        `,
        aventuramix: `
            <div class="recommendation-item"><strong>🎒 Alojamiento:</strong> Hoteles boutique con encanto histórico y hostales artísticos en La Candelaria.</div>
            <div class="recommendation-item"><strong>☕ Gastronomía:</strong> Catas de café de origen local y ajiaco santafereño en plazas tradicionales.</div>
            <div class="recommendation-item"><strong>⛰️ Alrededores:</strong> Aventura de un día en la Catedral de Sal de Zipaquirá o senderismo en la Laguna de Guatavita.</div>
        `
    },
    en: {
        negociomix: `
            <div class="recommendation-item"><strong>🏢 Lodging:</strong> Premium corporate hotels located on 26th Avenue or the International Center.</div>
            <div class="recommendation-item"><strong>🍽️ Dining:</strong> High-end business lunches and fine dining in Zona G or 93rd Street Park.</div>
            <div class="recommendation-item"><strong>🚶‍♂️ Express Activity:</strong> Relax in El Dorado's premium VIP lounges or take a quick tour of the Gold Museum.</div>
        `,
        familiamix: `
            <div class="recommendation-item"><strong>🏨 Lodging:</strong> Family-friendly hotels with spacious suites in Usaquén or near Corferias.</div>
            <div class="recommendation-item"><strong>🍲 Dining:</strong> Traditional hot chocolate breakfast in the historic downtown and countryside meals.</div>
            <div class="recommendation-item"><strong>🎡 Activity:</strong> Cable car ride up to Monserrate Sanctuary and interactive science day at Maloka Museum.</div>
        `,
        aventuramix: `
            <div class="recommendation-item"><strong>🎒 Lodging:</strong> Charming boutique hotels and artistic cultural hostels in La Candelaria neighborhood.</div>
            <div class="recommendation-item"><strong>☕ Dining:</strong> Local specialty coffee tastings and authentic Ajiaco stew in traditional markets.</div>
            <div class="recommendation-item"><strong>⛰️ Surroundings:</strong> Day trip to the Zipaquirá Salt Cathedral or ecological hiking at Guatavita Sacred Lagoon.</div>
        `
    }
};

// Función para alternar el idioma de la aplicación
function changeLanguage(lang) {
    currentLang = lang;
    
    // Cambiar estado activo de los botones de idioma
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    // Traducir textos fijos del DOM
    document.getElementById('main-title').innerText = interfaceTranslations[lang].title;
    document.getElementById('main-subtitle').innerText = interfaceTranslations[lang].subtitle;
    document.getElementById('lbl-negocios').innerText = interfaceTranslations[lang].lblNegocios;
    document.getElementById('sub-negocios').innerText = interfaceTranslations[lang].subNegocios;
    document.getElementById('lbl-familia').innerText = interfaceTranslations[lang].lblFamilia;
    document.getElementById('sub-familia').innerText = interfaceTranslations[lang].subFamilia;
    document.getElementById('lbl-aventura').innerText = interfaceTranslations[lang].lblAventura;
    document.getElementById('sub-aventura').innerText = interfaceTranslations[lang].subAventura;
    document.getElementById('results-title').innerText = interfaceTranslations[lang].resultsTitle;
    document.getElementById('btn-reset').innerText = interfaceTranslations[lang].btnReset;
    
    // Si la pantalla de resultados está visible, actualizar el idioma de las recomendaciones actuales
    if (!document.getElementById('results').classList.contains('hidden')) {
        const activeCategory = document.querySelector('.options-grid').getAttribute('data-last-selected');
        if (activeCategory) {
            getRecommendation(activeCategory);
        }
    }
}

// Función para procesar la selección y simular el motor analítico
function getRecommendation(perfil) {
    // Guardar última selección para permitir traducción dinámica en tiempo real
    document.querySelector('.options-grid').setAttribute('data-last-selected', perfil);
    
    document.querySelector('.options-grid').classList.add('hidden');
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
    
    // Mapeo interno de categorías
    const dbKey = perfil === 'negocios' ? 'negociomix' : (perfil === 'familia' ? 'familiamix' : 'aventuramix');
    
    // Cargar los datos correspondientes al idioma seleccionado
    document.getElementById('recommendation-text').innerHTML = bogotaDatabase[currentLang][dbKey];
}

function resetApp() {
    document.getElementById('results').classList.add('hidden');
    document.querySelector('.options-grid').classList.remove('hidden');
    document.querySelector('.options-grid').removeAttribute('data-last-selected');
}
