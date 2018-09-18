'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Customers
Route.get('customers', 'CustomerController.index')
Route.get('customers/:id', 'CustomerController.show').middleware([
  'findCustomer'
])
Route.post('customers', 'CustomerController.store')
Route.patch('customers/:id', 'CustomerController.update').middleware([
  'findCustomer'
])
Route.delete('customers/:id', 'CustomerController.delete').middleware([
  'findCustomer'
])

/// projects
Route.get('projects', 'ProjectController.index')
Route.get('projects/:id', 'ProjectController.show').middleware(['findProject'])
Route.post('projects', 'ProjectController.store')
Route.patch('projects/:id', 'ProjectController.update').middleware([
  'findProject'
])
Route.delete('projects/:id', 'ProjectController.delete').middleware([
  'findProject'
])

// tasks
Route.get('tasks', 'TaskController.index')
Route.get('tasks/:id', 'TaskController.show').middleware(['findTask'])
Route.post('tasks', 'TaskController.store')
Route.patch('tasks/:id', 'TaskController.update').middleware(['findTask'])
Route.delete('tasks/:id', 'TaskController.delete').middleware(['findTask'])
  
