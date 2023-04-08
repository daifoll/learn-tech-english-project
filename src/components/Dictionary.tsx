import { Delete } from '@mui/icons-material'
import { Button, Drawer, IconButton, Input, Snackbar } from '@mui/material'
import SwipeableDrawer from '@mui/material';
import { Box } from '@mui/system'
import React, { ChangeEvent, useEffect, useState } from 'react'

export const Dictionary = ({ dictArr, setDictArr, dictOpened, setDictOpened }: Dictionary) => {
  const [query, setQuery] = useState<string>('')
  
  const dictFiltred = dictArr.filter(word => {
    if (query === '') {
      return word
    } else if (word.toLowerCase().includes(query.toLowerCase())) {
      return word
    }
  })

  // Формирование запроса
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value)
  }

  // Удаление слова
  function deleteWordBtn(wordLocal: string) {
    let filtredArr = dictArr.filter(word => {
      if (word !== wordLocal) {
        return word
      }
    })

    setDictArr([...filtredArr])
  }

  return (
    <>
      <Drawer anchor={'right'} open={dictOpened} onClose={() => setDictOpened(false)}>
        <Box width={300} padding={2}>
          <form>
            <label>
              <Input placeholder='найти слово' value={query} onChange={handleInputChange} fullWidth />
              {/* <input value={query} className='p-2' placeholder='найти слово' onChange={(e) => handleInputChange(e)} /> */}
            </label>
          </form>

          <ul>
            {
              dictArr.length === 0 ? <span>(Нет слов)</span> : null
            }

            {
              dictFiltred.map((word) => {
                return (
                  <div className='flex mb-3 items-center' key={new Date().getTime() + word}>
                    <li className='mr-2' key={new Date().getTime() + word}>{word}</li>
                    {/* <button onClick={() => deleteWordBtn(word)} className='bg-slate-300 p-2'>X</button> */}
                    {/* <Button variant="contained" onClick={() => deleteWordBtn(word)} startIcon={<Delete />} /> */}
                    <IconButton aria-label="delete" onClick={() => deleteWordBtn(word)} sx={{ color: 'red' }}>
                      <Delete />
                    </IconButton>
                  </div>
                )
              })
            }
          </ul>
        </Box>
      </Drawer>
    </>
  )
}
