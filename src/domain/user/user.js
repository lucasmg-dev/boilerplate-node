export default function buildMakeUser({ Id, Email, md5 }) {
  return function makeUser({
    id = Id.makeId(),
    username,
    email,
    password,
    createdAt = Date.now(),
    lastLogin,
    modifiedAt,
    active = false,
    deleted = false,
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("User must have a valid id.");
    }
    if (!username) {
      throw new Error("User must have an username.");
    }
    if (username.length < 5) {
      throw new Error("Username must be longer than 5 characters.");
    }
    if (!email) {
      throw new Error("User must have an email.");
    }
    if (!Email.isValidEmail(email)) {
      throw new Error("User must contain a valid email");
    }
    if (!password) {
      throw new Error("User must have a password.");
    }
    if (password.length < 8) {
      throw new Error("Password must be longer than 8 characters.");
    }

    let hash;

    return Object.freeze({
      getUsername: () => username,
      getEmail: () => email,
      getPassword: () => password,
      getCreatedAt: () => createdAt,
      getHash: () => hash || (hash = makeHash()),
      getId: () => id,
      getModifiedAt: () => modifiedAt,
      isDeleted: () => deleted,
      isActive: () => active,
      markDeleted: () => {
        deleted = true;
      },
      activate: () => {
        active = true;
      },
      deactivate: () => {
        active = false;
      },
    });

    function makeHash() {
      return md5(username + email);
    }
  };
}
