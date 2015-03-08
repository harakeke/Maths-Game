module Maths {
  export interface IExtendedScope<T> extends ng.IScope {
    model: T;
  }
}