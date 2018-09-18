'use strict'

'use strict'

const Project = use('App/Models/Project')
const Database = use('Database')

class ProjectController {
  async index({ response }) {
  //const projects = await Project.all()
  const projects = await Project.query()
      .with('customer')
      .with('tasks')
      .fetch()

    response.status(200).json({
      message: 'Lista de projetos.',
      data: projects
    })
  }

  async store({ request, response }) {
    const { name, description, customer_id } = request.post()

    const project = await Project.create({ name, description, customer_id })

    response.status(201).json({
      message: 'Projeto adicionado com sucesso.',
      data: project
    })
  }

  async show({ request, response }) {
    const project = request.post().project
    response.status(200).json({
      message: `Projeto ${project.id} - ${project.name} encontrado.`,
      data: project
    })
  }

  async update({ request, response }) {
    const { name, description, completed, customer_id, project } = request.post()

    project.name = name
    project.description = description
    project.customer_id = customer_id
    project.completed = completed
    
    await project.save()

    response.status(200).json({
      message: 'Projeto atualizado com sucesso.',
      data: project
    })
  }

  async delete({ request, response, params: { id } }) {
    const { project } = request.post()

    await project.delete()

    response.status(200).json({
      message: 'Projeto excluido com sucesso.',
      id
    })
  }
}

module.exports = ProjectController
