import React, { useState } from "react";
import Question from "./Question";
const Questions = ({ data }) => {
  const [questions, setQuestion] = useState(data);

  const toggleItem = (index) => {
    setQuestion(
      questions.map((question, i) => {
        if (i === index) {
          question.open = !question.open;
        } else {
          question.open = false;
        }
        return question;
      })
    );
  };
  return (
    <section className="accordion container">
      <div className="accordion__container">
        {questions.map((question, i) => (
          <Question
            key={i}
            question={question}
            index={i}
            toggleItem={toggleItem}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
