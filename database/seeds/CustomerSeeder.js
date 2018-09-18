'use strict'

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CustomerSeeder {
  async run () {  
    const usersArray = await Factory
      .model('App/Models/Customer')
      .create()
  }
}

module.exports = CustomerSeeder
