import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">
          Copyright &copy; {new Date().getFullYear()} Fronend Bootcamp
        </p>

        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
