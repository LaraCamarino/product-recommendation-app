import React from 'react';
import RecommendationCard from './RecommendationCard/RecommendationCard';

function RecommendationList({ recommendations }) {
  return (
    <div className='mt-8'>
      <h2 className="text-[#003d5c] font-bold text-2xl mb-4">Lista de Recomendações</h2>

      {recommendations.length === 0 && <p className='text-lg'>Nenhuma recomendação encontrada.</p>}

      <ul className='flex flex-col gap-8'>
        {recommendations.map((recommendation, index) => (
          <RecommendationCard product={recommendation} key={index}/>
        ))}
      </ul>

    </div>
  );
}

export default RecommendationList;
