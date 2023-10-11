import { Testdrive as TTestdrive } from "../api/testdrive/Testdrive";

export const TESTDRIVE_TITLE_FIELD = "name";

export const TestdriveTitle = (record: TTestdrive): string => {
  return record.name?.toString() || String(record.id);
};
