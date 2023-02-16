import restaurants from '../restaurants.json';

export default function App() {
  const onChange = () => null;

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <div>
        <div>
          <div>
            <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>검색</label>
            <input id="input-검색" type="text" placeholder="식당 이름" value="" onChange={onChange} />
          </div>
          <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
            <li style={{ marginRight: '1rem' }}>
              <button type="button">전체</button>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <button type="button">중식</button>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <button type="button">한식</button>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <button type="button">일식</button>
            </li>
          </ul>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th style={{ paddingInline: '2rem' }}>식당 이름</th>
                <th>종류</th>
                <th>메뉴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>메가반점</td>
                <td>중식</td>
                <td>
                  <ul>
                    <li>짜장면(8,000원)</li>
                    <li>짬뽕(8,000원)</li>
                    <li>차돌짬뽕(9,000원)</li>
                    <li>탕수육(14,000원)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
