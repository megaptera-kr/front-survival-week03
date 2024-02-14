export default function App() {
  return (
    <div className='filtered-menu-container'>
      <section>
        <div>오늘의 메뉴</div>
        <div>
          <label htmlFor='input-menu-search'>검색</label>
          <input type='text' id='input-menu-search' placeholder='식당 이름' />
        </div>
        <div>
          <button type='button'>전체</button>
          <button type='button'>중식</button>
          <button type='button'>한식</button>
          <button type='button'>일식</button>
        </div>

        <table className='menu-table'>
          <thead>
            <tr>
              <th>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>메가 반점</td>
              <td>중식</td>
              <td>
                <ul>
                  <li>짜장면(8,000원)</li>
                  <li>짬뽕(8,000원)</li>
                  <li>차돌짬뽕(8,000원)</li>
                  <li>탕수육(8,000원)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>메가 반점</td>
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
            <tr>
              <td>메리 김밥</td>
              <td>한식</td>
              <td>
                <ul>
                  <li>김밥(3,500원)</li>
                  <li>참치김밥(4,500원)</li>
                  <li>제육김밥(5,000원)</li>
                  <li>컵라면(2,000원)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>데브부엌</td>
              <td>한식</td>
              <td>
                <ul>
                  <li>제육덮밥(10,000원)</li>
                  <li>닭떡국(9,000원)</li>
                  <li>닭개장(8,000원)</li>
                  <li>돈가쓰(7,000원)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
