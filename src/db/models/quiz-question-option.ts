import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '..'
import QuizQuestion from './quiz-question'

export interface QuizQuestionOptionAttributes {
  id: number
  quizQuestionId: number
  isCorrect: boolean
  text: string
}

export interface QuizQuestionOptionInput extends Optional<QuizQuestionOptionAttributes, 'id'> { }
export interface QuizQuestionOptionInstance extends Model<QuizQuestionOptionAttributes, QuizQuestionOptionInput>, QuizQuestionOptionAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const QuizQuestionOption = sequelize.define<QuizQuestionOptionInstance>('QuizQuestionOption', {
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  quizQuestionId: {
    type: DataTypes.UUID,
    references: {
      model: QuizQuestion,
      key: 'id'
    }
  },
  isCorrect: DataTypes.BOOLEAN,
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

QuizQuestionOption.belongsTo(QuizQuestion, {
  foreignKey: 'quizQuestionId'
})

export default QuizQuestionOption
