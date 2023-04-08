import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'

export const AddDictButton = ({ checked, setChecked, dictArr, setDictArr, question, correctAnswer }: AddDictButton) => {

  const [snackBarAddOpened, setSnackBarAddOpened] = useState(false)
  const [snackBarDeleteOpened, setSnackBarDeleteOpened] = useState(false)

  function wordChecked(e: ChangeEvent<HTMLInputElement>) {
    let checkbox = e.target.checked

    // Устанавливаем значение чекбокса
    if (setChecked) {
      setChecked(checkbox)
    }

    if (checkbox === true) {
      setDictArr((prev) => [...prev, question + ' - ' + correctAnswer])
    } else {
      let filtredQuestionsChecked = dictArr.filter((word) => {
        if (word !== question + ' - ' + correctAnswer) {
          return word
        }
      })

      setDictArr([...filtredQuestionsChecked])
    }
  }

  // if (dictArr.length) {
  //   // Сохраняем слова в localstorage
  //   localStorage.setItem('dictionary', JSON.stringify(dictArr))
  // }



  // Проверяем есть ли слово в словаре и ставим чекбокс на основе этого
  function isChecked() {
    if (dictArr.includes(question + ' - ' + correctAnswer)) {
      return true
    }
  }

  useEffect(() => {
    if (checked) {
      setSnackBarAddOpened(true)
    }else{
      setSnackBarDeleteOpened(true)
    }
  }, [checked])

  return (
    <>
      <Checkbox
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        checked={isChecked() || false}
        onChange={wordChecked}
        className={'scale-[0.9] sm:scale-[1.5]'}
        sx={{padding: 0}}
      />
    </>
    //<input checked={isChecked() || false} onChange={(e) => wordChecked(e)} className='absolute top-0 right-64' type="checkbox" name="AddDict" id="" />
  )
}
