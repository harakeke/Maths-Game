var MathsApp : any = MathsApp || {};

MathsApp = (function () {
  var init = () => {
    app("MathsApp");
    angular.bootstrap(document, ["MathsApp"]);
  };

  var app = (appName: string) => {
    var app: ng.IModule = angular.module("MathsApp", []);
    app.controller("MainController", ["$scope", "$interval", Maths.MainController]);
  };

  return {
    start: init
  };
})();