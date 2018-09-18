'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

 const Factory = use('Factory')

/**
  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username()
    }
  })
*/

Factory.blueprint('App/Models/Customer', (faker, index, data) => {
  const defaultValue = {
    name: faker.name(),
    description: faker.sentence()
  }
  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Project', (faker, index, data) => {
  const defaultValue = {
    name: faker.name(),
    description: faker.sentence(),
    completed: false,
    customer_id: async () => {
      return (await Factory.model('App/Models/Customer').create()).id
    }
  }
  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Task', (faker) => {
  return {
    name: faker.name(),
    description: faker.sentence(),
    project_id: async () => {
      return (await Factory.model('App/Models/Project').create()).id
    }
  }
})
