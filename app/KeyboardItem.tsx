import React from 'react'

const KeyboardItem = ({letter}:{letter:string}) => {
    return (<div className="flex font-bold text-xs rounded-md h-8 w-8 bg-slate-400 justify-center items-center">

            {letter}

        </div>
    )
}
export default KeyboardItem
