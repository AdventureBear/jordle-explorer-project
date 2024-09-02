'use client'
import WordContainer from "@/app/WordContainer";
import Keyboard from "@/app/Keyboard";
import {useState} from "react";

const allWords = [
    "APPLE", "BRICK", "CRATE", "DRIVE", "EPOCH", "FLARE", "GLASS", "HORSE", "IVORY", "JOKER",
    "KNEEL", "LIGHT", "MONEY", "NERVE", "OCEAN", "PLUMB", "QUERY", "ROAST", "SPARE", "TRUCK",
    "USHER", "VIRAL", "WATCH", "XENON", "YIELD", "ZEBRA", "ADMIT", "BLOOM", "CHAIR", "DOZER",
    "EAGER", "FANCY", "GRAPE", "HEART", "INBOX", "JUMBO", "KNACK", "LEMON", "MARCH", "NORTH",
    "OPERA", "PAUSE", "QUILT", "RADIO", "SNAKE", "TIGER", "URBAN", "VODKA", "WAGON", "XEROX",
    "YACHT", "ZAPPY", "ANGLE", "BENCH", "CLOUD", "DREAM", "ELBOW", "FENCE", "GIANT", "HOUSE",
    "INDEX", "JELLY", "KARMA", "LOVER", "MOUSE", "NINJA", "OLIVE", "PRIZE", "QUEEN", "REACT",
    "SCALE", "THORN", "UNCLE", "VALID", "WHEEL", "XENIA", "YOUNG", "ZESTY", "AXIOM", "BLAST",
    "CHALK", "DELVE", "ENVOY", "FEAST", "GRIND", "HUMOR", "IRONY", "JUDGE", "KAYAK", "LABOR",
    "MIXER", "NOVEL", "OCTET", "PIXEL", "QUOTE", "RELAX", "STOVE", "TWIST", "USAGE", "VOWEL",
    "WHOLE", "XERIC", "YODEL", "ZONAL", "ABYSS", "BAKER", "CHIEF", "DECOY", "EMOTE", "FLUFF",
    "GLOBE", "HAPPY", "ISLET", "JOIST", "KNOLL", "LEMUR", "MAPLE", "NYLON", "OUNCE", "PHASE",
    "QUICK", "ROBIN", "SHADE", "TWIRL", "UPSET", "VOICE", "WIDOW", "XYSTI", "YOUTH", "ZIPPY",
    "AMAZE", "BROOM", "CRISP", "DENSE", "EVENT", "FROST", "GLEAM", "HUSKY", "INNER", "JOLLY",
    "KNEAD", "LOFTY", "MOTOR", "NOTCH", "OPINE", "PAPER", "QUIET", "RULER", "STEAM", "TRAIL",
    "UNITE", "VALUE", "WOOZY", "XENIC", "YUMMY", "ZESTY", "ALERT", "BARGE", "CABIN", "DWARF",
    "ETHER", "FABLE", "GAUZE", "HYENA", "IMAGE", "JOLLY", "KNURL", "LIMIT", "MOUND", "NOBLE",
    "OLDEN", "PATCH", "QUEST", "ROVER", "SLOTH", "TRIPE", "ULTRA", "VISIT", "WASTE", "XENON",
    "YEARN", "ZILCH", "ADORE", "BOUGH", "CLOWN", "DOUGH", "ENTRY", "FINCH", "GUSTY", "HILLY",
    "IDIOM", "JUNTO", "KRAIT", "LARGE", "MIDST", "NURSE", "OVOID", "PLUMB", "QUARK", "RISKY",
    "SWEPT", "THROW", "UNDER", "VIVID", "WOOER", "XERIC", "YUCKY", "ZIPPY"
]

const answer = allWords[ Math.floor(Math.random()*200)]
const randomWords:string[] = []

for (let i=0; i<6 ; i++ ){
  randomWords.push( allWords[ Math.floor(Math.random()*200)])
}



export default function Home() {
    const [entries, setEntries] = useState<string[][]>(Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => "")))
    const [currentGuess, setCurrentGuess] = useState(0)
    // const [nextLetter, setNextLetter] = useState("")
    const [canSubmitWord, setCanSubmitWord] = useState(false)
    console.log("Entries", entries)
    const newEntries = entries.map(row => [...row]);


    const handleKeyDown= (e: KeyboardEvent) => {
        console.log(e.key)
        let letterAdded = false
        if (!canSubmitWord){
           newEntries.forEach((row, i) => {
               if (!canSubmitWord) {
                   row.forEach((letter, j) => {
                       if (!letterAdded) {
                           if (letter === "") {
                               console.log("This is empty, filling it with ", e.key.toUpperCase())
                               newEntries[i][j] = e.key.toUpperCase()
                               letterAdded = true
                               if (j === 4) {
                                   setCanSubmitWord(true)
                               }
                           }
                       }

                   })
               }
        })
            setEntries(newEntries)

        } else {
            if (e.code==="Enter") {
                console.log("Checking entry for the win")
                entries[currentGuess].map((letter, i) => {
                    if (letter === answer.substring(i, i+1)) {
                        console.log("Letters Match")
                    } else if (answer.includes(letter)) {
                        console.log("Letter is in the word")
                    } else {
                        console.log("Letter is not in the word")
                    }
                })}
                setCanSubmitWord(false)
            }
        }






    return (

            <div
                tabIndex={0}
                className="myContainer bg-black rounded-xl drop-shadow-xl shadow-black flex flex-col w-[375px] justify-center"
                onKeyDown={(e)=>handleKeyDown(e)}
            >
                <div className="title my-6 flex justify-center">
                    <h1 className='m-2 p-2 text-3xl font-bold text-white'>Welcome to Jordle!</h1>
                </div>

                <div className="flex flex-col all-guesses mb-4 justify-center">
                    {/*<div className="flex flex-col">*/}
                    <div className="flex flex-col justify-center">
                        {randomWords.map((word, row) =>
                            <WordContainer row={row} key={word} word={entries[row]}/>
                        )}

                    </div>

                    {/*</div>*/}
                </div>
                <div className="actions flex flex-col gap-2 pb-4 mb-2 rounded-b-lg justify-center">

                    <Keyboard/>
                    <div className="buttons flex flex-row gap-2 justify-center">
                        <button className="w-1/3  rounded-sm drop-shadow bg-slate-400 p-2 ">Clear</button>
                        <button className="w-1/3  rounded-sm drop-shadow bg-slate-400 p-2 ">Submit</button>
                    </div>
                </div>

              </div>
    );

}
