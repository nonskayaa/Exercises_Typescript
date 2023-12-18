type getIndexFunc = <T>(
  input: T[],
  comparator: (firstArg: T, secondArg: T) => number
) => number;

type getElementFunc = <T>(
  input: T[],
  comparator: (firstArg: T, secondArg: T) => number 
) => T | null;

type getMedianValue = <T>(input: T[], getValue: (item: T) => number) => number | null

declare module "stats" {
  export const getMaxIndex: getIndexFunc;
  export const getMinIndex: getIndexFunc;
  export const getMedianIndex: getIndexFunc;

  export const getMaxElement: getElementFunc;
  export const getMinElement: getElementFunc;
  export const getMedianElement: getElementFunc

  export const getAverageValue: getMedianValue
}
