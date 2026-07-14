// ==========================================
// 1. BASE DE DATOS LOCAL SIMULADA (Sencilla)
// ==========================================
const baseDatosTurismo = {
    negocios: [
        {
            titulo: "💻 Zonas de Coworking & Oficinas",
            descripcion: "Espacios modernos y tranquilos con excelente conexión a internet en el norte y centro de Bogotá para trabajar cómodamente o tener reuniones."
        },
        {
            titulo: "🍽️ Restaurantes para Cenas de Negocios",
            descripcion: "Lugares con ambientes sofisticados y reservados, perfectos para almuerzos o cenas ejecutivas de alto nivel."
        },
        {
            titulo: "🏨 Hoteles Empresariales",
            descripcion: "Alojamientos con salas de juntas, centro de negocios y excelente conectividad cerca de Corferias y el centro financiero."
        }
    ],
    familia: [
        {
            titulo: "🌳 Parque Metropolitano Simón Bolívar",
            descripcion: "El parque urbano más grande de la ciudad con lagos, amplias zonas verdes y espacios recreativos perfectos para un pícnic o tarde familiar."
        },
        {
            titulo: "🧪 Museo de los Niños & Divercity",
            descripcion: "Espacios de aprendizaje interactivo y ciencia lúdica diseñados especialmente para la diversión y seguridad de los más pequeños."
        }
    ],
    cultura: [
        {
            titulo: "🥇 Museo del Oro",
            descripcion: "Alberga una de las colecciones de orfebrería prehispánica más importantes del mundo. Ubicado en el centro histórico de la ciudad."
        },
        {
            titulo: "⛪ Cerro de Monserrate",
            descripcion: "Sube en teleférico o funicular para disfrutar del santuario religioso y la vista panorámica más imponente de toda Bogotá."
        }
    ],
    transporte: [
        {
            titulo: "🚕 Taxis Autorizados (Filas Oficiales)",
            descripcion: "Toma únicamente los taxis de las filas autorizadas del aeropuerto en las salidas de llegadas nacionales e internacionales. Solicita tu ticket con tarifa estimada en los counters automáticos antes de subir."
        },
        {
            titulo: "🚌 TransMilenio & Bus Alimentador",
            descripcion: "Usa la ruta alimentadora gratuita '16-14 Aeropuerto' que pasa frente a la terminal. Te conectará directamente con el Portal El Dorado para viajar por toda la ciudad."
        }
    ]
};

// ==========================================
// 2. FUNCIÓN DE FILTRADO DINÁMICO (Vanilla JS)
// ==========================================
function filtrarPerfil(perfilSeleccionado) {
    // 1. Obtener el contenedor en el HTML
    const contenedor = document.getElementById("contenedor-recomendaciones");
    
    // 2. Limpiar la pantalla por si había algo escrito antes
    contenedor.innerHTML = ""; 
    
    // 3. Buscar los datos según el perfil que se tocó
    const datosFiltrados = baseDatosTurismo[perfilSeleccionado];
    
    // 4. Si existen datos, recorrerlos y agregarlos como tarjetas
    if (datosFiltrados) {
        datosFiltrados.forEach(function(item) {
            contenedor.innerHTML += `
                <div style="background-color: #f8fafc; border-left: 5px solid #0d2c54; padding: 15px 20px; margin-bottom: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <h3 style="margin-top: 0; margin-bottom: 8px; color: #0d2c54; font-size: 1.1rem; font-weight: 600;">${item.titulo}</h3>
                    <p style="margin: 0; color: #475569; font-size: 0.9rem; line-height: 1.5;">${item.descripcion}</p>
                </div>
            `;
        });
    }
}
