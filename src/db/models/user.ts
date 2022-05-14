import { hashSync } from 'bcrypt'
import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '..'

export interface UserAttributes {
  id: number
  username: string
  password: string
  role: string
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserInstance extends Model<UserAttributes, UserInput>, UserAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const User = sequelize.define<UserInstance>('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set (value: string) {
      this.setDataValue('password', hashSync(value, 10))
    }
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'member'
  }
})

export default User
