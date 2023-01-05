// @desc register a new user
// @route /api/users
// @access Public
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  res.send("Register Route");
};

// @desc login a user
// @route /api/users/login
// @access Public
export const loginUser = async (req, res) => {
  res.send("login Route");
};
