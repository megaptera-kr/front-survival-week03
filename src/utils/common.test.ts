import moneyformat from './common';

describe('moneyformat 함수는', () => {
  it('리턴 값의 타입이 string 이다.', () => {
    expect(typeof moneyformat(0)).toBe('string');
  });
  it("숫자 0에 대하여 '0'을 리턴한다.", () => {
    expect(moneyformat(0)).toBe('0');
  });
  it("숫자 123에 대하여 '123'을 리턴한다.", () => {
    expect(moneyformat(123)).toBe('123');
  });
  it("숫자 1234에 대하여 '1,234'을 리턴한다.", () => {
    expect(moneyformat(1234)).toBe('1,234');
  });
  it("숫자 123456에 대하여 '123,456'을 리턴한다.", () => {
    expect(moneyformat(123456)).toBe('123,456');
  });
  it("숫자 1234567에 대하여 '1,234,567'을 리턴한다.", () => {
    expect(moneyformat(1234567)).toBe('1,234,567');
  });
});
