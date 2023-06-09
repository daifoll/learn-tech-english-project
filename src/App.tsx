import React, { useEffect, useState } from 'react';
import './styles/main.css'
import { Dictionary } from './components/Dictionary'
import { Choose } from './pages/Choose';
import './styles/index.css'
import { Header } from './components/Header';
import { AddDictButton } from './components/AddDictButton';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Container } from '@mui/system';
import { CircularProgress } from '@mui/material';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import Footer from './components/Footer';


function App() {

  // Ответы на вопросы
  const [step, setStep] = useState<number>(0)
  const [correct, setCorrect] = useState<number>(0);
  const [clickedIndex, setClickedIndex] = useState<number[]>([])
  const [pageError, setPageError] = useState(false)

  // Формируем список слов в словаре из localstorage
  const [dictArr, setDictArr] = useState<string[]>(JSON.parse(localStorage.getItem('dictionary')!) ? JSON.parse(localStorage.getItem('dictionary')!) : [])

  useEffect(() => {

    // Сохраняем слова в localstorage
    localStorage.setItem('dictionary', JSON.stringify(dictArr))
  }, [dictArr])


  const [mouseEnterDict, setMouseEnterDict] = useState<boolean>(false)


  const [eng, setEng] = useState<WordObject[]>([])
  const [rus, setRus] = useState<WordObject[]>([])

  let englishWords = setWordDataBase(eng);
  let russianWords = setWordDataBase(rus);

  useEffect(() => {
    let ENG_URL = 'https://api.jsonbin.io/v3/b/63d9237cc0e7653a056a50ec'
    let RUS_URL = 'https://api.jsonbin.io/v3/b/63da610aace6f33a22d2c0f3'

    let masterkey = process.env.REACT_APP_MASTERKEY!

    if (rus.length === 0) {

      // Ивлекаем нужные элементы из баз данных слов
      fetch(ENG_URL, {
        headers: {
          'Accept': 'application/json',
          'X-Master-Key': masterkey,
        }
      }).then(resp => {
        if (resp.ok) {
          return resp.json()
        }

        setPageError(true);
        throw new Error('Что-то пошло не так');

      }).then((data) => (setEng(data.record.sort(() => 0.5 - Math.random()))))
    }

    if (eng.length === 0) {
      fetch(RUS_URL, {
        headers: {
          'Accept': 'application/json',
          'X-Master-Key': masterkey,
        }
      }).then(resp => {
        if (resp.ok) {
          return resp.json()
        }

        setPageError(true);
        throw new Error('Что-то пошло не так, попробуйте перезагрузить страницу');

      }).then((data) => (setRus(data.record.sort(() => 0.5 - Math.random()))))
    }

  }, [])


  function setWordDataBase(database: WordObject[]) {
    let question: Question = ''
    let translates: Tranlates = []
    let correctAnswer: Correct = 0
    let checkedWord: Checked = false

    if (step !== database.length && database.length !== 0) {
      question = database[step].header
      translates = database[step].translate
      correctAnswer = database[step].correct
      checkedWord = database[step].checked
    }

    let words = {
      question,
      translates,
      correctAnswer,
      checkedWord
    }

    return words

  }

  // Словарь
  const [dictOpened, setDictOpened] = useState<boolean>(false)

  // Показать / Скрыть словарь
  function showDictionary() {
    setDictOpened(!dictOpened)
  }

  // Показать результаты на основе ответов
  function showResults(words: WordObject[]) {
    const resultsList = words.map((word, index) => {
      const currentAnswer = word.correct
      const currentAnswerStr = word.translate[word.correct]
      const wordIndex = index

      return (
        <div className='max-w-full ml-5 md:ml-0 relative' key={word.header}>
          <div className='flex'>
            <h1 className='text-lg md:text-2lg font-medium mr-1 md:mr-4'>{word.header}</h1>

            <AddDictButton
              dictArr={dictArr}
              setDictArr={setDictArr}
              question={word.header}
              correctAnswer={currentAnswerStr}
            />

          </div>
          <ul key={word.header}>
            {
              word.translate.map((item, index) => {
                if (currentAnswer == index) {
                  return <li className='font-medium text-green-500' key={item}>{item}</li>

                } else if (clickedIndex[wordIndex] == index) {
                  return <li className='font-medium text-red-500' key={item}>{item}</li>
                } else {
                  return <li key={item}>{item}</li>
                }
              })
            }
          </ul>
        </div>
      )
    })

    return (
      resultsList
    )
  }


  return (
    <div className="App h-screen flex flex-col justify-between">
      <div>
        <Header
          showDictionary={showDictionary}
          setStep={setStep}
          setCorrect={setCorrect}
          setClickedIndex={setClickedIndex}>

          <Dictionary
            dictArr={dictArr}
            setDictArr={setDictArr}
            dictOpened={dictOpened}
            setDictOpened={setDictOpened}
          />
        </Header>
        <Container sx={{ padding: '50px 0' }}>
          {
            pageError ?
              <ErrorPage />
              :
              <Routes>
                <Route path='/' element={<Home />} />
                {
                  eng.length > 0
                    ?
                    <Route path='/choose' element={
                      <Choose
                        words={eng}
                        step={step}
                        setStep={setStep}
                        setCorrect={setCorrect}
                        clickedIndex={clickedIndex}
                        setClickedIndex={setClickedIndex}
                        question={englishWords.question}
                        translates={englishWords.translates}
                        correct={englishWords.correctAnswer}
                        checkedWord={englishWords.checkedWord}
                        dictArr={dictArr}
                        setDictArr={setDictArr}
                        showResults={showResults}
                        mouseEnterDict={mouseEnterDict}
                        setMouseEnterDict={setMouseEnterDict}
                        correctCount={correct}
                      />
                    } />

                    :
                    <Route path='/choose' element={
                      <CircularProgress sx={{position: 'absolute', top: '40%', left: '50%', translate: '-50% -40%'}}/>
                    } />

                }
                {
                  rus.length > 0
                    ?
                    <Route path='/choose2' element={
                      <Choose
                        words={rus}
                        step={step}
                        setStep={setStep}
                        setCorrect={setCorrect}
                        clickedIndex={clickedIndex}
                        setClickedIndex={setClickedIndex}
                        question={russianWords.question}
                        translates={russianWords.translates}
                        correct={russianWords.correctAnswer}
                        checkedWord={russianWords.checkedWord}
                        dictArr={dictArr}
                        setDictArr={setDictArr}
                        showResults={showResults}
                        mouseEnterDict={mouseEnterDict}
                        setMouseEnterDict={setMouseEnterDict}
                        correctCount={correct}
                      />
                    } />

                    :
                    <Route path='/choose2' element={
                      <CircularProgress className='absolute top-1/2 -translate-x-1/2 translate-y-1/2 left-1/2' />
                    } />
                }
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
          }
        </Container>
      </div>
      <Footer 
        setStep={setStep}
        setCorrect={setCorrect}
        setClickedIndex={setClickedIndex}
      />
    </div>
  );
}

export default App;
