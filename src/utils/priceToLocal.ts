export default function priceToLocal(
  price: number,
  locales: Intl.LocalesArgument = 'ko-KR',
  options: Intl.NumberFormatOptions = {
    currency: 'KRW',
  },
) {
  return price.toLocaleString(locales, options);
}
