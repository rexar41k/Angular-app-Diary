angular.module('app').directive('myDatepicker', function () {
    return {
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    changeYear:true,
                    changeMonth:true,
                    dateFormat:'dd/mm/yy',
                    maxDate: new Date(),
                    yearRange: '2000:2015',
                    onSelect:function (dateText, inst) {
                        ngModelCtrl.$setViewValue(dateText);
                        scope.$apply();
                    }
                });
            });
        }
    };
});