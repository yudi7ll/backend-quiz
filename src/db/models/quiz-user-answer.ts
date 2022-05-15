import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '..'
import QuizQuestion from './quiz-question'
import QuizQuestionOption from './quiz-question-option'
import User from './user'

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
    allowNull: false,
    references: {
      model: QuizQuestion,
      key: 'id'
    }
  },
  quizQuestionOptionId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: QuizQuestionOption,
      key: 'id'
    }
  },
  memberId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
})

QuizUserAnswer.belongsTo(QuizQuestion, {
  foreignKey: 'quizQuestionId'
})
QuizUserAnswer.belongsTo(QuizQuestionOption, {
  foreignKey: 'quizQuestionOptionId'
})
QuizUserAnswer.belongsTo(User, {
  foreignKey: 'memberId'
})

export default QuizUserAnswer
