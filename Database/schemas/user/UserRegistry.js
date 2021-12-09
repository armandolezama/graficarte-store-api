/**
 * NOTE: This implementarion will be replaced by simple object descriptor.
 * Instances from SchemaPrototype will be created inside DataBase constructor like this:
 * new Schema(descriptor, this)
 * Where: descriptor is the object down here, and "this" is database;
 */

const UserRegistry = function (userData){
  
  this.userRegistry = {
    name : '',
    lastName : '',
    phoneNumber : '',
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