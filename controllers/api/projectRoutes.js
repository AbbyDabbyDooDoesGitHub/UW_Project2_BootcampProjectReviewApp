const router = require("express").Router();
const { Project } = require("../../models");

// CREATE a project
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET SUB PAGE VIEW ROUTE
router.get("/", (req, res) => {
  try {
    res.render("submission");
    
  } catch (err) {
    res.status(500).json(err);
    
  }
} )

// DELETE a project
router.delete("/:id", async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
