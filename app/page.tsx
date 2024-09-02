
import WordContainer from "@/app/WordContainer";

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
console.log (answer)
const randomWords:string[] = []

for (let i=0; i<6 ; i++ ){
  randomWords.push( allWords[ Math.floor(Math.random()*200)])
}
console.log(randomWords)
export default function Home() {


    return (
        <>

        <div className="container  flex flex-col w-4/5 justify-center border-2 border-green-400">


            <div className="title flex border-2 border-red-200  justify-center">
                <h1 className='m-2 p-4 text-3xl font-bold'>Welcome to Jordle!</h1>
            </div>


            <div className="flex flex-col all-guesses  border-blue-600 justify-center">
                <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    {randomWords.map((word) =>
                        <WordContainer key={word} word={word} />
                    )}

                </div>

                </div>
            </div>

            <div className="flex flex-col actions border-2 border-amber-200 justify-center">

                <button>Clear</button>
                <button>Submit</button>
            </div>

        </div>
        </>
    );
}
