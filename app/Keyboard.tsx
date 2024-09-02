
import KeyboardItem from "@/app/KeyboardItem";


const keyboardRows = ["QWERTYUIOP", "ASDFGHJKL","ZXCVBNM"]
const Keyboard = () => {
    return (
        <div className=" keyboard flex flex-col mt-1  items-center">
            {keyboardRows.map(row=>(
                <div className = "flex flex-row gap-1 m-0.5 justify-center items-center" key={`keyboard-${row}`}>
                    {row.split("").map(letter =>(
                       <KeyboardItem  key={`key-${letter}`} letter={letter}/>
                        )
                    )}
                </div>
            ))}
        </div>
    )
}


export default Keyboard