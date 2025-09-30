import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CardsModel } from "./models/card.model";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(CardsModel)
    private readonly cardsModel: typeof CardsModel
  ) {}

  async create(dto: CreateCardDto): Promise<CardsModel> {
    return this.cardsModel.create(dto as any);
  }

  async findAll(): Promise<CardsModel[]> {
    return this.cardsModel.findAll();
  }

  async findOne(id: number): Promise<CardsModel> {
    const card = await this.cardsModel.findByPk(id);
    if (!card) {
      throw new NotFoundException(`Card with ID ${id} not found`);
    }
    return card;
  }

  async update(id: number, dto: UpdateCardDto): Promise<CardsModel> {
    const card = await this.findOne(id);
    return card.update(dto as any); // ✅ type conflict bartaraf etiladi
  }

  async remove(id: number): Promise<void> {
    const card = await this.findOne(id);
    await card.destroy();
  }
}
