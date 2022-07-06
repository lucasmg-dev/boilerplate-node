import connex from "../../infra/database/postgres";
import makeUserDb from "./user";

export const userDb = makeUserDb(connex());
