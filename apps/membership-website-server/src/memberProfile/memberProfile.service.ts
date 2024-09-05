import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MemberProfileServiceBase } from "./base/memberProfile.service.base";

@Injectable()
export class MemberProfileService extends MemberProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
