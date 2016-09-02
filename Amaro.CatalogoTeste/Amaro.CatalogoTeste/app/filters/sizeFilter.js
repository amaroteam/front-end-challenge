(function () {

    angular.module('app')
        .filter('sizeFilter', sizeFilter);


    function sizeFilter() {

        function filter(input) {

            var sizeFiltered = [];

            for (var i = 0; i < input.length; i++) {
                if (input[i].available)
                    sizeFiltered.push(input[i]);
            }
            return sizeFiltered;

        };
        return filter;
    }
})();