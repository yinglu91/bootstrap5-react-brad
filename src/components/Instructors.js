const instructorData = [
  {
    id: 1,
    image: 'https:/randomuser.me/api/portraits/men/9.jpg',
    name: 'John Doe',
    bio: `John Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda accusamus nobis sed cupiditate `,
    twitterUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
  },
  {
    id: 2,
    image: 'https:/randomuser.me/api/portraits/women/9.jpg',
    name: 'Mary Power',
    bio: `Power Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda accusamus cupiditate iusto? Quibusdam.`,
    twitterUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
  },
  {
    id: 3,
    image: 'https:/randomuser.me/api/portraits/men/10.jpg',
    name: 'Steve Smith',
    bio: `Steve Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda accusamus nobis sed cupiditate iusto? `,
    twitterUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
  },
  {
    id: 4,
    image: 'https:/randomuser.me/api/portraits/women/10.jpg',
    name: 'Sara Yu',
    bio: `Yu Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda accusamus nobis sed e iusto? Quibusdam.`,
    twitterUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>

        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>

        <div className="row g-4">
          {instructorData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-circle mb-3"
                  />

                  <h3 className="card-title mb-3">{item.name} </h3>
                  <p className="card-text">{item.bio}</p>

                  <a href="">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>

                  <a href="">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>

                  <a href="">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>

                  <a href="">
                    <i className="bi bi-instagram text-dark mx-1"></i>
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

export default Instructors;
