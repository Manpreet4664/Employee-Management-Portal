module.exports = {

  attributes: {

    firstName: {
        type: 'string',
        required: true
    },

    lastName: {
        type: 'string', 
        required: true
    },

    email: {
        type: 'string',
        unique: true, 
        required: true
    },

    employeedetails:{
        collection: 'employeedetails',
        via: 'details'
    }

  },

};

