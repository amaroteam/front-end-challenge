(function () {

    angular.module('app')
        .filter('onsaleFilter', onsaleFilter);

    function onsaleFilter() {

        function filter(inputs, on_sale) {
            
            var onsaleFiltered = [];

            if (on_sale == "All" || on_sale == null || on_sale == "")
                return inputs;
            
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].on_sale)
                    onsaleFiltered.push(inputs[i]);
            }

            return onsaleFiltered;
        };

        return filter;
    }
})();