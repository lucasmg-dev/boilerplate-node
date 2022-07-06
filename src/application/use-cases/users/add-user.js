import makeUser from "../domain/user";

export default function makeAddUser({ userDb }) {
  return async function addUser(userInfo) {
    const user = makeUser(userInfo);
    const exists = await userDb.findByHash({ hash: user.getHash() });
    if (exists) {
      return exists;
    }

    return userDb.insert({
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
      createdAt: new Date.now(),
      lastLogin: null,
      modifiedAt: new Date.now(),
      active: false,
      deleted: false,
    });
  };
}
