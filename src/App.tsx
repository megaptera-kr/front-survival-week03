export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <div className='search-bar'>
        <label htmlFor='search-input'>
          검색
          <input id='search-input' type='text' placeholder='식당 이름' />
        </label>
        <div className='button-group'>
          <button type='button'>전체</button>
          <button type='button'>중식</button>
          <button type='button'>한식</button>
          <button type='button'>일식</button>
        </div>
      </div>
      <table className='restaurant-table'>
        <thead>
          <tr>
            <th>식당 이름</th>
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
                <li>짜장면</li>
                <li>짬뽕</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
