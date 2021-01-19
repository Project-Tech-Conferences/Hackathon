import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px"
    contentRef.current.style.marginTop = active ? "2vw" : "0px"
    contentRef.current.style.display = active ? "flex" : "hidden"
  }, [contentRef, active])
  // useEffect(() => {
  //   if (active) {
  //     contentRef.current.style.max = `{50 + contentRef.current.scrollHeight}vw`
  //     // contentRef.current.style.marginTop = "5vw"
  //   } else {
  //     contentRef.current.style.max = `0px`
  //     // contentRef.current.style.marginTop = "0px"
  //   }
  // })

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toggleActive}>
        <p>{props.title}</p>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          <FontAwesomeIcon icon="chevron-down" />
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
      <hr />
    </div>
  )
}

export default Accordion
