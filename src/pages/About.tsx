import { Bookmark, BookmarkBorder, Delete, ExpandCircleDown, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, IconButton, Input, Typography } from '@mui/material'
import { useState } from 'react'

export const About = () => {
  const [addExample, setAddExample] = useState(true)

  return (
    <div className='mt-10 max-w-sm'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight={600} component={'p'}>Описание проекта</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'p'}>
            Проект разработан для тренировки перевода слов с английского на русский, а также с русского на английский.
          </Typography>
          <Typography marginTop={2} component={'p'}>
            Приложение будет полезно программистам, а также другим IT-специалистам, работающими с документациями на английcком языке.
          </Typography>
          <Typography marginTop={2} component={'p'}>
            Наборы состоят из слов, часто встречающихся в документациях.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={600} component={'p'}>Описание работы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'p'}>
            Наборы слов загружаются по API, я использую {<a href='https://jsonbin.io/' target='_blank' className='font-bold hover:text-primaryBlue'>jsonbin.io</a>}
          </Typography>
          <Typography marginTop={2} component={'p'}>
            После выбора набора слов, пользователю предлагается перевести слова, выбрав один из 4 вариантов ответов.
          </Typography>
          <Typography marginTop={2} component={'p'}>
            После перевода слов, открывается окно результатов, с количеством правильно(зеленые) и неправильно(красные) выбранных ответов.
          </Typography>
          <Typography marginTop={2} component={'p'}>
            Начать тренировку с начала, можно нажав соотвествующую кнопку снизу.
          </Typography>
          <Typography marginTop={2} component={'p'}>
            С каждой новой тренировкой, слова в наборах перемешиваются.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={600} component={'p'}>Добавление в словарь</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'p'}>
            Нажав на "Словарь" в панели навигации, откроется боковое окно, здесь отображены все добавленные слова с переводом.
          </Typography>
          <Typography marginTop={4} component={'div'}>
            Вверху словаря находится строка, для поиска нужных слов:
            <Input placeholder='найти слово' fullWidth />
          </Typography>
          <Typography marginTop={4} component={'div'}>
            Слова можно добавлять нажав на специальный значок закладки:
            <Checkbox
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark />}
              checked={addExample}
              onChange={() => { setAddExample(!addExample) }}
              className={'scale-[1.3]'}
            />
          </Typography>
          <Typography marginTop={4} component={'p'}>
            Удалять слова из словаря можно нажав на спецаильной значок корзины:
            <IconButton aria-label="delete" className={'scale-[1.3]'} sx={{ color: 'red' }}>
              <Delete />
            </IconButton>
          </Typography>
          <Typography marginTop={4} component={'p'}>
            Все добавленные слова сохраняются в локальное хранилище - localstorage, поэтому после перезагрузки страницы, слова сохраняются.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={600} component={'p'}>Стек технологий</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            <ul>
              <li>REACT JS</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Material UI</li>
              <li>React Router</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
