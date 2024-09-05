/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MemberProfile } from "./MemberProfile";
import { MemberProfileCountArgs } from "./MemberProfileCountArgs";
import { MemberProfileFindManyArgs } from "./MemberProfileFindManyArgs";
import { MemberProfileFindUniqueArgs } from "./MemberProfileFindUniqueArgs";
import { CreateMemberProfileArgs } from "./CreateMemberProfileArgs";
import { UpdateMemberProfileArgs } from "./UpdateMemberProfileArgs";
import { DeleteMemberProfileArgs } from "./DeleteMemberProfileArgs";
import { PictureFindManyArgs } from "../../picture/base/PictureFindManyArgs";
import { Picture } from "../../picture/base/Picture";
import { User } from "../../user/base/User";
import { MemberProfileService } from "../memberProfile.service";
@graphql.Resolver(() => MemberProfile)
export class MemberProfileResolverBase {
  constructor(protected readonly service: MemberProfileService) {}

  async _memberProfilesMeta(
    @graphql.Args() args: MemberProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MemberProfile])
  async memberProfiles(
    @graphql.Args() args: MemberProfileFindManyArgs
  ): Promise<MemberProfile[]> {
    return this.service.memberProfiles(args);
  }

  @graphql.Query(() => MemberProfile, { nullable: true })
  async memberProfile(
    @graphql.Args() args: MemberProfileFindUniqueArgs
  ): Promise<MemberProfile | null> {
    const result = await this.service.memberProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MemberProfile)
  async createMemberProfile(
    @graphql.Args() args: CreateMemberProfileArgs
  ): Promise<MemberProfile> {
    return await this.service.createMemberProfile({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => MemberProfile)
  async updateMemberProfile(
    @graphql.Args() args: UpdateMemberProfileArgs
  ): Promise<MemberProfile | null> {
    try {
      return await this.service.updateMemberProfile({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MemberProfile)
  async deleteMemberProfile(
    @graphql.Args() args: DeleteMemberProfileArgs
  ): Promise<MemberProfile | null> {
    try {
      return await this.service.deleteMemberProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Picture], { name: "pictures" })
  async findPictures(
    @graphql.Parent() parent: MemberProfile,
    @graphql.Args() args: PictureFindManyArgs
  ): Promise<Picture[]> {
    const results = await this.service.findPictures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: MemberProfile): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}