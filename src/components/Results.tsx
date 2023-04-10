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
    <div className='max-full mx-auto py-10'>
       <h1 className='font-semibold text-sm sm:text-lg md:text-2lg p-2 sm:p-4 uppercase bg-primaryBlue text-primaryWhite'> Результат: {correct} </h1>
       <span className='mb-4 mt-2 ml-2 md:mb-8 md:mt-4 block font-semibold text-sm sm:text-base md:text-lg'>{congratTemplate()}</span>
          {
            showResults(words)
          }
          
          {/* onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))} */}
        <a  href='/' className='transition duration-75 font-thin text-base ml-5 md:text-lg hover:bg-primaryBlue hover:text-primaryWhite p-2 text-center'>Начать сначала</a>
    </div>
  )
}
