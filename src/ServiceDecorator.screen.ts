
export interface Type<T> {
  new(...args: any[]): T;
}

export type GenericClassDecorator<T> = (target: T) => void;

export const Service = () : GenericClassDecorator<Type<any>> => {
  return (target: Type<any>) => {
    // do something with `target`, e.g. some kind of validation
  };
};

