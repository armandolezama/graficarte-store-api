const store = (request, response) => {
  response.status = 200;
  response.send({
    products : [
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      },
      {
        productName: 'Último grito del arte', 
        productImage : './assets/paint-art.jpg',
        price : '50',
        desctiption : 'Pieza de arte abstracro elaborada en paint. Podrá adornar tu sala'
      }
    ]
  });
};

module.exports = store;