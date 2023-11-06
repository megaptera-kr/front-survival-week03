import { useCallback, useMemo, useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import { Restaurants } from "../types/data";
import filterData from "../utils/filterData";
import RestaurantTable from "../components/RestaurantTable";

interface Props {
  data: Restaurants;
}

function RestaurantMenu({ data }: Props) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleKeywordChange = useCallback((keyword: string) => {
    setKeyword(keyword);
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setCategory(category);
  }, []);

  if (!data.length) return <div>Loading...</div>;

  const filteredData = useMemo(() => {
    if (!keyword && !category) return data;

    return filterData(data, { keyword, category });
  }, [data, keyword, category]);

  return (
    <div>
      <header>
        <h1>오늘의 메뉴</h1>
      </header>
      <section>
        <Input
          label="검색"
          value={keyword}
          placeholder="식당 이름"
          onChange={handleKeywordChange}
        />
        <Select
          options={[
            { label: "전체", value: "" },
            { label: "중식", value: "중식" },
            { label: "한식", value: "한식" },
            { label: "일식", value: "일식" },
          ]}
          onClick={handleCategoryClick}
        />
      </section>
      <section>
        <RestaurantTable data={filteredData} />
      </section>
    </div>
  );
}

export default RestaurantMenu;
