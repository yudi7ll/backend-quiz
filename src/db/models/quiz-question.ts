import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '..'
import Quiz from './quiz'
import QuizQuestionOption from './quiz-question-option'
import QuizUserAnswer from './quiz-user-answer'

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
    references: {
      model: Quiz,
      key: 'id'
    }
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

QuizQuestion.belongsTo(Quiz, {
  foreignKey: 'quizId'
})
QuizQuestion.hasMany(QuizQuestionOption, {
  foreignKey: 'quizQuestionId'
})
QuizQuestion.hasMany(QuizUserAnswer, {
  foreignKey: 'quizQuestionId'
})

export default QuizQuestion
