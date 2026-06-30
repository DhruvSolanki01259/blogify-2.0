import User from "@/lib/model/user.model";
import { registerUserDataType, signInUserDataType } from "./auth.types";
import bcrypt from "bcryptjs";

export const registerUser = async (DataObject: registerUserDataType) => {
  const { name, email, password } = DataObject;

  const user = await User.create({ name, email, password });

  return user;
};

export const signInUser = async (DataObject: signInUserDataType) => {
  const { email, password } = DataObject;

  const user = await User.findOne({ email });
  const verifiedUser = bcrypt.compare(password, user.password);

  return verifiedUser;
};
