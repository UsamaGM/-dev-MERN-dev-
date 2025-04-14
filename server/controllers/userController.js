async function getUser(req, res) {
  return res.status(404).json({ message: "Failed to route" });
}

async function createUser(req, res) {
  return res.status(200).json({ message: "Successfully created a user" });
}

export { getUser, createUser };
/**Class
 *
 */
