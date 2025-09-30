import { Table, Column, Model, DataType } from "sequelize-typescript";

export enum CardType {
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  HUMO = "HUMO",
  UZCARD = "UZCARD",
}

interface CardCreationAttrs {
  card_type: CardType;
  card_number: number;
  recipientId: number;
  expiry_date: string;
}

@Table({ tableName: "cards", timestamps: false })
export class CardsModel extends Model<CardsModel, CardCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.ENUM(...Object.values(CardType)),
    allowNull: false,
  })
  card_type: CardType;

  @Column({ type: DataType.SMALLINT, allowNull: false })
  card_number: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  recipientId: number;

  @Column({ type: DataType.STRING(10), allowNull: false })
  expiry_date: string;
}
