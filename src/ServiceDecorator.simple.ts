declare type ClassDecoratorType = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type GenericClassDecorator<T> = (target: T) => void;

function MyClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
  };
}
