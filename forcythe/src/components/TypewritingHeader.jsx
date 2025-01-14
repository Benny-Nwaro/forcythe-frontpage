import React from 'react'

function TypewritingHeader(props) {
  return (
    <div className="w-2/3 flex flex-nowrap">
      <h1 className={`animate-typing delay-200 overflow-hidden whitespace-nowrap  border-r-4 border-r-white pr-5 text-5xl text-white font-semibold `}>{props.text}</h1>
    </div>
  )
}

export default TypewritingHeader