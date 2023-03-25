export default function commaNumber(price: number) {
  const commaNum = price.toLocaleString('Ko-Kr');
  const commaPrice = `(${commaNum}원)`;
  return commaPrice;
}
