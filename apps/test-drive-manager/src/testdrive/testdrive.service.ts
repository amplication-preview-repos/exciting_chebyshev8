import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestdriveServiceBase } from "./base/testdrive.service.base";

@Injectable()
export class TestdriveService extends TestdriveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
