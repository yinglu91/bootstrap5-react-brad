const questionData = [
  {
    id: 1,
    question: 'Where exactly are you located?',
    answer: '888 Wonderland Ln, Brooklyn, NY 01112',
  },
  {
    id: 2,
    question: 'How much does it cost to attend?',
    answer:
      '$100/month. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    question: 'What do I need to Know?',
    answer:
      'no knowledge needed. Numquam beatae fuga animi distinctio perspiciatis adipisci',
  },
  {
    id: 4,
    question: 'How Do I sign up?',
    answer:
      'Sign up online. accusantium consequatur, praesentium rem quisquam molestias at',
  },
  {
    id: 5,
    question: 'Do you help me find a job?',
    answer: 'Sure. Officiis ad velit doloremque at. Dignissimos',
  },
];

const QuestionAccordion = () => {
  return (
    <section id="questions00" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

        <div className="accordion accordion-flush" id="questions">
          {questionData.map((q) => (
            <div key={q.id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#question-${q.id}`}
                >
                  {q.question}
                </button>
              </h2>

              <div
                id={`question-${q.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  {q.answer}

                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit. */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionAccordion;
