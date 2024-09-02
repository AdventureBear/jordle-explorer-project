import React from 'react'
import Letter from "@/app/Letter";

const WordContainer = ({word}: {word:string}) => {
console.log(word)
// const WordContainer = (word:string) => {
const letters: string[] = word.split('')
console.log(letters)
        return (
        <div className="flex gap-2  word items-center justify-center">
            {letters.map((letter,index) =>
                <Letter key={`${index} letter`} letter={letter }/>
            )}

        </div>
    )
}
export default WordContainer
