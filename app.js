// =================================================================
// 1. DEFINICIÓN DEL CATÁLOGO MAESTRO (BASADO EN TU LISTA TRANSCRITA)
// =================================================================

// NOTA: Los SKUs y Precios se toman EXACTAMENTE de la lista de texto proporcionada por el usuario.
const RAW_CATALOG_DATA = [
    // TIER 1
    { tier: "T1", descripcion: "CLIP ON", precio: 40000.00, graduacion_key: "NOGRAD", final_sku: "T1ClpOn" },
    { tier: "T1", descripcion: "LENT1 NEUTROS CON AR VERDE", precio: 89000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeArVr" },
    { tier: "T1", descripcion: "LENT1 DE SOL NEUTRO", precio: 89000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeSol" },
    { tier: "T1", descripcion: "LENT1 PA LA COMPU NEUTROS", precio: 89000.00, graduacion_key: "NOGRAD", final_sku: "T1LeNeCom" },
    { tier: "T1", descripcion: "LENT1 MONOFOCAL+AR AZUL", precio: 128000.00, graduacion_key: "MONO", final_sku: "T1LeMoArAz" },
    { tier: "T1", descripcion: "LENT1 MONOFOCAL+HI", precio: 138000.00, graduacion_key: "MONO", final_sku: "T1LeMoHi" },
    { tier: "T1", descripcion: "LENT1 MONO+ARAZUL+HI", precio: 177000.00, graduacion_key: "MONO", final_sku: "T1LeMoArAzHi" },
    { tier: "T1", descripcion: "LENT1 DE SOL GRADUADOS", precio: 188000.00, graduacion_key: "MONO", final_sku: "T1LeMoSol" },
    { tier: "T1", descripcion: "LENT1 MONOFOCAL FOTO", precio: 148000.00, graduacion_key: "MONO", final_sku: "T1LeMoFo" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON", precio: 188000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNew" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + AR AZUL", precio: 227000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewArAz" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + POLARIZADO", precio: 277000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewSol" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON + FOTO", precio: 257000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewFo" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON+FOTO+HI", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewFoHi" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + HI", precio: 237000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewHi" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON+HI+ARAZUL", precio: 177000.00, graduacion_key: "NEWTON", final_sku: "T1LeProNewHiArAz" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON PLUS", precio: 308000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPl" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + AR AZUL", precio: 347000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlArAz" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + POLARIZADO", precio: 397000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlSol" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWPLUS + FOTO", precio: 158000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlFo" },
    { tier: "T1", descripcion: "LENT1 PROGRENEWPLUS+FOTO+HI", precio: 426000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlFoHi" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + HI", precio: 357000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlHi" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS+HI+ARAZUL", precio: 396000.00, graduacion_key: "NEWPLUS", final_sku: "T1LeProNewPlHiArAz" },

    // TIER 2
    { tier: "T2", descripcion: "LENT2 NEUTROS CON AR VERDE", precio: 99000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeArVr" },
    { tier: "T2", descripcion: "LENT2 DE SOL NEUTRO", precio: 99000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeSol" },
    { tier: "T2", descripcion: "LENT2 PA LA COMPU NEUTROS", precio: 99000.00, graduacion_key: "NOGRAD", final_sku: "T2LeNeCom" },
    { tier: "T2", descripcion: "LENT2 MONOFOCAL + AR AZUL", precio: 138000.00, graduacion_key: "MONO", final_sku: "T2LeMoArAz" },
    { tier: "T2", descripcion: "LENT2 MONOFOCAL + HI", precio: 148000.00, graduacion_key: "MONO", final_sku: "T2LeMoHi" },
    { tier: "T2", descripcion: "LENT2 MONO + AR AZUL + HI", precio: 187000.00, graduacion_key: "MONO", final_sku: "T2LeMoArAzHi" },
    { tier: "T2", descripcion: "LENT2 DE SOL GRADUADOS", precio: 188000.00, graduacion_key: "MONO", final_sku: "T2LeMoSol" },
    { tier: "T2", descripcion: "LENT2 MONOFOCAL FOTO", precio: 168000.00, graduacion_key: "MONO", final_sku: "T2LeMoFo" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON", precio: 198000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNew" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + AR AZUL", precio: 237000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewArAz" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + POLARIZADO", precio: 188000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewSol" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON + FOTO", precio: 168000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewFo" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON+FOTO+HI", precio: 436000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewFoHi" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + HI", precio: 247000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewHi" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON+HI+AR AZUL", precio: 286000.00, graduacion_key: "NEWTON", final_sku: "T2LeProNewHiArAz" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON PLUS", precio: 318000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPl" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + AR AZUL", precio: 456000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlArAz" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + POLARIZADO", precio: 407000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlSol" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWPLUS + FOTO", precio: 387000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlFo" },
    { tier: "T2", descripcion: "LENT2 PROGRENEWPLUS+FOTO+HI", precio: 436000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlFoHi" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + HI", precio: 367000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlHi" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS+HI+ARAZUL", precio: 406000.00, graduacion_key: "NEWPLUS", final_sku: "T2LeProNewPlHiArAz" },

    // TIER 3
    { tier: "T3", descripcion: "LENT3 NEUTROS CON AR VERDE", precio: 119000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeArVr" },
    { tier: "T3", descripcion: "LENT3 DE SOL NEUTRO", precio: 119000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeSol" },
    { tier: "T3", descripcion: "LENT3 PA LA COMPU NEUTROS", precio: 119000.00, graduacion_key: "NOGRAD", final_sku: "T3LeNeCom" },
    { tier: "T3", descripcion: "LENT3 MONOFOCAL + AR AZUL", precio: 158000.00, graduacion_key: "MONO", final_sku: "T3LeMoArAz" },
    { tier: "T3", descripcion: "LENT3 MONOFOCAL + HI", precio: 168000.00, graduacion_key: "MONO", final_sku: "T3LeMoHi" },
    { tier: "T3", descripcion: "LENT3 MONO + AR AZUL + HI", precio: 207000.00, graduacion_key: "MONO", final_sku: "T3LeMoArAzHi" },
    { tier: "T3", descripcion: "LENT3 DE SOL GRADUADOS", precio: 208000.00, graduacion_key: "MONO", final_sku: "T3LeMoSol" },
    { tier: "T3", descripcion: "LENT3 MONOFOCAL FOTO", precio: 188000.00, graduacion_key: "MONO", final_sku: "T3LeMoFo" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON", precio: 218000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNew" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + AR AZUL", precio: 227000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewArAz" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + POLARIZADO", precio: 307000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewSol" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON + FOTO", precio: 307000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewFo" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON+FOTO+HI", precio: 356000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewFoHi" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + HI", precio: 267000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewHi" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON+HI IN+ARAZUL", precio: 207000.00, graduacion_key: "NEWTON", final_sku: "T3LeProNewHiArAz" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON PLUS", precio: 338000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPl" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + AR AZUL", precio: 377000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlArAz" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + POLARIZADO", precio: 427000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlSol" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWPLUS + FOTO", precio: 407000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlFo" },
    { tier: "T3", descripcion: "LENT3 PROGRENEWPLUS+FOTO+HI", precio: 456000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlFoHi" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + HI", precio: 387000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlHi" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS+HI+ARAZUL", precio: 426000.00, graduacion_key: "NEWPLUS", final_sku: "T3LeProNewPlHiArAz" },

    // TIER 4
    { tier: "T4", descripcion: "LENT4 NEUTROS CON AR VERDE", precio: 139000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeArVr" },
    { tier: "T4", descripcion: "LENT4 DE SOL NEUTRO", precio: 139000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeSol" },
    { tier: "T4", descripcion: "LENT4 PA LA COMPU NEUTROS", precio: 139000.00, graduacion_key: "NOGRAD", final_sku: "T4LeNeCom" },
    { tier: "T4", descripcion: "LENT4 MONOFOCAL + AR AZUL", precio: 178000.00, graduacion_key: "MONO", final_sku: "T4LeMoArAz" },
    { tier: "T4", descripcion: "LENT4 MONOFOCAL + HI", precio: 188000.00, graduacion_key: "MONO", final_sku: "T4LeMoHi" },
    { tier: "T4", descripcion: "LENT4 MONO + AR AZUL + HI", precio: 227000.00, graduacion_key: "MONO", final_sku: "T4LeMoArAzHi" },
    { tier: "T4", descripcion: "LENT4 DE SOL GRADUADOS", precio: 139016.00, graduacion_key: "MONO", final_sku: "T4LeMoSol" }, // Precio con decimales
    { tier: "T4", descripcion: "LENT4 MONOFOCAL FOTO", precio: 208000.00, graduacion_key: "MONO", final_sku: "T4LeMoFo" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON", precio: 238000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNew" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + AR AZUL", precio: 277000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewArAz" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + POLARIZADO", precio: 327000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewSol" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON + FOTO", precio: 307000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewFo" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON+FOTO+HI", precio: 356000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewFoHi" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + HI", precio: 287000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewHi" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON+HI+ARAZUL", precio: 326000.00, graduacion_key: "NEWTON", final_sku: "T4LeProNewHiArAz" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON PLUS", precio: 358000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPl" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + AR AZUL", precio: 397000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlArAz" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + POLARIZADO", precio: 447000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlSol" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWPLUS + FOTO", precio: 427000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlFo" },
    { tier: "T4", descripcion: "LENT4 PROGRENEWPLUS+FOTO+HI", precio: 476000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlFoHi" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + HI", precio: 407000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlHi" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS+HI+ARAZUL", precio: 446000.00, graduacion_key: "NEWPLUS", final_sku: "T4LeProNewPlHiArAz" },

    // TIER 5 (Lentes)
    { tier: "T5", descripcion: "LENT5 NEUTROS CON AR VERDE", precio: 159000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeArVr" },
    { tier: "T5", descripcion: "LENT5 DE SOL NEUTRO", precio: 159000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeSol" },
    { tier: "T5", descripcion: "LENT5 PA LA COMPU NEUTROS", precio: 159000.00, graduacion_key: "NOGRAD", final_sku: "T5LeNeCom" },
    { tier: "T5", descripcion: "LENT5 MONOFOCAL + AR AZUL", precio: 198000.00, graduacion_key: "MONO", final_sku: "T5LeMoArAz" },
    { tier: "T5", descripcion: "LENT5 MONOFOCAL + HI", precio: 208000.00, graduacion_key: "MONO", final_sku: "T5LeMoHi" },
    { tier: "T5", descripcion: "LENT5 MONO + AR AZUL+ HI", precio: 247000.00, graduacion_key: "MONO", final_sku: "T5LeMoArAzHi" },
    { tier: "T5", descripcion: "LENT5 DE SOL GRADUADOS", precio: 248000.00, graduacion_key: "MONO", final_sku: "T5LeMoSol" },
    { tier: "T5", descripcion: "LENT5 MONOFOCAL FOTOCROMÁTICOS", precio: 228000.00, graduacion_key: "MONO", final_sku: "T5LeMoFo" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON", precio: 258000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNew" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + AR AZUL", precio: 297000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewArAz" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + POLARIZADO", precio: 347000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewSol" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON + FOTO", precio: 327000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewFo" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON+FOTO+HI", precio: 376000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewFoHi" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + HI", precio: 307000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewHi" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON+HI+ARAZUL", precio: 346000.00, graduacion_key: "NEWTON", final_sku: "T5LeProNewHiArAz" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON PLUS", precio: 378000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPl" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + AR AZUL", precio: 417000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlArAz" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + POLARIZADO", precio: 467000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlSol" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWPLUS + FOTO", precio: 447000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlFo" },
    { tier: "T5", descripcion: "LENT5 PROGRENEWPLUS+FOTO+HI", precio: 496000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlFoHi" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + HI", precio: 427000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlHi" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS+HI+ARAZUL", precio: 466000.00, graduacion_key: "NEWPLUS", final_sku: "T5LeProNewPlHiArAz" },

    // TIER 5 (Micas)
    { tier: "T5", descripcion: "MICAS GRADUADAS AR VERDE", precio: 42500.00, graduacion_key: "MONO", final_sku: "T5MicMoArVr" },
    { tier: "T5", descripcion: "MICAS GRADUADAS AR AZUL", precio: 81500.00, graduacion_key: "MONO", final_sku: "T5MicMoArAz" },
    { tier: "T5", descripcion: "MICAS GRADUADAS FOTO", precio: 111500.00, graduacion_key: "MONO", final_sku: "T5MicMoFo" },
    { tier: "T5", descripcion: "MICAS GRADUADAS POLARIZADAS", precio: 131500.00, graduacion_key: "MONO", final_sku: "T5MicMoArSol" },
    { tier: "T5", descripcion: "MICAS NEUTRAS POLARIZADAS", precio: 131500.00, graduacion_key: "NOGRAD", final_sku: "T5MicNeSol" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON", precio: 141500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNew" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWTON+POLARIZADO", precio: 230500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewSol" },
    { tier: "T5", descripcion: "MICAS PROGRENEWTON+AR AZUL", precio: 180500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewArAz" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWTON+FOTO", precio: 210500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewFo" },
    { tier: "T5", descripcion: "MICAS PROGRENEWTON+HI", precio: 190500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewHi" },
    { tier: "T5", descripcion: "MICAS PROGRENEW+HI+AR AZUL", precio: 229500.00, graduacion_key: "NEWTON", final_sku: "T5MicProNewHiArAz" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON PLUS", precio: 261500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPl" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWPLUS+AR AZUL", precio: 300500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlArAz" },
    { tier: "T5", descripcion: "MICAS PROGRENEWPLUS+POLARIZADO", precio: 350500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlSol" },
    { tier: "T5", descripcion: "MICAS PROGRENEWPLUS+FOTO", precio: 330500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlFo" },
    { tier: "T5", descripcion: "MICAS PROGRENEWPLUS+HI", precio: 310500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlHi" },
    { tier: "T5", descripcion: "MICAS PROGRNEWPLUS+HI+ARAZUL", precio: 349500.00, graduacion_key: "NEWPLUS", final_sku: "T5MicProNewPlHiArAz" },
];

const PRODUCT_CATALOG = RAW_CATALOG_DATA.map(item => ({
    tier: item.tier,
    graduacion: item.graduacion_key,
    combinacion_final: item.descripcion.trim(),
    precio: item.precio,
    final_sku: item.final_sku,
}));


// =================================================================
// 2. ELEMENTOS Y CONFIGURACIÓN (Resto del código idéntico)
// =================================================================

const tier = document.getElementById("tier");
const graduacion = document.getElementById("graduacion");
const combinacion_final = document.getElementById("combinacion_final");
const generar = document.getElementById("generar");
const preview = document.getElementById("preview");

const SELECT_CONTROLS = [
    { id: "tier", element: tier, label: "Seleccionar Tier" },
    { id: "graduacion", element: graduacion, label: "Graduación" },
    { id: "combinacion_final", element: combinacion_final, label: "Combinación / Producto Final" }
];

const OPTION_LABELS_GRAD = {
    MONO: 'Monofocal',
    NEWTON: 'Progresivo Newton',
    NEWPLUS: 'Progresivo Newton Plus',
    NOGRAD: 'Sin graduación',
};

// =================================================================
// 3. FUNCIONES DE LÓGICA (Resto del código idéntico)
// =================================================================

function formatPrice(price) {
    if (price === undefined || price === null) return "Precio no disponible";
    // Usamos Intl.NumberFormat para un formato de moneda correcto
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price).replace('US$', 'US$'); // Aseguramos el prefijo US$
}

function resetNextSelects(startIndex) {
    for (let i = startIndex; i < SELECT_CONTROLS.length; i++) {
        const control = SELECT_CONTROLS[i];
        control.element.innerHTML = `<option value="">-- Selecciona --</option>`;
        control.element.value = "";
        control.element.disabled = true;
    }
    generar.disabled = true;
    preview.innerHTML = "";
}

function updateOptions(currentId) {
    const currentIndex = SELECT_CONTROLS.findIndex(c => c.id === currentId);
    resetNextSelects(currentIndex + 1);

    const selections = {};
    for (let i = 0; i <= currentIndex; i++) {
        selections[SELECT_CONTROLS[i].id] = SELECT_CONTROLS[i].element.value;
    }

    if (selections[currentId] === "") {
        return;
    }

    const nextControl = SELECT_CONTROLS[currentIndex + 1];
    if (!nextControl) {
        generar.disabled = false;
        return;
    }

    let filteredCatalog = PRODUCT_CATALOG.filter(product => {
        let match = true;
        ['tier', 'graduacion'].forEach(key => {
            if (selections[key] && product[key] !== selections[key]) {
                match = false;
            }
        });
        return match;
    });

    let nextOptions = [];
    if (nextControl.id === 'graduacion') {
        nextOptions = ["MONO", "NOGRAD", "NEWTON", "NEWPLUS"].filter(
            grad => filteredCatalog.some(p => p.graduacion === grad)
        );
        nextOptions.sort((a, b) => a.localeCompare(b));
    } else {
        const uniqueCombinations = {};
        filteredCatalog.forEach(p => {
             uniqueCombinations[p.combinacion_final] = p.precio;
        });

        nextOptions = Object.keys(uniqueCombinations).map(value => ({
            value: value,
            price: uniqueCombinations[value]
        }));
        
        nextOptions.sort((a, b) => a.value.localeCompare(b.value));
    }

    if (nextOptions.length > 0) {
        let optionsHtml = `<option value="">-- Selecciona --</option>`;
        
        nextOptions.forEach(option => {
            if (nextControl.id === 'graduacion') {
                const label = OPTION_LABELS_GRAD[option] || option;
                optionsHtml += `<option value="${option}">${label}</option>`;
            } else if (nextControl.id === 'combinacion_final') {
                const priceFormatted = formatPrice(option.price);
                optionsHtml += `<option value="${option.value}">${option.value} (${priceFormatted})</option>`;
            }
        });

        nextControl.element.innerHTML = optionsHtml;
        nextControl.element.disabled = false;
    }
}


// =================================================================
// 4. ASIGNACIÓN DE EVENT LISTENERS (Resto del código idéntico)
// =================================================================

SELECT_CONTROLS.forEach((control) => {
    control.element.addEventListener("change", () => {
        updateOptions(control.id);
        
        if (control.id === 'combinacion_final' && control.element.value !== "") {
            generar.disabled = false;
        } else if (control.id === 'combinacion_final' && control.element.value === "") {
            generar.disabled = true;
        }
    });
});


// =================================================================
// 5. GENERACIÓN DE ETIQUETA (Resto del código idéntico)
// =================================================================

generar.addEventListener("click", () => {
    const t = tier.value;
    const g = graduacion.value;
    const cf = combinacion_final.value; 

    const finalProduct = PRODUCT_CATALOG.find(p => 
        p.tier === t && 
        p.graduacion === g && 
        p.combinacion_final === cf
    );

    const finalSKU = finalProduct ? finalProduct.final_sku : "SKU-NO-ENCONTRADO";
    const precioUnitario = finalProduct ? formatPrice(finalProduct.precio) : "N/A";
    const consignacion = "123456";

    if (finalSKU === "SKU-NO-ENCONTRADO") {
        preview.innerHTML = `<p style="color: red;">Error: La combinación seleccionada no es un producto válido en el catálogo.</p>`;
        return;
    }
    
    preview.innerHTML = `
        <div class="barcode">
            <svg id="barcode"></svg>
            <p style="font-size:20px; margin:5px 0;"><b>${finalSKU}</b></p>
            <p style="font-size:18px;">Precio: ${precioUnitario}</p>
            <p style="font-size:18px;">${consignacion}</p>
        </div>
    `;

    JsBarcode("#barcode", finalSKU, {
        format: "CODE128",
        width: 3,
        height: 90,
        displayValue: false
    });
});