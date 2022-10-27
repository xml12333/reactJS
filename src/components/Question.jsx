import React, { useState, useEffect, useRef } from "react";
import IconCheck from "./IconCheck";
function Question({ question, index, toggleItem, data}) {
  const [height, setHeight] = useState(0);
  const [check, setCheck] = useState(data[index].status);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, []);
  return (
    <div
      className={"accordion__item " + (question.open ? "accordion-open" : "")}
    >
      <header className="accordion__header">
        <IconCheck check={check} setCheck={setCheck} data={data}/>
        <i
          className="bx bx-plus accordion__icon"
          onClick={() => toggleItem(index)}
        ></i>
        <h3 className="accordion__title">{question.question}</h3>
      </header>

      <div
        className="accordion__content"
        ref={ref}
        style={question.open ? { height: `${height}px` } : { height: 0 }}
      >
        <p className="accordion__description">{question.answer}</p>
      </div>
    </div>
  );
}

export default Question;
