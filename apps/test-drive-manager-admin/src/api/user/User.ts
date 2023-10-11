import { JsonValue } from "type-fest";
import { Testdrive } from "../testdrive/Testdrive";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  testdrives?: Testdrive | null;
  timezone: string | null;
  updatedAt: Date;
  username: string;
};
