// Base de datos local optimizada para la simulación turística de la IA
const bogotaDatabase = {
    negocios: `
        <div class="recommendation-item"><strong>🏢 Alojamiento:</strong> Hoteles corporativos de primer nivel en la Calle 26 (cerca del aeropuerto) o en el Centro Internacional.</div>
        <div class="recommendation-item"><strong>🍽️ Gastronomía:</strong> Almuerzos ejecutivos y cenas de negocios en la Zona G o el Parque de la 93.</div>
        <div class="recommendation-item"><strong>🚶‍♂️ Actividad express:</strong> Visita al Museo del Oro en el centro de la ciudad o tiempo de coworking premium en los salones VIP de El Dorado.</div>
    `,
    familia: `
        <div class="recommendation-item"><strong>🏨 Alojamiento:</strong> Hoteles familiares con suites confortables en el sector de Corferias o Usaquén.</div>
        <div class="recommendation-item"><strong>🍲 Gastronomía:</strong> Desayunos típicos con chocolate completo en el centro histórico y almuerzos en restaurantes campestres del norte.</div>
        <div class="recommendation-item"><strong>🎡 Actividad:</strong> Recorrido en el Teleférico hacia el Cerro de Monserrate, tarde recreativa en el Parque Metropolitano Simón Bolívar o visita interactiva a Maloka.</div>
    `,
    aventura: `
        <div class="recommendation-item"><strong>🎒 Alojamiento:</strong> Hostales culturales y hoteles boutique con encanto en el barrio La Candelaria.</div>
        <div class="recommendation-item"><strong>☕ Gastronomía:</strong> Café de origen en plazoletas locales, ajiaco santafereño tradicional y mercados de frutas locales.</div>
        <div class="recommendation-item"><strong>⛰️ Alrededores:</strong> Excursión de un día a la Catedral de Sal de Zipaquirá o senderismo ecológico hacia la Laguna de Guatavita.</div>
    `
};

function getRecommendation(perfil) {
    // Ocultar la cuadrícula de botones con una transición ágil
    document.querySelector('.options-grid').classList.add('hidden');
    
    // Capturar y activar la sección de resultados
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
    
    // Inyectar las recomendaciones basadas en la selección procesada
    document.getElementById('recommendation-text').innerHTML = bogotaDatabase[perfil];
}

function resetApp() {
    // Devolver la interfaz al estado inicial para nuevos turistas
    document.getElementById('results').classList.add('hidden');
    document.querySelector('.options-grid').classList.remove('hidden');
}
