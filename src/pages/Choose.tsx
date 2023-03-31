import React from 'react'
import { Results } from '../components/Results'
import { ToRus } from '../components/ToRus'

export const Choose = ({ words, step, clickedIndex, setStep, setCorrect, setClickedIndex, question, correct, translates, checkedWord, dictArr, setDictArr, showResults, mouseEnterDict, setMouseEnterDict, correctCount}: Choose) => {

  return (
    <div>
      {
        step !== words.length ? 
          <ToRus
            words={words}
            step={step}
            setStep={setStep}
            setCorrect={setCorrect}
            clickedIndex={clickedIndex}
            setClickedIndex={setClickedIndex}
            question={question}
            translates={translates}
            correct={correct}
            checkedWord={checkedWord}
            dictArr={dictArr}
            setDictArr={setDictArr}
            setMouseEnterDict={setMouseEnterDict}
            mouseEnterDict={mouseEnterDict}
            correctCount={correctCount}
          />
        :
          <Results
            correct={correctCount}
            words={words}
            showResults={showResults}
            setStep={setStep}
            setCorrect={setCorrect}
            setClickedIndex={setClickedIndex}
          />
    }
    </div>
  )
}
