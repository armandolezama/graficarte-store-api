const UserCredentials = function (userData) {

  this.userCredentials = {
    email: '',
    password : ''
  };
  
  for(const property in this.userCredentials){
    if(userData[`${property}`]) {
      this.userCredentials[`${property}`] = userData[`${property}`];
    };
  };
  
  this.getCredentials = function(){
    return this.userCredentials;
  };
};

module.exports = UserCredentials;