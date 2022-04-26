const db = require('../../data/dbConfig');

async function getProject () {
  return db('projects');
}

async function postProject (body) { // eslint-disable-line

}

module.exports = {
  getProject,
  postProject,
};