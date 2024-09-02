import React from 'react'

const Letter = ({letter}:{letter:string}) => {
    return (
        <div className="flex mb-2 h-12 w-12 bg-gray-300 rounded-md justify-center items-center font-bold text-lg">
          <input
              defaultValue={letter}
              className="bg-gray-300 items-center justify-center w-8 text-center"
              type ="text" />
        </div>
    )
}
export default Letter
