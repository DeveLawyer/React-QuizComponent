import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        this.state = { quiz_position: 1 }
=======
        this.state = { quiz_data: 1 }
>>>>>>> 73c986243e486445f2d751412eab61d232e2f2b9
    }

    render() {
        return (
        <div>
            <div className='QuizQuestion'>{quizData.quiz_questions[0].instruction_text}</div>
        </div>
        )
    }
}

export default Quiz