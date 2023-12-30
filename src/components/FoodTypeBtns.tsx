import { FoodType } from '../types/FoodType';

type FoodTypeBtnsProps = {
    handleFoodTypes: (typs: FoodType) => void;
    filterFoodTypes: string[];
  };

function FoodTypeBtns({ handleFoodTypes, filterFoodTypes }: FoodTypeBtnsProps) {
  return (
    <div>
      {['전체', ...filterFoodTypes].map((type) => (
        <button type="button" key={type} onClick={() => handleFoodTypes(type as FoodType)}>
          {type}
        </button>
      ))}
    </div>
  );
}

export default FoodTypeBtns;
