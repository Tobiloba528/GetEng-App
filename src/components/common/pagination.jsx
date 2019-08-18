import React from 'react';
import _ from "lodash"
import "./pagination.css";
import { Link } from "react-scroll";

const Pagination = ({ pageSize, itemCount, currentPage, onPageChange, handlePrevious, handleNext}) => {
    // console.log(currentPage)

    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link
              onClick={() => handlePrevious(currentPage)}
              className="page-link"
              to="nav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Previous
            </Link>
          </li>
          {pages.map(page => (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
            >
              <Link
                className="page-link"
                onClick={() => onPageChange(page)}
                to="nav"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              onClick={() => handleNext(currentPage, pages.length)}
              className="page-link"
              to="nav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default Pagination;