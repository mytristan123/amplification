import { Module } from "@nestjs/common";
import { MemberProfileModuleBase } from "./base/memberProfile.module.base";
import { MemberProfileService } from "./memberProfile.service";
import { MemberProfileController } from "./memberProfile.controller";
import { MemberProfileResolver } from "./memberProfile.resolver";

@Module({
  imports: [MemberProfileModuleBase],
  controllers: [MemberProfileController],
  providers: [MemberProfileService, MemberProfileResolver],
  exports: [MemberProfileService],
})
export class MemberProfileModule {}
