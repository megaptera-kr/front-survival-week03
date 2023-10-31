import FilterableMenuTableHead from './FIlterableMenuTableHead';
import FilterableMenuTableBody from './FilterableMenuTableBody';

export default function FilterableMenuTable() {
  return (
    <div>
      <table>
        <FilterableMenuTableHead />
        <FilterableMenuTableBody />
      </table>
    </div>
  );
}
