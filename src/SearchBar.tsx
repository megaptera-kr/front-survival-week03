import CheckBoxField from './CheckBoxField';

export default function SearchBar() {
  return (
    <div className="filterableProductTable">
      <div className="searchBar">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <CheckBoxField label="Only show products in stock" />
        <CheckBoxField label="Only show products over $10" />
      </div>
    </div>
  );
}
