import { SortOrder } from "../../util/SortOrder";

export type TestdriveOrderByInput = {
  attack_ran?: SortOrder;
  attack_results?: SortOrder;
  cleanup_ran?: SortOrder;
  cleanup_results?: SortOrder;
  createdAt?: SortOrder;
  created_users?: SortOrder;
  errors?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  id?: SortOrder;
  prep_ran?: SortOrder;
  prep_results?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
