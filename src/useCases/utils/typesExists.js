const validTypes = [
  "Cereais e derivados",
  "Verduras, hortaliças e derivados",
  "Frutas e derivados",
  "Gorduras e óleos",
  "Pescados e frutos do mar",
  "Carnes e derivados",
  "Leite e derivados",
  "Bebidas (alcoólicas e não alcoólicas)",
  "Ovos e derivados",
  "Produtos açucarados",
  "Miscelâneas",
  "Outros alimentos industrializados",
  "Alimentos preparados",
  "Leguminosas e derivados",
  "Nozes e sementes",
];

export function typesExists(types) {
  const result = [];
  types.forEach((type) => {
    result.push(validTypes.find((validType) => validType === type));
  });

  return result;
}
