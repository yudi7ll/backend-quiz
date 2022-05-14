import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '..'

export interface QuizUserAnswerAttributes {
  id: number
  quizQuestionId: number
  quizQuestionOptionId: number
  memberId: number
}

export interface QuizUserAnswerInput extends Optional<QuizUserAnswerAttributes, 'id'> { }
export interface QuizUserAnswerInstance extends Model<QuizUserAnswerAttributes, QuizUserAnswerInput>, QuizUserAnswerAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const QuizUserAnswer = sequelize.define<QuizUserAnswerInstance>('QuizUserAnswer', {
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  quizQuestionId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  quizQuestionOptionId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  memberId: {
    type: DataTypes.UUID,
    allowNull: false
  }
})

export default QuizUserAnswer
