import 'reflect-metadata';
import { Type } from "./Utils";

export const Injector = new class {
    // resolving instances
    resolve<T>(target: Type<any>): T {
      // tokens are required dependencies, while injections are resolved tokens from the Injector
      const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
      const injections = tokens.map(token => Injector.resolve<any>(token));
      
      return new target(...injections);
    }
  };