const EnrollFormModal = () => {
  return (
    <div
      className="modal fade"
      id="enroll"
      tabindex="-1"
      role="dialog"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enrollLabel">
              Enrollment
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <p className="lead">
              Fill out this form and we will get back to you
            </p>

            <form action="">
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  First Name:
                </label>
                <input type="text" className="form-control" id="first-name" />
              </div>

              <div class="mb-3">
                <label for="last-name" className="col-form-label">
                  Last Name:
                </label>
                <input type="text" className="form-control" id="last-name" />
              </div>

              <div className="mb-3">
                <label for="email" className="col-form-label">
                  Email:
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label for="phone" className="col-form-label">
                  Phone:
                </label>
                <input type="tel" className="form-control" id="phone" />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>

            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollFormModal;
