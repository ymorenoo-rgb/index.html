// Base de datos local básica con estructura simple (fácil de entender y explicar)
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
    // NUEVO: Sección de transportes autorizados solicitada por el usuario de prueba
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
// Este es el "cerebro" (script.js)

// 1. Aquí guardamos la información de lo que mostraremos
const baseDatosTurismo = {
    negocios: [
        { titulo: "Hoteles Empresariales", descripcion: "Cerca a Corferias..." },
        { titulo: "Almuerzos de Negocios", descripcion: "Restaurantes recomendados..." }
    ],
    transporte: [
        { titulo: "Taxis Autorizados", descripcion: "Toma el taxi en las filas oficiales..." }
    ]
    // ... los demás perfiles
};

// 2. Esta es la función que borra la pantalla y escribe la información nueva
function filtrarPerfil(perfilSeleccionado) {
    const contenedor = document.getElementById("contenedor-recomendaciones");
    contenedor.innerHTML = ""; // Borra lo que había antes
    
    const datosFiltrados = baseDatosTurismo[perfilSeleccionado];
    
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
