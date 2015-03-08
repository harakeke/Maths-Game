/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="reference.ts" />
module Maths {
  export class MainController {
    public label: string;

    constructor(private $scope: Maths.IExtendedScope<MainController>, private $interval: ng.IIntervalService) {
      $scope.model = this;
      this.label = "Harakeke";

      $interval(() => {
        this.label = Date.now().toString();
      }, 1000);
    }
  }
}