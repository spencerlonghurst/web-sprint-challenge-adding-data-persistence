const db = require('../../data/dbConfig');

function getProject () {
  return db('projects');
}

function getProjectById (id) {
  return db('projects').where('project_id', id).first()
}

async function postProject (body) {
   const [project_id] = await db('projects').insert(body)
    return getProjectById(project_id)
}

module.exports = {
  getProject,
  postProject,
};