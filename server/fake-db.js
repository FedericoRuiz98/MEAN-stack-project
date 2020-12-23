const userRoles = require("./constants/userRoles");
const User = require("./models/user");

class FakeDb {
  constructor() {
    this.Users = [
      {
        username: "Federico Ruiz",
        birthDate: "05/07/98",
        email: "federicofruiz@hotmail.com",
        password: "ad23sfd",
        role : userRoles.Admin
      },
      {
        username: "Lautaro Ruiz",
        birthDate: "05/07/98",
        email: "lautaroaruiz@hotmail.com",
        password: "wg254gwesgq34",
        role : userRoles.User
      },
      {
        username: "Javier Ruiz",
        birthDate: "05/12/88",
        email: "jn_r88@hotmail.com",
        password: "134gqreg134",
        role : userRoles.User
      },
    ];
  }

  addUsers() {
    this.Users.forEach((user) => {
      const newUser = new User(user);
      newUser.save();
    });
  }

  seedDb() {
    this.cleanDb();
    this.addUsers();
  }

  async cleanDb() {
    await User.deleteMany({});
  }
}

module.exports = FakeDb;
