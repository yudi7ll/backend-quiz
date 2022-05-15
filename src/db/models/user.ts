import { hashSync } from 'bcrypt'
import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { sequelize } from '..'
import Quiz from './quiz'
import QuizUserAnswer from './quiz-user-answer'

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
    validate: {
      min: 8
    }
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'member'
  }
})

User.hasMany(Quiz, {
  foreignKey: 'creatorId'
})

User.hasMany(QuizUserAnswer, {
  foreignKey: 'memberId'
})

// User.prototype.addAuthToken = async function (token) {
//   //
// }

// User.prototype.authorize = async function () {
//   const user = this
//   const authToken = await AuthToken.generate(this.id)

//   await user.addAuthToken(authToken)

//   return { user, authToken }
// }

// User.prototype.authenticate = async function (username: string, password: string) {
//   const user = await User.findOne({ where: { username } })

//   if (!user) {
//     throw new Error('Invalid Username')
//   }

//   if (compareSync(password, user.password)) {
//     return user.authorize()
//   }

//   throw new Error('Invalid password')
// }

export default User
