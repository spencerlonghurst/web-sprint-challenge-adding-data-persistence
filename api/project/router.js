// build your `/api/projects` router here

const express = require("express");

const router = express.Router();

const Project = require("./model");

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body:
// [
//   {
//     "project_id":1,
//     "project_name":"bar",
//     "project_description":null,
//     "project_completed":false
//   },
// ]

router.get("/", (req, res, next) => {
  Project.getProject()
    .then((resp) => {
      resp.map((project) => {
        if (project.project_completed === 0) {
          project.project_completed = false;
        } else if (project.project_completed === 1) {
          project.project_completed = true;
        }
      });
      return res.json(resp);
    })
    .catch(next);
});

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body:
//   {
//     "project_id":1,
//     "project_name":"bar",
//     "project_description":null,
//     "project_completed":false
//   }

router.post("/", (req, res, next) => {
  Project.postProject(req.body)
    .then(prjct => {
      res.json({
        ...prjct,
        project_completed: Boolean(prjct.project_completed)
      })
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "It aint working man",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
