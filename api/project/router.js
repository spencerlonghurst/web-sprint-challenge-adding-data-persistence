// build your `/api/projects` router here

/*
- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body:
[
  {
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
  },
]

- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body:
  {
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
  }
  */

const express = require('express');

const router = express.Router();

const Project = require('./model');


router.get('/', (req, res, next) => {
  Project.getProject()
    .then(resp => {
      if(resp.project_completed === 0) {
        return (resp.project_completed === false)
      } else {
        return (resp.project_completed === true)
      }
      res.json(resp);
    })
    .catch(next)
})


router.post('/api/projects', (req, res, next) => {

})







router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'It aint working man',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;