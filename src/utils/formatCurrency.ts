function formatCurrency(price: number): string {
  return `${price.toLocaleString('ko-KR')}원`;
}

export default formatCurrency;
