import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  // useEffect(() => {
  //   contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px`: "0px",
  //   contentRef.current.style.marginTop = active ? "5vw" : "0px"
  // }, [contentRef, active])
  useEffect(()=>{
    if (active){
      contentRef.current.style.max
    }
  })

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
