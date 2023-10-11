import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestdriveModuleBase } from "./base/testdrive.module.base";
import { TestdriveService } from "./testdrive.service";
import { TestdriveController } from "./testdrive.controller";
import { TestdriveResolver } from "./testdrive.resolver";

@Module({
  imports: [TestdriveModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestdriveController],
  providers: [TestdriveService, TestdriveResolver],
  exports: [TestdriveService],
})
export class TestdriveModule {}
