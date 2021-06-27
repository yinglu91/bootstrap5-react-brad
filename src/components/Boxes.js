import React from 'react';

const boxesData = [
  {
    id: 1,
    bgColor: 'dark',
    title: 'Virtual',
    btnBgColor: 'primary',
  },
  {
    id: 2,
    bgColor: 'secondary',
    title: 'Hybrid',
    btnBgColor: 'dark',
  },
  {
    id: 3,
    bgColor: 'dark',
    title: 'In Person',
    btnBgColor: 'primary',
  },
];

const Boxes = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          {boxesData.map((box) => (
            <div key={box.id} className="col-md">
              <div className={`card bg-${box.bgColor} text-light`}>
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">{box.title}</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className={`btn btn-${box.btnBgColor}`}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
