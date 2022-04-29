const express = require("express");

const router = express.Router();

const Task = require("./model");

router.get('/', async (req, res, next) => {
  Task.getTask()
  .then((resp) => {
    resp.map((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else if (task.task_completed === 1) {
        task.task_completed = true;
      }
    });
    return res.json(resp);
  })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Task.postTask(req.body)
    .then(tsk => {
      res.json({
        ...tsk,
        task_completed: Boolean(tsk.task_completed)
      })
    })
    .catch(next)
})





router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "It aint working man",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;