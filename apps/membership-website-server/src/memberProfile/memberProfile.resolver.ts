import * as graphql from "@nestjs/graphql";
import { MemberProfileResolverBase } from "./base/memberProfile.resolver.base";
import { MemberProfile } from "./base/MemberProfile";
import { MemberProfileService } from "./memberProfile.service";

@graphql.Resolver(() => MemberProfile)
export class MemberProfileResolver extends MemberProfileResolverBase {
  constructor(protected readonly service: MemberProfileService) {
    super(service);
  }
}
