export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <div>
        <div>
          {/* 검색 */}
          <div>
            <label htmlFor="search">검색</label>
            <input type="text" id="search" placeholder="식당 이름" />
          </div>
          <div style={{
            display: 'flex', flexDirection: 'row', gap: '10px', margin: '10px 0',
          }}
          >
            <button type="button">전체</button>
            <button type="button">중식</button>
            <button type="button">한식</button>
            <button type="button">일식</button>
          </div>
        </div>
        <div>
          {/* 메뉴테이블 */}
          <table>
            <colgroup>
              <col width={100} />
              <col width={800} />
              <col width={150} />
            </colgroup>
            <thead>
              <tr>
                <th>식당 이름</th>
                <th>종류</th>
                <th>메뉴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>식당이름</td>
                <td>종류</td>
                <td>
                  <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
