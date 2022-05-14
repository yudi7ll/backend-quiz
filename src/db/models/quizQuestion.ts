import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '..'

export interface QuizQuestionAttributes {
  id: number
  quizId: number
  question: string
}

export interface QuizQuestionInput extends Optional<QuizQuestionAttributes, 'id'> { }
export interface QuizQuestionInstance extends Model<QuizQuestionAttributes, QuizQuestionInput>, QuizQuestionAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const QuizQuestion = sequelize.define<QuizQuestionInstance>('QuizQuestion', {
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  quizId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default QuizQuestion
