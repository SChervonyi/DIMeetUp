import 'reflect-metadata';

const Service = () : ClassDecorator => {
    return target => {
      console.log(Reflect.getMetadata('design:paramtypes', target));
      console.log(typeof target);
    };
  };
  
  class Bar {}
  
  @Service()
  class Foo {
    constructor(bar: Bar, baz: string) {}
  }