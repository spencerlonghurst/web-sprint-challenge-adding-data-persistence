const db = require('../../data/dbConfig');

function getTask () {
  return db('tasks')
    .leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    .select("task_id", "task_description", "task_notes", "task_completed", "project_name", "project_description")
}

function getTaskById (id) {
  return db('tasks').where('task_id', id).first()
}

async function postTask (body) {
  const [task_id] = await db('tasks').insert(body)
    return getTaskById(task_id)
}

module.exports = {
  getTask,
  postTask,
};