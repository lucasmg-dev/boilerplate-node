import makeFakeUser from "../../../__test__/fixtures/user";
import makeUser from "./";

describe("User", () => {
  it("must have an username", () => {
    const user = makeFakeUser({ username: null });
    expect(() => makeUser(user)).toThrow("User must have an username.");
  });
  it("Username must be longer than 5 characters.", () => {
    const user = makeFakeUser({ username: "asd" });
    expect(() => makeUser(user)).toThrow(
      "Username must be longer than 5 characters."
    );
  });
  it("can have an id", () => {
    const user = makeFakeUser({ id: "invalid" });
    expect(() => makeUser(user)).toThrow("User must have a valid id.");
    const noId = makeFakeUser({ id: undefined });
    expect(() => makeUser(noId)).not.toThrow();
  });
  it("can create an id", () => {
    const noId = makeFakeUser({ id: undefined });
    const user = makeUser(noId);
    expect(user.getId()).toBeDefined();
  });
});
