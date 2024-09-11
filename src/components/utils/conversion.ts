/** 숫자 세자리마다 콤마를 찍어서 반환 */
export const getNumberWithComma = (number: number) => {
  if (number === null || number === undefined) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/** 문자열을 num부터 ...으로 출력 */
export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};
