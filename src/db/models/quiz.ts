import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '..'
import QuizQuestion from './quiz-question'
import User from './user'

export interface QuizAttributes {
  id: number
  title: string
  creatorId: number
}

export interface QuizInput extends Optional<QuizAttributes, 'id'> { }
export interface QuizInstance extends Model<QuizAttributes, QuizInput>, QuizAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Quiz = sequelize.define<QuizInstance>('Quiz', {
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creatorId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  }
})

Quiz.belongsTo(User, {
  foreignKey: 'creatorId'
})
Quiz.hasOne(QuizQuestion, {
  foreignKey: 'quizId'
})

export default Quiz
