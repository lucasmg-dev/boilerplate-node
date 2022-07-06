import crypto from "crypto";
import Id from "../Id";
import buildMakeUser from "./user";
import Email from "../email";

const makeUser = buildMakeUser({ Id, md5, Email });

function md5(text) {
  return crypto.createHash("md5").update(text, "utf-8").digest("hex");
}

export default makeUser;
