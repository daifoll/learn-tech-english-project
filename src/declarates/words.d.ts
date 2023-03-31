declare interface PropsWordsQuiz {
    words: WordObject[];
    step: number;
    clickedIndex: number[];
    question: Question;
    translates: Tranlates;
    correct: Correct;
    correctCount: number;
    checkedWord: Checked;
    setClickedIndex: React.Dispatch<React.SetStateAction<number[]>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setCorrect: React.Dispatch<React.SetStateAction<number>>;
    dictArr: string[];
    setDictArr: React.Dispatch<React.SetStateAction<string[]>>;
    mouseEnterDict: boolean;
    setMouseEnterDict: React.Dispatch<React.SetStateAction<boolean>>;
}

declare interface WordObject {
    header: string;
    translate: string[];
    correct: number;
    checked: boolean;
}

declare interface PropsQuizResults {
    correct: number;
    words: WordObject[];
    showResults(words: WordObject[]): JSX.Element[]
    setStep: React.Dispatch<React.SetStateAction<number>>
    setCorrect: React.Dispatch<React.SetStateAction<number>>
    setClickedIndex: React.Dispatch<React.SetStateAction<number[]>>;

}

declare interface Header {
    showDictionary(): void
    setStep: React.Dispatch<React.SetStateAction<number>>
    setCorrect: React.Dispatch<React.SetStateAction<number>>
    setClickedIndex: React.Dispatch<React.SetStateAction<number[]>>;
    children?: React.ReactNode;
}

declare interface AddDictButton {
    checked?: Checked;
    question: Question;
    setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
    dictArr: string[];
    setDictArr: React.Dispatch<React.SetStateAction<string[]>>;
    correctAnswer: string;
}

declare interface Dictionary {
    // question: Question;
    // checkedWord: Checked;
    dictArr: string[]
    setDictArr: React.Dispatch<React.SetStateAction<string[]>>;
    dictOpened: boolean;
    setDictOpened: React.Dispatch<React.SetStateAction<boolean>>

}


declare type Question = string;
declare type Correct = number;
declare type Tranlates = Array<string>;
declare type Checked = boolean;
declare type Choose = PropsWordsQuiz & PropsQuizResults;