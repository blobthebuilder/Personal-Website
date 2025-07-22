import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const pdfDownload = "/resume.pdf";
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <Link
        class="navbar-brand"
        to="/">
        FW
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarToggler">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a
              className="nav-link"
              href={pdfDownload}
              target="_blank"
              rel="noopener noreferrer"
              download="FrankWang_Resume.pdf">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link icon"
              target="_blank"
              to="https://www.linkedin.com/in/frank-wang-cs/">
              <FaLinkedinIn size={25} />
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link icon"
              target="_blank"
              to="https://github.com/blobthebuilder">
              <AiFillGithub size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
