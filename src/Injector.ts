import 'reflect-metadata';
import { Type } from './Utils';

export const Injector = new class {
  resolve<T>(target: Type<any>): T {
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = tokens.map(token => Injector.resolve<any>(token));

    return new target(...injections);
  }
};
