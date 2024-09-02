import React from 'react'
import Letter from "@/app/Letter";

const WordContainer = ({word, row}: {word:string[], row:number}) => {
// console.log(word)
// const WordContainer = (word:string) => {
        return (
        <div className="flex gap-2 word items-center justify-center">
            {word.map((letter,index) => {
                // console.log(`${row}-${index}-${letter}`)
                return (
                    <Letter key={`${row}-${index}-${letter}`} letter={letter} />
                )
            })}
        </div>
    )
}
export default WordContainer
