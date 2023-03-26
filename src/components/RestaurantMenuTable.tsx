export default function RestaurantMenuTable() {
  return (
    <div>
      {/* 레스토랑&메뉴 테이블 */}
      <table>
        <colgroup>
          <col width={120} />
          <col width={80} />
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
  );
}
