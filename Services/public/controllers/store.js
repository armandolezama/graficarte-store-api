const store = dataBase => async (request, response) => {
  dataBase.collection = 'products'

  try {
    const products = await dataBase.getCollection();
    response.send(products.operation)
  } catch (error) {
    response.send(error)
  }
};

module.exports = store;