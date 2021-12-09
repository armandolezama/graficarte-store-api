/**
 * TO-DO: Implement class builder for isolated data model. This class should validate new data, 
 * incomming data, save descriptor and use it for validation
 */

const SchemaDataBuilder = function (dataDescriptor){
  
  this.field = '';
  this.type = '';
  this.unique = false;
  this.defaultValue = () => {};
  this.validValues = []

  this.validate = function(){};
  this.setDescriptor = function(){};

  this.setDescriptor(dataDescriptor);
};