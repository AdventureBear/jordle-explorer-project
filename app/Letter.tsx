import React from 'react'

const Letter = ({letter}:{letter:string}) => {
    return (
        <div className="flex mb-2 h-12 w-12 justify-center items-center font-bold text-lg border-2 border-blue-600">
          <input
              defaultValue={letter}
              className="items-center justify-center w-8 text-center"
              type ="text" />
        </div>
    )
}
export default Letter
