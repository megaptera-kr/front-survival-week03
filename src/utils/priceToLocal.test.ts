import priceToLocal from './priceToLocal';

describe('priceToLocal', () => {
  describe('한국어라면', () => {
    it('1000원을 표시하면 1,000원이 나와야 한다.', () => {
      expect(priceToLocal(1000)).toBe('1,000');
    });

    it('option값으로 통화 unit를 추가할 수 있다.', () => {
      expect(priceToLocal(1000, 'ko-KR', { currency: 'KRW', style: 'currency' })).toBe('₩1,000');
    });
  });
});
