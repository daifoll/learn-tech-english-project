import { Box } from '@mui/system'
import React, { useState } from 'react'
import { AddDictButton } from './AddDictButton'


export const Translate = ({ setStep, setCorrect, setClickedIndex, question, correct, translates, checkedWord, dictArr, setDictArr, mouseEnterDict, setMouseEnterDict }: PropsWordsQuiz) => {
    // Состояние чекбокса в объекте
    const [checked, setChecked] = useState<Checked>(checkedWord)


    const currentAnswerStr = translates[correct]

    checkedWord = checked
    function clickHandler(index: number) {
        setClickedIndex((prev) => [...prev, index])

        if (index === correct) {
            setCorrect((prev) => prev + 1)
        }

        setStep((prev) => prev + 1)
    }

    // Словарь
    function onMouseEnterHandleDictionary() {
        setMouseEnterDict(true)
    }

    function onMouseLeaveHandleDictionary() {
        setMouseEnterDict(false)
    }

    return (
        <Box>
            <div className='max-w-2xl mx-auto'>

                <div className='max-w-full text-center mb-8 sm:mb-16 relative flex items justify-center'>
                    <div className='flex items-center justify-center'>
                        <h1 className='
                            font-semibold 
                            text-words-question-middle-lg 
                            mr-1
                            sm:mr-4
                            sm:text-xl'>{question}</h1>

                        {

                            <AddDictButton
                                checked={checkedWord}
                                setChecked={setChecked}
                                dictArr={dictArr}
                                setDictArr={setDictArr}
                                question={question}
                                correctAnswer={currentAnswerStr}
                            />

                        }

                    </div>
                </div>
                <Box>
                    <ul className='list-none max-w-full flex-col'>
                        {
                            translates.map((word, index) => {
                                return <li className='
                                            transition
                                            text-base
                                            sm:text-lg
                                            font-thin 
                                            sm:mt-8
                                            duration-75 
                                            hover:bg-primaryBlue 
                                            hover:text-slate-50 
                                            p-4 
                                            text-center 
                                            cursor-pointer' key={word} onClick={() => clickHandler(index)}>{word}</li>
                            })
                        }
                    </ul>
                </Box>
            </div>
        </Box>
    )
}