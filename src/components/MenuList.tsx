import menuInfoType from '../types/menuInfoType';

export default function MenuList({ menuInfo }:{menuInfo: menuInfoType}) {
  return (
    <li
      key={menuInfo.id}
    >
      {`${menuInfo.name}(${menuInfo.price.toLocaleString('ko-KR')}원)`}
    </li>
  );
}
