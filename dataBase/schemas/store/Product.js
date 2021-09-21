const Product = function(product) {
  for(const property in this.productData){
    if(product[`${property}`]){
      this.productData[`${property}`] = product[`${property}`];
    };
  };

  this.productData = {
    productName : '',
    productId : '',
    price: '',
  }

  this.getProductData = function() {
    return this.productData;
  }
};