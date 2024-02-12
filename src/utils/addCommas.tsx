function addCommas(price: number): string {
  return `${price.toLocaleString('ko-KR')}원`;
}

export default addCommas;
