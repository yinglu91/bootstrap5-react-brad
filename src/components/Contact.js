const Contact = () => {
  const contactData = [
    {
      key: 'Main Location',
      value: '50 Main st Boston MA',
    },
    {
      key: 'Enrollment Phone',
      value: '(555) 555-5555',
    },
    {
      key: 'Student Phone',
      value: '(333) 333-3333',
    },
    {
      key: 'Enrollment Email',
      value: 'enroll@frontendbc.test',
    },
    {
      key: 'Student Email',
      value: 'student@frontendbc.test',
    },
  ];
  return (
    <section className="p-5">
      <div className="container">
        <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>

            <ul class="list-group list-group-flush lead">
              {contactData.map((item) => (
                <li key={item.key} class="list-group-item">
                  <span class="fw-bold">{item.key} :</span> {item.value}
                </li>
              ))}
            </ul>
          </div>

          <div class="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
