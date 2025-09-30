import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize"; // ✅ bu yerda import qilindi
import { SocialMediaService } from "./social-media.service";
import { SocialMediaController } from "./social-media.controller";
import { SocialMedia } from "./models/social-media.model";

@Module({
  imports: [SequelizeModule.forFeature([SocialMedia])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService],
})
export class SocialMediaModule {}
