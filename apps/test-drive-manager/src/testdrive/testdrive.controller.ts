import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestdriveService } from "./testdrive.service";
import { TestdriveControllerBase } from "./base/testdrive.controller.base";

@swagger.ApiTags("testdrives")
@common.Controller("testdrives")
export class TestdriveController extends TestdriveControllerBase {
  constructor(
    protected readonly service: TestdriveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
