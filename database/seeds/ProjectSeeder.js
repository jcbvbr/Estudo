'use strict'

/*
|--------------------------------------------------------------------------
| ProjectSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class ProjectSeeder {
  async run () {
    const usersArray = await Factory
      .model('App/Models/Project')
      .create()
  }
}

module.exports = ProjectSeeder
