import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="">
      <h2 className="group-title">Tipo de Recomendação</h2>
      <ul className='group-list'>
        <li className="group-list-item">
          <Checkbox 
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          >
            Produto Único
          </Checkbox>
        </li>
        <li className="group-list-item">
          <Checkbox 
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          >
            Múltiplos Produtos
          </Checkbox>
        </li>
        </ul>
    </div>
  );
}

export default RecommendationType;
