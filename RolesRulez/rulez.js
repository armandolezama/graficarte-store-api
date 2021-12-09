/**
 * TO-DO: Create roles rulez
 */

modules.exports = {
  'admin' : {
    can : {
      get: {
        'admin' : { 
          own: true,
          others: false 
        },
        'client' : { 
          own : true,
          others: true 
        },
        'products' : { 
          own : true,
          others: true 
        },
        'orders'  : { 
          own : true,
          others: true 
        },
        'dealers' : { 
          own : true,
          others: true 
        }
      },
      create: {
        'admin' : { 
          own: true,
          others: false 
        },
        'client' : { 
          own : true,
          others: true 
        },
        'products' : { 
          own : true,
          others: true 
        },
        'orders'  : { 
          own : true,
          others: true 
        },
        'dealers' : { 
          own : true,
          others: true 
        }
      },
      update: {
        'admin' : { 
          own: true,
          others: false 
        },
        'client' : { 
          own : true,
          others: true 
        },
        'products' : { 
          own : true,
          others: true 
        },
        'orders'  : { 
          own : true,
          others: true 
        },
        'dealers' : { 
          own : true,
          others: true 
        }
      },
      delete: {
        'admin' : { 
          own: true,
          others: false 
        },
        'client' : { 
          own : true,
          others: true 
        },
        'products' : { 
          own : true,
          others: true 
        },
        'orders'  : { 
          own : true,
          others: true 
        },
        'dealers' : { 
          own : true,
          others: true 
        }
      },
    }
  },
  'client' : {
    can : {
      get: {
        'admin' : { 
          own: false,
          others: false 
        },
        'client' : { 
          own: true,
          others: false 
        },
        'products' : { 
          own: true,
          others: false 
        },
        'orders' : { 
          own: true,
          others: false 
        },
        'dealers' : { 
          own: false,
          others: false 
        }
      },
      create: {
        'admin' : { 
          own: false,
          others: false 
        },
        'client' : { 
          own: false,
          others: false 
        },
        'products' : { 
          own: false,
          others: false 
        },
        'orders' : { 
          own: false,
          others: false 
        },
        'dealers' : { 
          own: false,
          others: false 
        }
      },
      update: {
        'admin' : { 
          own: false,
          others: false 
        },
        'client' : { 
          own: false,
          others: false 
        },
        'products' : { 
          own: false,
          others: false 
        },
        'orders'  : { 
          own: false,
          others: false 
        },
        'dealers' : { 
          own: false,
          others: false 
        }
      },
      delete: {
        'admin' : { 
          own: false,
          others: false 
        },
        'client' : { 
          own: false,
          others: false 
        },
        'products' : { 
          own: false,
          others: false 
        },
        'orders' : { 
          own: false,
          others: false 
        },
        'dealers' : { 
          own: false,
          others: false 
        }
      }
    }
  }
};