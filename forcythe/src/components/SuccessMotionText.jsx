import React from 'react'
import AnimatedHeader from './AnimatedHeader'
import AnimatedParagraph from './AnimatedParagraph'
AnimatedHeader
function SuccessMotionText() {
    const textArray = [ "Success ", "in ", "Motion ", "– ", "Our ", "clients’ ", "journey "]
    const text = " Success in Motion – Our clients’ journey"
  return (
    <AnimatedHeader text = {text}/>
    // <AnimatedParagraph textArray = {textArray}/>
  )
}

export default SuccessMotionText