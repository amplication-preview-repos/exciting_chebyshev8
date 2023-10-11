import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TestdriveWhereInput = {
  attack_ran?: BooleanNullableFilter;
  attack_results?: StringNullableFilter;
  cleanup_ran?: BooleanNullableFilter;
  cleanup_results?: StringNullableFilter;
  created_users?: JsonFilter;
  errors?: JsonFilter;
  id?: StringFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  prep_ran?: BooleanNullableFilter;
  prep_results?: StringNullableFilter;
  startTime?: DateTimeFilter;
};
