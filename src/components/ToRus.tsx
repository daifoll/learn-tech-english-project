import { Box } from '@mui/system'
import React, { PropsWithChildren, useState } from 'react'
import { AddDictButton } from './AddDictButton'


export const ToRus = ({ setStep, setCorrect, setClickedIndex, question, correct, translates, checkedWord, dictArr, setDictArr, mouseEnterDict, setMouseEnterDict }: PropsWordsQuiz) => {
    // Состояние чекбокса в объекте
    const [checked, setChecked] = useState<Checked>(checkedWord)
    const defaultCheckedValue = checkedWord

    const currentAnswerStr = translates[correct]

    checkedWord = checked
    function clickHandler(index: number) {
        setClickedIndex((prev) => [...prev, index])

        // console.log('Кликнул: ' + index, 'Правильный ответ: ' + correct)
        // console.log(question)

        if (index === correct) {
            setCorrect((prev) => prev + 1)
        }

        setStep((prev) => prev + 1)
    }

    // Словарь
    function onMouseEnterHandleDictionary() {
        setMouseEnterDict(true)
        // console.log(mouseEnterDict)
    }

    function onMouseLeaveHandleDictionary() {
        setMouseEnterDict(false)
        // console.log(mouseEnterDict)
    }

    return (
        <Box>
            <div className='max-w-2xl mx-auto'>

                <div className='max-w-full text-center mb-7 mt-3 relative flex justify-center'>
                    <div
                        className='flex p-2'
                    // onMouseEnter={() => onMouseEnterHandleDictionary()}
                    // onMouseLeave={() => onMouseLeaveHandleDictionary()}
                    >
                        <h1 className='font-semibold mr-4 text-xxl sm:text-xl md:text-2xxl lg:text-xxl'>{question}</h1>

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
                                return <li className='transition text-lg extrasm:text-2sm extrasm:mt-7 lg:text-2lg lg:mt-10 md:text-2lg xl:text-lg xl:mt-2 md:mt-10 duration-75 font-thin hover:bg-primaryBlue hover:text-slate-50 p-2 text-center cursor-pointer' key={word} onClick={() => clickHandler(index)}>{word}</li>
                            })
                        }
                    </ul>
                </Box>
            </div>
        </Box>
    )
}