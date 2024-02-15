import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';
import RestaurantMenuSearchButton from './RestaurantMenuSearchButton';

type RestaurantMenuSearchBarProps = {
  searchText: string;
  handleSearchText: (value: string) => void;
  category: string;
  handleButton: (value: string) => void;
};

export default function RestaurantMenuSearchBar({
  searchText,
  handleSearchText,
  category,
  handleButton,
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
        <RestaurantMenuSearchButton
          text=''
          category={category}
          handleButton={handleButton}
        />
        <RestaurantMenuSearchButton
          text='중식'
          category={category}
          handleButton={handleButton}
        />
        <RestaurantMenuSearchButton
          text='한식'
          category={category}
          handleButton={handleButton}
        />
        <RestaurantMenuSearchButton
          text='일식'
          category={category}
          handleButton={handleButton}
        />
      </div>
    </>
  );
}
