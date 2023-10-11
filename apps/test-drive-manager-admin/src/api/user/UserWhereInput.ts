import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TestdriveWhereUniqueInput } from "../testdrive/TestdriveWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  testdrives?: TestdriveWhereUniqueInput;
  timezone?: StringNullableFilter;
  username?: StringFilter;
};
