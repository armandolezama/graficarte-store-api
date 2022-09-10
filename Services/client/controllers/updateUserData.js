const updateUserData = dataBase => async (request, response) => {
  const {
    name,
    lastName,
    phoneNumber,
    email,
    address
  } = request.body
  
  dataBase.collection = 'usersRegistry'

  dataBase.operator = '$set'

  dataBase.newDocs = {
    name,
    lastName,
    phoneNumber,
    email,
    address
  } ;

  dataBase.filter = { email }

  try {
    const result = await dataBase.updateDocs()
    console.log(result)
    
  } catch (error) {
    response.send(error)
  }
  
}

module.exports = updateUserData;