import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';
import RestaurantMenuSearchButton from './RestaurantMenuSearchButton';

type RestaurantMenuSearchBarProps = {
  textField: string;
  handleTextField: (value: string) => void;
};

export default function RestaurantMenuSearchBar({
  textField,
  handleTextField,
}: RestaurantMenuSearchBarProps) {
  return (
    <>
      <div className='restaurant-menu-search-bar'>
        <RestaurantMenuSearchTextField
          placeholder='식당 이름'
          textField={textField}
          handleTextField={handleTextField}
        />
      </div>
      <div>
        <RestaurantMenuSearchButton text='전체' />
        <button type='button'>중식</button>
        <button type='button'>한식</button>
        <button type='button'>일식</button>
      </div>
    </>
  );
}
