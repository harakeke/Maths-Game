var Maths;
(function (Maths) {
    var MainController = (function () {
        function MainController($scope, $interval) {
            var _this = this;
            this.$scope = $scope;
            this.$interval = $interval;
            $scope.model = this;
            this.label = "Harakeke";
            $interval(function () {
                _this.label = Date.now().toString();
            }, 1000);
        }
        return MainController;
    })();
    Maths.MainController = MainController;
})(Maths || (Maths = {}));
var MathsApp = MathsApp || {};
MathsApp = (function () {
    var init = function () {
        app("MathsApp");
        angular.bootstrap(document, ["MathsApp"]);
    };
    var app = function (appName) {
        var app = angular.module("MathsApp", []);
        app.controller("MainController", ["$scope", "$interval", Maths.MainController]);
    };
    return {
        start: init
    };
})();
//# sourceMappingURL=maths.js.map