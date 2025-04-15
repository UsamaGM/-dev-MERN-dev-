import Presentation from "../models/presentationModel.js";
import Quiz from "../models/quizModel.js";

async function getPresentationById(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad Request! No id provided" });
  }

  try {
    const presentationResponse = await Presentation.findById(id);
    if (!presentationResponse) {
      return res.status(404).json({ message: "Presentation not found" });
    }
    return res
      .status(200)
      .json({ message: "Presentation found", data: presentationResponse });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find presentation" });
  }
}

async function createNewPresentation(req, res) {
  const { title, description, course, grade, peersGrade } = req.body;

  try {
    const presentationResponse = await Presentation.create({
      title,
      description,
      course,
      grade,
      peersGrade,
    });

    return res.status(200).json({
      message: "Craeted a new Presentation",
      data: presentationResponse,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to craete Presentation" });
  }
}
async function getClassPresentations(req, res) {
  try {
    const presentationResponse = await Presentation.find();
    if (!presentationResponse) {
      return res.status(404).json({ message: "No presentation found" });
    }
    return res.status(200).json({ message: "Presentations Found" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find any presentation" });
  }
}
async function deletePresentation(req, res) {}

export { getPresentationById, createNewPresentation, deletePresentation, getClassPresentations };
