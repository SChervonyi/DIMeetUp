import { GenericClassDecorator, Type } from './Utils';

/**
 * @returns {GenericClassDecorator<Type<any>>}
 * @constructor
 */
export const Service = () : GenericClassDecorator<Type<any>> => {
  return (target: Type<any>) => {
    // do something with `target`, e.g. some kind of validation
  };
};
