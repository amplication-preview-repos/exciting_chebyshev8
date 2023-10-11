import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Testdrive = {
  attack_ran: boolean | null;
  attack_results: string | null;
  cleanup_ran: boolean | null;
  cleanup_results: string | null;
  createdAt: Date;
  created_users: JsonValue;
  errors: JsonValue;
  id: string;
  name: string;
  notes: string | null;
  owner?: User | null;
  prep_ran: boolean | null;
  prep_results: string | null;
  startTime: Date;
  updatedAt: Date;
};
