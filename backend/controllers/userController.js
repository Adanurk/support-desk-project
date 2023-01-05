// @desc register a new user
// @route /api/users
// @access Public
export const registerUser = (req, res) => {
  res.send("Register Route");
};

// @desc login a user
// @route /api/users/login
// @access Public
export const loginUser = (req, res) => {
  res.send("login Route");
};
