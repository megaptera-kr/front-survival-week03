import FILTER_LIST from '../constants/constants';
import ProductRow from './ProductRow';

type props = {
  data: Restaurant[];
  filterType: (typeof FILTER_LIST)[number];
  keyword: string;
};

function ProductTable({ data, filterType, keyword }: props) {
  const filteredData = Array.isArray(data)
    && data.filter((el) => {
      if (filterType === '전체' && keyword === '') {
        return true;
      } if (filterType !== '전체' && keyword === '') {
        return el.category === filterType;
      } if (filterType === '전체' && keyword !== '') {
        return el.name.includes(keyword);
      }
      return el.category === filterType && el.name.includes(keyword);
    });

  return (
    <section>
      <div className="flex gap-8 text-base font-bold">
        <div className="w-24">식당 이름</div>
        <div className="w-24">종류</div>
        <div className="w-24">메뉴</div>
      </div>
      <ProductRow data={filteredData} />
    </section>
  );
}

export default ProductTable;
