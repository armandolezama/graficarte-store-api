const UserData = function (userData){
  for(const property in this.userRegistry){
    if(userData[`${property}`]) {
      this.userRegistry[`${property}`] = userData[`${property}`];
    };
  };

  this.userRegistry = {
    name : '',
    lastName : '',
    email : '',
    address : ''
  };

  this.getRegistry = function (){
    return this.userRegistry;
  }
};

module.exports = UserData;