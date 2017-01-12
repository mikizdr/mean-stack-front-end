export function CompareToDirective($parse) {
    'ngInject'
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, mgModel) {
            var mainModel = $parse(attrs.compareTo);
            var secondModel = $parse(attrs.ngModel);

            scope.$watch(attrs.ngModel, function (newValue) {
                mgModel.$setValidity(attrs.name, newValue === mainModel(scope));
            });

            scope.$watch(attrs.compareTo, function (newValue) {
                mgModel.$setValidity(attrs.name, newValue === secondModel(scope));
            });
        }

    }

}