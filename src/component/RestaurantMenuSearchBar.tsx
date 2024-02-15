import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';
import RestaurantMenuSearchButton from './RestaurantMenuSearchButton';

type RestaurantMenuSearchBarProps = {
  searchText: string;
  handleSearchText: (value: string) => void;
  category: string;
  handleButton: (value: string) => void;
  categories: string[];
};

export default function RestaurantMenuSearchBar({
  searchText,
  handleSearchText,
  category,
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
      <div>
        {categories.map((categorie) => (
          <RestaurantMenuSearchButton
            key={categorie}
            text={categorie}
            category={category}
            handleButton={handleButton}
          />
        ))}
      </div>
    </>
  );
}
