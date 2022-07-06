import makeAddUser from "./add-user";
import { userDb } from "../../data-access";

export const addUser = makeAddUser({ userDb });
