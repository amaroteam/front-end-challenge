$(function(){
   /* Materialize inits */
   $('.parallax').parallax();
   $('select').material_select();
   $('.modal').modal({
      complete: function() {$('main, header .nav-wrapper').removeClass('blur');}
   });

   /* Bind product page modal to products */
   $(document).on('click', 'a[href="#product-modal"]', function(){
      id = $(this).attr('data-id');
      $('main, header .nav-wrapper').addClass('blur');
      injectModal(id);
   });

   /* Basket/cart opening */
   $('#open-cart').on('click', function(e){
      e.preventDefault();
      w = document.body.clientWidth;
      $('main, header .nav-wrapper').addClass('blur');
      $('body,header .nav-wrapper').css({'overflow':'hidden','width':w});
      $('.cart').fadeIn();
   });

   /* Basket/cart cçpsomg */
   $('.close-cart').on('click', function(){
      $('main, header .nav-wrapper').removeClass('blur');
      $('body, header .nav-wrapper').removeAttr( 'style' );
      $('.cart').fadeOut();
   });

   /* Binding add to cart function to button */
   $(document).on('click', '.add-cart', function(e){
      e.preventDefault();
      id = $(this).attr('data-id');
      size = $('input[name=size]:checked', 'form').val();
      if(!size) return $('.error').fadeInThenSlide();
      $("#botaocart").addClass("comprado");
      setTimeout(function(){
         $("#botaocart").removeClass("comprado");
      }, 1000);
      Materialize.toast('Produto adicionado ao carrinho!', 4000);
      addCart(id, size);
   });

   /* Binding remove item from cart button */
   $(document).on('click', '.delete-product', function(){
      deleteProduct(this);
   });

   /* Fade out an error */
   $('#modal_prd_sizes').on('click', 'label', function(){
      $('.error').fadeOutThenSlide();
   });
});

/* Sorting by name when the document is loaded */
$(window).load(function(){
   $('.product-container').isotope('layout');
});

/* Group of isotope filter functions (okay, one function, but maybe I need more in the future u.u) */
var filterFns = {
   priceFilter: function() {
      var price = $(this).find('.price.brandon').text().replace(/[^0-9]/g, '')/100;
      var sale = $(this).hasClass('sale');
      var a = $('option[value=".sale"]').is(':selected') ? sale : false;
      var b = $('option[value="until50"]').is(':selected') ? (price <= 50) : false;
      var c = $('option[value="from50_100"]').is(':selected') ? (price >= 50 && price <= 100) : false;
      var d = $('option[value="from100_15"]').is(':selected') ? (price >= 100 && price <= 150) : false;
      var e = $('option[value="from150_20"]').is(':selected') ? (price >= 150 && price <= 200) : false;
      var f = $('option[value="moreThan20"]').is(':selected') ? (price >= 200) : false;
      return(a || b || c || d || e || f);
   }
};

/* Store variable for a group of future addeds isotope filters */
var filters = {};

/* Initialize isotope for layout, filtering and sorting */
var $grid = $('.product-container').isotope({
   itemSelector: '.product-card',
   layoutMode: 'fitRows',
   getSortData: {
      name: '.product-title',
      price: function(itemElem) {
         var price = $(itemElem).find('.price.brandon').text().replace(/[^0-9]/g, '')/100;
         return parseFloat(price);
      },
      color: '[data-color]',
      sale: '.sale'
   },
   filter: function() {

      var isMatched = true;
      var $this = $(this);

      for (var prop in filters) {
         var filter = filters[prop];
         // use function if it matches
         filter = filterFns[ filter ] || filter;
         // test each filter
         if (filter) {
            isMatched = isMatched && $(this).is( filter );
         }
         // break if not matched
         if (!isMatched) {
            break;
         }
      }
      return isMatched;
   }
});

/* Loading JSON Products file and spawning the cards */
var json = (function () {
   var json = null;
   $.ajax({
      'async': false,
      'global': true,
      'url': 'products.json',
      'dataType': "json",
      'success': function (data) {
         json = data.products;
         for(var product in json) {
            var sizes_divs = '';
            sizes = json[product].sizes;
            for(var size in sizes) {
               if(sizes[size].available === true) {
                  sizes_divs += '<div class="size">'+sizes[size].size+'</div>';
               }
            }
            id = json[product].code_color;
            name = json[product].name;
            color = json[product].color_slug;
            sale = json[product].on_sale === true ? 'sale' : '';
            sale_percentage = json[product].discount_percentage;
            regular_price = json[product].on_sale === true ? json[product].regular_price : '';
            actual_price = json[product].actual_price.split(",")[0];
            actual_price_cents = json[product].actual_price.split(",")[1];
            installments = json[product].installments;
            image = json[product].image;
            product_card = $('<a href="#product-modal" data-id="'+id+'"><div class="product-card '+sale+'" data-color="'+color+'" data-sale-percent="'+sale_percentage+'"><div class="img-container"><img alt="'+name+'" src="'+image+'"></div><div class="info"><div class="content"><p class="product-title">'+name+'</p>'+sizes_divs+'<div class="divide"></div><div class="price extra dashed">'+regular_price+'</div><div class="price brandon">'+actual_price+'<sup class="cents">'+actual_price_cents+'</sup></div><p class="price extra">'+installments+'</p><div class="details">+ DETALHES</div></div></div></div></a>');
            $grid.append(product_card).isotope('appended', product_card);
         }
         // console.log(json);
      }
   });
   return json;
})();

/* Sort select trigger binding */
$('#sorts').on('change', function() {
   var sortByValue = $('#sorts').val();
   var ascending = $('#sorts').find(":selected").data('ascending');
   $('.product-container').isotope({ sortBy: sortByValue, sortAscending: ascending });
});

/* Multiple select filters trigger binding (maybe it should be with the others bindings above... I think this code is a little messy...) */
$('.filter_select').on('change', function() {
   var filtersa = '';
   var filtersb = '';
   $('#color_filter :selected').each(function(i, selected){
      if($(selected).val()!=='') {filtersa += $(selected).val()+',';}
   });
   filtersa = filtersa.slice(0,-1);
   if($('#price_filter option:selected').length > 1) {
      filtersb = 'priceFilter';
   }
   filters[0] = filtersa;
   filters[1] = filtersb;
   $grid.isotope();
});

/* Change product page (modal) contents to the product you are clicking on */
function injectModal(id) {
   for (var i = 0; i < json.length; i++){
      if (json[i].code_color == id){
         var sizes_divs = '';
         sizes = json[i].sizes;
         for(var size in sizes) {
            if(sizes[size].available === true) {
               sizes_divs += '<input id="size'+sizes[size].size+'" class="sizes-choose" type="radio" name="size" value="'+sizes[size].size+'"><label for="size'+sizes[size].size+'">'+sizes[size].size+'</label>';
            }
         }
         name = json[i].name;
         color_slug = json[i].color_slug;
         color = json[i].color;
         code_color = json[i].code_color;
         sale = json[i].on_sale === true ? 'sale' : '';
         sale_percentage = json[i].discount_percentage;
         regular_price = json[i].on_sale === true ? json[i].regular_price : '';
         actual_price = json[i].actual_price.split(",")[0];
         actual_price_cents = json[i].actual_price.split(",")[1];
         installments = json[i].installments;
         image = json[i].image;
         $('#product-modal').removeClass('sale').addClass(sale).attr('data-sale-percent', sale_percentage);
         $('#modal_prd_name').html(name);
         $('#modal_prd_img').attr("src",image).attr("alt",name);
         $('#modal_prd_color_img').attr("src",'/images/colors/'+color_slug+'.jpg');
         $('#modal_prd_color').html(color);
         $('#modal_prd_reg_price').html(regular_price);
         $('#modal_prd_act_price').html(actual_price+'<sup class="cents">'+actual_price_cents+'</sup>');
         $('#modal_prd_installments').html(installments);
         $('#modal_prd_sizes').html(sizes_divs);
         $('.add-cart').attr('data-id', code_color);
         break;
      }
   }
}

/* Add to cart function */
function addCart(id, size){
   for (var i = 0; i < json.length; i++){
      if (json[i].code_color == id){
         name = json[i].name;
         color = json[i].color;
         actual_price = json[i].actual_price;
         image = json[i].image;
         already = $('tr[data-id="'+id+'"]').filter(function(){return $(this).find('.size-column').text() === size;});
         if(already.length) {
            amount = parseInt(already.find('.amt-column').html(), 10);
            calcPrice();
            return already.find('.amt-column').html(amount+1);
         }
         $('.cart tbody').prepend('<tr data-id="'+id+'"><td><div class="cart-thumb"><img alt="'+name+'" src="'+image+'"></div></td><td><span class="bold">'+name+'</span><br>'+color+'</td><td class="size-column">'+size+'</td><td class="price-column">'+actual_price+'</td><td class="amt-column">1</td><td class="total-column">'+actual_price+'</td><td><i class="material-icons delete-product">delete</i></td>></tr>');
         calcPrice();
         break;
      }
   }
}

function calcPrice(){
   total = 0;
   $('.cart table > tbody  > tr').each(function() {
      amt = $(this).find('.amt-column').html();
      price = $(this).find('.price-column').html().replace(/\D/g,'')/100;
      total_product = amt*price;
      total += total_product;
      total_product = total_product.toFixed(2).toString().replace(/\./g, ',');
      if(total_product != isNaN) $(this).find('.total-column').html('R$ '+total_product);
   });
   total = total.toFixed(2).toString().replace(/\./g, ',');
   total = total != isNaN ? total : '0,00';
   $('.total-cart').html('R$ '+total);
}

function deleteProduct(line){
   line = $(line).closest('tr');
   line.children("td").each(function() {
      $(this).animate({padding:"0px 5px"}, 600).wrapInner("<div></div>").children("div").fadeThenSlideToggle("normal", function(){line.remove();calcPrice();});
   });

}

jQuery.fn.fadeInThenSlide = function(speed, callback) {
   if (this.is(":hidden")) {
      this.css('opacity', 0);
      return this.slideDown(speed).fadeTo(speed , 1, callback);
   }
};

jQuery.fn.fadeOutThenSlide = function(speed, callback) {
   if (!this.is(":hidden")) {
      return this.fadeTo(speed, 0).slideUp(speed, callback);
   }
};

jQuery.fn.fadeThenSlideToggle = function(speed, callback) {
   if (this.is(":hidden")) {
      this.css('opacity', 0);
      return this.stop().slideDown(speed).fadeTo(speed , 1, callback);
   } else {
      return this.fadeTo(speed, 0).slideUp(speed, callback);
   }
};
