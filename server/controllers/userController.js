import User from "../models/userModel";

/**getUser - get User by providing Id
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - Returns response with status 200 if found user otherwise 404. Status 500 if server faces error
 */
async function getUser(req, res) {
  if (req.params.id) {
    try {
      const user = await User.find({ id: req.params.id });
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.status(200).json({ message: "User found.", data: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error! Failed to find User" });
    }
  }
}

/**createUser - get
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - Returns response with status 200 if found user otherwise 404. Status 500 if server faces error
 */
async function createUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return response.status(400).json({ message: "Invalid data provided." });
  }

  try {
    const newUser = await User.create({ name, email, password });
    return res
      .status(200)
      .json({ message: "Successfully created User!", data: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error! Failed to create new User" });
  }
}

export { getUser, createUser };
/**Class
 *
 */
