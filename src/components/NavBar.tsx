import NavBarInCategory from './NavBarInCategory';
import TextField from './TextField';

type NavBarProps = {
    foodCategory: string[];
    searchText: string;
    setSearchText: (value: string) => void;
    setClickCategory: (value: string) => void;
}

export default function NavBar({
  foodCategory, searchText, setSearchText, setClickCategory,
}: NavBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <NavBarInCategory
        foodCategory={foodCategory}
        setClickCategory={setClickCategory}
      />
    </div>
  );
}
