  import { Module } from "@nestjs/common";
  import { SequelizeModule } from "@nestjs/sequelize";
  import { ConfigModule } from "@nestjs/config";

  // import { Card } from "./cards/cards.module";
  import { RecipientSocial } from "./recipient-social/models/recipient-social.model";
  import { SocialMedia } from "./social-media/models/social-media.model";
  import { Resipient } from "./resipient/models/resipient.model";

  import { CardsController } from "./cards/cards.controller";
  import { RecipientSocialController } from "./recipient-social/recipient-social.controller";
  import { SocialMediaController } from "./social-media/social-media.controller";
  import { ResipientController } from "./resipient/resipient.controller";

  @Module({
    imports: [
      ConfigModule.forRoot({
        envFilePath: ".env",
        isGlobal: true,
      }),

      SequelizeModule.forRoot({
        dialect: "postgres",
        host: process.env.PG_HOST,
        port: Number(process.env.PG_PORT),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        // models: [Card, RecipientSocial, SocialMedia, Resipient],
        autoLoadModels: true,
        logging: false,
        sync: { alter: true },
      }),
    ],
    controllers: [
      CardsController,
      RecipientSocialController,
      SocialMediaController,
      ResipientController,
    ],
    providers: [],
  })
  export class AppModule {}
