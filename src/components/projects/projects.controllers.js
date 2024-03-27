import Projects from "../../models/projects.models.js";

const newProject = async (req, res, next) => {
  try {
    const newProject = req.body;
    await Projects.create(newProject);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Projects.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByPk(id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedProject = await Projects.update(body, {
      where: { id },
    });
    res.status(204).json(updatedProject);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Projects.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const uploadLogo = async (req, res, next) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const imageUrl = `${process.env.APP_URL}/imgLogo/${file.filename}`;
    await Projects.update({ imgLogo: imageUrl }, { where: { id } });
    res.status(201).end();
  } catch (error) {
    next(error);
  }
}

export { newProject, getAllProjects, getProjectById, updateProject, deleteProject, uploadLogo };