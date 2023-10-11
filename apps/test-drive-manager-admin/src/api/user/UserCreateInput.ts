import { InputJsonValue } from "../../types";
import { TestdriveWhereUniqueInput } from "../testdrive/TestdriveWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  testdrives?: TestdriveWhereUniqueInput | null;
  timezone?: string | null;
  username: string;
};
