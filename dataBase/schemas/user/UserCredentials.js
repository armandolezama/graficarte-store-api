const UserCredentials = function (userData) {

  this.userCredentials = {
    user : '',
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