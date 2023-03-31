Уровни:
 - Для документации
 - Для программистов
 - Для других IT-специалистов

Виды:
 - с английского на русский (слова)
 - с русского на английский (слова)
 - вперемешку
 - словосочетания

 Фичи:
 - словарь
 - поиск в словаре

 Доп.:
 - лист с используемыми словами в наборе (с функцией добавления в словарь) +
 - О проекте - написать как пользоваться / какие функции есть +
 - FAQ (как пользоваться приложением) +
 - 404 ошибка (сделать страницу) +
 - рандомайзер слов +
 - добавить контакты +
 - отлавливать ошибки (api, 404 и т.д) +
 - доделать адаптив, исправить опечатки, собрать базу слов
 
 
 - использоватьл претиер, ts
 - precommit хуки




       <div className='absolute top-2/4 right-0 z-10 bg-white w-96 flex flex-col max-w-sm border-2 border-indigo-500 shadow-xl'>
        <form>
          <label>
            <Input placeholder='найти слово' value={query} onChange={handleInputChange} fullWidth />
            {/* <input value={query} className='p-2' placeholder='найти слово' onChange={(e) => handleInputChange(e)} /> */}
          </label>
        </form>

        <ul>
          {
            dictArr.length === 0 ? '(Нет слов)' : null
          }

          {
            dictArr.filter(word => {
              if (query === '') {
                return word
              } else if (word.includes(query)) {
                return word
              }
            }).map((word) => {
              console.log(word)
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
      </div>
