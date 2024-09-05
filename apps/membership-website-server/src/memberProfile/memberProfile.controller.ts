import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MemberProfileService } from "./memberProfile.service";
import { MemberProfileControllerBase } from "./base/memberProfile.controller.base";

@swagger.ApiTags("memberProfiles")
@common.Controller("memberProfiles")
export class MemberProfileController extends MemberProfileControllerBase {
  constructor(protected readonly service: MemberProfileService) {
    super(service);
  }
}
