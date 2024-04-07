// Función para remover acentos y normalizar texto
var removeAccents = function(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Exporta la función para poder usarla en otros archivos
module.exports = removeAccents;
