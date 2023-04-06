import React from 'react'
import { Link } from 'react-router-dom'

export const Results = ({correct, words, showResults, setStep, setCorrect, setClickedIndex}: PropsQuizResults) => {
  function congratTemplate(){
    if(correct === 0){
      return 'Потренируйся еще и у тебя всё получится!'
    }else if(correct === words.length){
      return 'Превосходно!'
    }else{
      return 'Неплохо, но еще есть над чем работать!'
    }
  }

  return (
    <div className='max-w-2xl mx-auto py-10'>
       <h1 className='font-semibold text-2lg uppercase bg-primaryBlue text-primaryWhite p-4'> Результат: {correct}! </h1>
       <span className='mb-8 block text-lg'>{congratTemplate()}</span>
          {
            showResults(words)
          }
          
          {/* onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))} */}
        <a  href='/' className='transition duration-75 font-thin text-lg hover:bg-primaryBlue hover:text-primaryWhite p-2 text-center'>Начать сначала</a>
    </div>
  )
}
