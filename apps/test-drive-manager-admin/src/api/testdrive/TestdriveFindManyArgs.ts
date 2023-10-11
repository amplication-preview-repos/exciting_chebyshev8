import { TestdriveWhereInput } from "./TestdriveWhereInput";
import { TestdriveOrderByInput } from "./TestdriveOrderByInput";

export type TestdriveFindManyArgs = {
  where?: TestdriveWhereInput;
  orderBy?: Array<TestdriveOrderByInput>;
  skip?: number;
  take?: number;
};
