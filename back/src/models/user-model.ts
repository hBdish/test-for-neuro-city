import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from 'sequelize'
import {db} from "../common";


export interface UserSchema extends Model<InferAttributes<UserSchema>, InferCreationAttributes<UserSchema>> {
  id: CreationOptional<number>
  email: string
  password: string
}

const UserModel = db.define<UserSchema>('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export {UserModel}
