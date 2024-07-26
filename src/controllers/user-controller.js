const UserService = require("..//services/user-services");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: user,
      success: true,
      message: "user is create ",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "user is not create ",
      error: { error },
    });
  }
};

//======================Delete===========================//
const destroy = async (req, res) => {
  try {
    const user = await userService.destroy(req.params.id);
    return res.status(200).json({
      data: user,
      success: true,
      message: "userv is successfully deleted",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "user is not deleted",
      error: { error },
    });
  }
};

module.exports = {
  create,
  destroy
};
