import Quiz from "../models/quizModel.js";

async function getQuizById(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad Request! No id provided" });
  }

  try {
    const quizResponse = await Quiz.findById(id);
    if (!quizResponse) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json({ message: "Quiz found", data: quizResponse });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find quiz" });
  }
}

async function createNewQuiz(req, res) {
  const { name, questions, result } = req.body;

  try {
    const quizResponse = await Quiz.create({
      name,
      questions,
      result,
    });

    return res.status(200).json({
      message: "Craeted a new Quiz",
      data: quizResponse,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to craete Quiz" });
  }
}
async function getClassQuizes(req, res) {
  try {
    const quizResponse = await Quiz.find();
    if (!quizResponse) {
      return res.status(404).json({ message: "No quiz found" });
    }
    return res.status(200).json({ message: "Quizes Found" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find any quiz" });
  }
}

async function deleteQuiz(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Bad Request! No id provided" });
  }

  try {
    const quizResponse = await Quiz.findByIdAndDelete(id);
    if (!quizResponse) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json({ message: "Quiz deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to find quiz" });
  }
}

export { getQuizById, createNewQuiz, deleteQuiz, getClassQuizes };
