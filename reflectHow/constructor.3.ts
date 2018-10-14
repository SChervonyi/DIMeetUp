import 'reflect-metadata';

class Foo {
}

class Bar {
    constructor(public foo: Foo) {
    }
}

function LogParamTypes<T extends { new(...args: any[]): {} }>(constructor: T) {
    const types = Reflect.getMetadata('design:paramtypes', constructor);
    const s = types.map(a => a.name).join(', ');
    console.log(`param types: ${s}`);
}

@LogParamTypes
class Foobar {
    constructor(public foo: Foo, public bar: Bar) {
    }
}

declare type ClassDecorator = <TFunction 
    extends Function>(target: TFunction) => TFunction | void;

function MyClassDecorator<T 
    extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
    }
}

