const UserRegistry = function (userData){
  
  this.userRegistry = {
    name : '',
    lastName : '',
    email : '',
    address : ''
  };
  
  for(const property in this.userRegistry){
    if(userData[`${property}`]) {
      this.userRegistry[`${property}`] = userData[`${property}`];
    };
  };

  this.getRegistry = function (){
    return this.userRegistry;
  }
};

module.exports = UserRegistry;