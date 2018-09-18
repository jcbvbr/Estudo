'use strict'
const Customer = use('App/Models/Customer')

class CustomerController {
  async index ({ request, response }) {

    const { addProject = false, addTask = false } = request.get()

    //const customers = await Customer.all()
    const query = Customer.query()

    if (addProject === 'true') {
      query.with('projects', projectQuery => {
        projectQuery.where('completed', false)
        if (addTask === 'true') {
          projectQuery.with('tasks')
        }
      })
    }
    const customers = await query.fetch()

    response.status(200).json({
      message: 'Lista de Customers',
      data: customers  
    })
  }  
  
  async store ({ request, response, params: { id } }) {
    const {name, description} = request.post()

    const customer = await Customer.create({ name, description })

    response.status(201).json({
      message: 'Customer adicionado com sucesso.',
      data: customer
    })
  }

  async show ({ request, response, params: { id } }) {

    const customer = request.post().customer
        
    response.status(200).json({
      message: `Customer ${id} - ${customer.name} encontrato`,
      data: customer 
    })    
  }
  
  async update ({ request, response, params: { id } }) {
    
    const { name, description, customer } = request.post()
    
    customer.name = name
    customer.description = description

    await customer.save()

    response.status(200).json({
      message: 'Customer atualizado com sucesso.',
      data: customer 
    })    
  }

  async delete({ request, response, params: { id } }) {
    const customer = request.post().customer

    await customer.delete()

    response.status(200).json({
      message: 'Customer excluido com sucesso.',
      id
    })
  }
}

module.exports = CustomerController
