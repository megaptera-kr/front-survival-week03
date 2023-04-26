export default function select<ItemType, ValueType>(
  items: ItemType[],
  key: keyof ItemType,
  value: ValueType,
) {
  return items.filter((item) => item[key] === value);
}
