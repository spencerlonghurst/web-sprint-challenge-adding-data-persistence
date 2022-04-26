const projects = [
  {project_name: 'Finish the sprint', project_description: 'take the time to figure out these seed things and pass the MVP', project_completed: false}
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
}