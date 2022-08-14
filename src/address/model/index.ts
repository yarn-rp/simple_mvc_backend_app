import { DataTypes, Model } from "sequelize";
import database from "../../config/database.config";

interface AddressAttr {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

export class AddressModel extends Model<AddressAttr> {
  declare id: string; 
  declare street: string;
  declare city: string;
  declare state: string;
  declare zipCode: number;
}

AddressModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "address",
  }
);
