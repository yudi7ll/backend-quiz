import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '..'
import User from './user'

export interface AuthTokenAttributes {
  id: number
  userId: number
  token: string
}

export interface methods {
  generate: (id: number) => any
}

export interface AuthTokenInput extends Optional<AuthTokenAttributes, 'id'> { }
export interface AuthTokenInstance extends Model<AuthTokenAttributes, AuthTokenInput>, AuthTokenAttributes {
  createdAt?: Date,
  updatedAt?: Date
}

const AuthToken = sequelize.define<AuthTokenInstance>('AuthToken', {
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  token: DataTypes.STRING
})

AuthToken.belongsTo(User, {
  foreignKey: 'userId'
})

export default AuthToken
