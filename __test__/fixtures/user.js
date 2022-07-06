import { faker } from "@faker-js/faker";
import Id from "../../src/domain/id";

export default function makeFakeUser(overrides) {
  const user = {
    id: Id.makeId(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: Date.now(),
    lastLogin: null,
    modifiedAt: Date.now(),
    active: false,
    deleted: false,
  };

  return {
    ...user,
    ...overrides,
  };
}
