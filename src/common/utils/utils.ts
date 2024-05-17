export const getProcedureNumber = (index: number) => {
  return index < 10 ? `0${index}` : String(index);
};