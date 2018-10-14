import 'reflect-metadata';

function logParamTypes(target : any, key : string) {
  const types = Reflect.getMetadata('design:paramtypes', target, key);
  const s = types.map(a => a.name).join();
  console.log(`${key} param types: ${s}`);
}

class Foo {}
interface IFoo {}

class Demo {
  @logParamTypes // apply parameter decorator
  doSomething(
    param1 : string,
    param2 : number,
    param3 : Foo,
    param4 : { test : string },
    param5 : IFoo,
    param6 : Function,
    param7 : (a : number) => void,
  ) : number {
    return 1;
  }
}
