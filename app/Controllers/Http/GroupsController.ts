// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Group from 'App/Models/Group'
import CreatGroupValidator from 'App/Validators/CreatGroupValidator'

export default class GroupsController {
  public async store({ request, response }: HttpContextContract) {
    const groupPayload = await request.validate(CreatGroupValidator)
    const group = await Group.create(groupPayload)
    return response.created({ group })
  }
}
