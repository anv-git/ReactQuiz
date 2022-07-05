import questions from "../questionsData"

export default (req, res) => {

    res.status(200).json(questions[0])
  }
  