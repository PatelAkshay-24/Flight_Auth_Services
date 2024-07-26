const { where } = require("sequelize");
const { User } = require("../models/index");

class UserRepository {
  //======================create========================//
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in user repository");
      throw { error };
    }
  }

  //=====================Delete=====================//
  async destroy(userId) {
    try {
      const user = await User.destroy({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in user repository");
      throw { error };
    }
  }
}
module.exports = UserRepository;
