import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  testdrivesId?: SortOrder;
  timezone?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
