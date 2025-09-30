import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CardsModel } from "./models/card.model";
import { CardsService } from "./cards.service";
import { CardsController } from "./cards.controller";

@Module({
  imports: [SequelizeModule.forFeature([CardsModel])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
