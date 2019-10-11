/**
 * EmployeeDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    city: {
        type: 'string'
    },

    postalcode: {
        type: 'string'
    },

    details: {
        model: 'employee'
    }

  },

};

