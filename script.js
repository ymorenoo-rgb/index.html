// ==========================================
// 1. BASE DE DATOS LOCAL (Sencilla y clara)
// ==========================================
const baseDatosTurismo = {
    negocios: [
        {
            titulo: "Zonas de Coworking & Oficinas",
            descripcion: "Espacios tranquilos con excelente internet en el norte y centro de Bogotá para trabajar de forma cómoda."
        },
        {
            titulo: "Restaurantes para Cenas de Negocios",
            descripcion: "Lugares con ambiente reservado e ideal para concretar alianzas o almuerzos ejecutivos importantes."
        },
        {
            titulo: "Hoteles Empresariales",
            descripcion: "Alojamiento con salas de juntas y servicios ejecutivos cerca al centro de convenciones Corferias."
        }
    ],
    familia: [
        {
            titulo: "Parque Metropolitano Simón Bolívar",
            descripcion: "Amplias zonas verdes, lagos y espacios de juegos ideales para disfrutar una tarde en familia."
        },
        {
            titulo: "Museo de los Niños",
            descripcion: "Espacio interactivo de aprendizaje y ciencia diseñado especialmente para los más pequeños."
        }
    ],
    cultura: [
        {
            titulo: "Museo del Oro",
            descripcion: "Una de las colecciones prehispánicas de metalurgia más importantes del mundo en el centro histórico."
        },
        {
            titulo: "Cerro de Monserrate",
            descripcion: "Sube en teleférico o funicular para disfrutar de la mejor vista panorámica y templos de la ciudad."
        }
    ],
    transporte: [
        {
            titulo: "Taxis Autorizados (Aeropuerto El Dorado)",
            descripcion: "Toma únicamente los taxis de las filas oficiales del aeropuerto. Solicita tu ticket de tarifa en los módulos del terminal antes de subir."
        },
        {
            titulo: "TransMilenio - Bus de Tránsito Rápido",
            descripcion: "Usa la ruta alimentadora gratuita del aeropuerto que te conecta directamente con el Portal El Dorado del sistema masivo."
        }
    ]
};

// ==========================================
// 2. FUNCIÓN LÓGICA DE FILTRADO (BÁSICA)
// ==========================================
function filtrarPerfil(perfilSeleccionado) {
    // Busca el contenedor en el HTML
    const contenedor = document.getElementById("contenedor-recomendaciones");
    
    // Borra las recomendaciones anteriores de la pantalla
    contenedor.innerHTML = ""; 
    
    // Obtiene los datos del perfil que el usuario tocó
    const datosFiltrados = baseDatosTurismo[perfilSeleccionado];
    
    // Si existen datos para ese perfil, los dibuja uno a uno en la pantalla
    if (datosFiltrados) {
        datosFiltrados.forEach(function(item) {
            contenedor.innerHTML += `
                <div class="tarjeta-recomendacion">
                    <h3>${item.titulo}</h3>
                    <p>${item.descripcion}</p>
                </div>
            `;
        });
    }
}
