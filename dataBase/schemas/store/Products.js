const Products = function(product) {

  this.productData = {
    productName : '',
    productId : '',
    price: '',
  };
  
  for(const property in this.productData){
    if(product[`${property}`]){
      this.productData[`${property}`] = product[`${property}`];
    };
  };

  this.getProductData = function() {
    return this.productData;
  };
};

module.exports = Products;