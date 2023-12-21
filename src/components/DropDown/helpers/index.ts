
export const getMonthName = (numberOfMonth: number) => {
  const date = new Date(0, numberOfMonth);

  return  date.toLocaleString('en', { month: 'long' });
}