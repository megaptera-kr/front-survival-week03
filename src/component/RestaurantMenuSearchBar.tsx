import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';
import RestaurantMenuSearchButton from './RestaurantMenuSearchButton';

type RestaurantMenuSearchBarProps = {
  searchText: string;
  handleSearchText: (value: string) => void;
  handleButton: (value: string) => void;
  categories: string[];
};

export default function RestaurantMenuSearchBar({
  searchText,
  handleSearchText,
  handleButton,
  categories,
}: RestaurantMenuSearchBarProps) {
  return (
    <>
      <div className='restaurant-menu-search-bar'>
        <RestaurantMenuSearchTextField
          placeholder='식당 이름'
          searchText={searchText}
          handleSearchText={handleSearchText}
        />
      </div>
      <>
        {categories.map((category) => (
          <RestaurantMenuSearchButton
            key={category}
            text={category}
            category={category}
            handleButton={handleButton}
          />
        ))}
      </>
    </>
  );
}
