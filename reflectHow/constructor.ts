import 'reflect-metadata';

function logParamTypes<T extends {new(...args:any[]):{}}>(constructor: T) {
    var types = Reflect.getMetadata("design:paramtypes", constructor);
    var s = types.map(a => a.name).join();
    console.log(`param types: ${s}`);
  }  

  class Foo {}
  interface IFoo {}

  @logParamTypes
  class Demo { 
    constructor(
      param1 : string,
      param2 : number,
      param3 : Foo,
      param4 : { test : string },
      param5 : IFoo,
      param6 : Function,
      param7 : (a : number) => void,
    )  { 
    }
  }