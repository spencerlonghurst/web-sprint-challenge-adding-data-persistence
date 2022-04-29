const db = require('../../data/dbConfig');

async function getResource () {
  return db('resources');
}

function getResourceById (id) {
  return db('resources').where('resource_id', id).first()
}

async function postResource (body) {
  const [project_id] = await db('resources').insert(body)
  return getResourceById(project_id)
}


module.exports = {
  getResource,
  postResource,
};