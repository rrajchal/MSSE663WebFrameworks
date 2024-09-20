import { v4 as uuid } from 'uuid';

type Accumilator<T> = { id: string } & T;

export const idify = <T, R extends Accumilator<T>>(array: T[]) =>
  array.reduce((acc: R[], val: T): R[] => {
    const id = uuid();

    acc.push({
      id,
      ...val,
    } as R);

    return acc;
  }, []);
