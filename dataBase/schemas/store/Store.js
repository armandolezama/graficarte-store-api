
const Store = function (storeData){
  for(const product of storeData){
    this.store = [...this.store, new Product(product)]
  };

  this.store = []

  this.getStore = function() {
    return this.store;
  }
};