/** 숫자 세자리마다 콤마를 찍어서 반환 */
export const getNumberWithComma = (number: number) => {
  if (number === null || number === undefined) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
