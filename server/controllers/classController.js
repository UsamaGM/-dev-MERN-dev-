import Class from "../models/classModel.js";

async function getClassById(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad Request! No id provided" });
  }

  try {
    const classResponse = await Class.findById(id);
    if (!classResponse) {
      return res.status(404).json({ message: "Class not found" });
    }
    return res
      .status(200)
      .json({ message: "Class found", data: classResponse });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find class" });
  }
}

async function getTeacherClasses(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const classList = Class.find({ teacher: id }) || null;
    if (classList)
      return res.status(404).json({ message: "No classes found for teacher" });
    return res.status(200).json({ message: "Found quizzes", data: classList });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch teacher classes" });
  }
}

async function getStudentClasses(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const classList = Class.where({ students: id }) || null;
    if (classList)
      return res.status(404).json({ message: "No classes found for student" });
    return res.status(200).json({ message: "Found quizzes", data: classList });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch teacher classes" });
  }
}

async function createNewClass(req, res) {
  const { name, teacher, students } = req.body;

  try {
    const classResponse = await Class.create({
      name,
      teacher,
      students,
    });

    return res
      .status(200)
      .json({ message: "Craeted a new Class", data: classResponse });
  } catch (error) {
    return res.status(500).json({ message: "Failed to craete Class" });
  }
}

export { getClassById, createNewClass, getTeacherClasses, getStudentClasses };
