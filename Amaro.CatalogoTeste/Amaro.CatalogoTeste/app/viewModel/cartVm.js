
//Pattern Agregate
//Um item só pode ser adicionado pelo raíz do agregado (Cart => carrinho)
function CartVm() {
    
    var self = this;

    //Properties
    this.itens = [];

    //functions
    this.getTotal = getTotal;
    this.getQtdItem = getQtdItem;
    this.addItem = addItem;
    this.removeItem = removeItem;
    this.AddQtdItem = AddQtdItem;

    function getQtdItem() {
        return self.itens.length;
    }

    function getTotal() {

        var total = 0;

        for (var i = 0; i < self.itens.length; i++) {

            var re ='R$ ';
            var price = self.itens[i].price.replace(re, '').replace(',','.');
            total += self.itens[i].qtd * parseFloat(price).toFixed(2);
        }

        return total.toFixed(2);
    }

    function removeItem(product) {
        
        for (var i = 0; i < self.itens.length; i++) {

            if (equals(self.itens[i], product))
                self.itens.splice(i, 1);
        }
    }

    function addItem(product, qtd) {

        if (IfExists(product))
            AddQtdItem(product, qtd);
        else
            self.itens.push(product);
    }

    function AddQtdItem(product, qtd){

        for (var i = 0; i < self.itens.length; i++) {
            if (equals(self.itens[i], product)) {
                self.itens[i].qtd += qtd; 
            }
        }
    }

    function IfExists(product) {

        if (self.itens == null)
            return false;

        else {
            for (var i = 0; i < self.itens.length; i++) {
                if (equals(self.itens[i], product) && self.itens[i].size == product.size) {
                    return true;
                }
            }
            return false;
        }
    }

    //Como não existe um identidade definida
    //Estou elegendo o name como identidade
    function equals(productA, productB){

        if (productA.name == productB.name && productA.size == productB.size )
            return true;

        return false;

    }
}