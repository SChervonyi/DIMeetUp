import 'reflect-metadata';

class Foo { }
interface IFoo { }

function LogParamTypes<T extends { new(...args: any[]): {} }>(constructor: T) {
    const types = Reflect.getMetadata('design:paramtypes', constructor);
    const s = types.map(a => a.name).join('\r\n');
    console.log(`param types: ${s}`);
}

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
