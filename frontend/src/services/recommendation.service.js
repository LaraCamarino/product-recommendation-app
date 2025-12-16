// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
    const { 
    selectedPreferences = [], 
    selectedFeatures = [], 
    selectedRecommendationType 
  } = formData;

  const scoredProducts = products.map((product, index) => {
    let score = 0;

    selectedPreferences.forEach((preference) => {
      if (product.preferences && product.preferences.includes(preference)) {
        score++;
      }
    });

    selectedFeatures.forEach((feature) => {
      if (product.features && product.features.includes(feature)) {
        score++;
      }
    });

    return { ...product, score, originalIndex: index };
  });

  const recommendedProducts = scoredProducts.filter((p) => p.score > 0);

  if (recommendedProducts.length === 0) return [];

  const sortedProducts = [...recommendedProducts].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.originalIndex - a.originalIndex;
  });

  return selectedRecommendationType === 'SingleProduct' ? sortedProducts.slice(0, 1) : sortedProducts;
};

export default { getRecommendations };
