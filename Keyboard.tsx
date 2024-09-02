

const keyboard = ["QWERTYUIOP", "ASDFGHJKL","ZXCVBNM"]
export const Keyboard = () => {
    return (
        <div className="flex flex-col pt-2 justify-center items-center">
            {keyboard.map(row=>(
                <div className = "flex flex-row gap-2 justify-center items-center" key={row}>

                    {row.split("").map(letter =>(
                        <div key={letter}
                            className="flex p-2 rounded-sm bg-gray-300 font-bold text-lg"
                            >
                            {letter}
                        </div>
                        )
                    )}
                </div>
            ))}
        </div>
    )
}
