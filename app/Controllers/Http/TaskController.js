'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index({ response }) {
  //const tasks = await Task.all()
  const tasks = await Task.query()
      .with('project')
      .fetch()

    response.status(200).json({
      message: 'Lista de Tasks',
      data: tasks
    })
  }

  async store({ request, response }) {
    const { name, description, project_id } = request.post()

    const task = await Task.create({ name, description, project_id })

    response.status(201).json({
      message: 'Task adicionada com sucesso.',
      data: task
    })
  }

  async show({ request, response }) {
    const task = request.post().task
    response.status(200).json({
      message: `Projeto ${task.id} - ${task.name} encontrado.`,
      data: task
    })
  }

  async update({ request, response, params: { id } }) {
    const { name, description, project_id, task } = request.post()

    task.name = name
    task.description = description
    task.project_id = project_id

    await task.save()

    response.status(200).json({
      message: 'Task atualizada com sucesso.',
      data: task
    })
  }

  async delete({ request, response, params: { id } }) {
    const { task } = request.post()

    await task.delete()

    response.status(200).json({
      message: 'Task excluida com sucesso.',
      id
    })
  }
}

module.exports = TaskController
