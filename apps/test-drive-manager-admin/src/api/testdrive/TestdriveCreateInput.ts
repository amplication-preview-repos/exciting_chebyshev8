import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestdriveCreateInput = {
  attack_ran?: boolean | null;
  attack_results?: string | null;
  cleanup_ran?: boolean | null;
  cleanup_results?: string | null;
  created_users?: InputJsonValue;
  errors?: InputJsonValue;
  name: string;
  notes?: string | null;
  owner?: UserWhereUniqueInput | null;
  prep_ran?: boolean | null;
  prep_results?: string | null;
  startTime: Date;
};
