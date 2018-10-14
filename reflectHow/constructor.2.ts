import 'reflect-metadata';

function LogParamTypes<T extends { new(...args: any[]): {} }>(constructor: T) {
    const types = Reflect.getMetadata('design:paramtypes', constructor);
    const s = types.map(a => a.name).join();
    console.log(`param types: ${s}`);
}

class Foo { }
interface IFoo { }

@LogParamTypes
class Demo {
    constructor(
        param1: string,
        param2: number,
        param3: Foo,
        param4: { test: string },
        param5: IFoo,
        param6: Function,
        param7: (a: number) => void,
    ) {
    }
}
