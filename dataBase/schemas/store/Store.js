
const Store = function (storeData){

  this.store = []
  
  for(const product of storeData){
    this.store = [...this.store, new Product(product)]
  };

  this.getStore = function() {
    return this.store;
  }
};

module.exports = Store;