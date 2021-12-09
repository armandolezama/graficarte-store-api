const ServiceBuilder = function () {
  this.data = {};
  this.response = {};
  

  return async (request, response) => {
    this.data = this.getData(request.body);
    this.response = this.getResponse(this.data);
    this.setResponse(response, this.response)
  };
};

module.exports = ServiceBuilder;