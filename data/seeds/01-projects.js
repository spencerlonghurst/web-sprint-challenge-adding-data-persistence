const projects = [
  {project_name: 'Finish the sprint', project_description: 'take the time to figure out these seed things and pass the MVP', project_completed: 0},
  {project_name: 'Finish the sprint please', project_description: 'pass the MVP', project_completed: 0},
  {project_name: 'Take 2', project_description: 'pass the MVP', project_completed: 1},
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
}