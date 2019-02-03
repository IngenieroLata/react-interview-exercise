import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Pagination.css';

const Pagination = ({ total, page, limit, onPageChange }) => {
  const pages = Math.ceil(total / limit);
  let pagesDOM = [];

  for (let i = 1; i <= pages; i++) {
    pagesDOM = [
      ...pagesDOM,
      <li
        key={i}
        data-testid="page"
        className={classNames({ active: i === page })}
        onClick={() => i !== page && onPageChange(i)}>
        <a href="#">{i}</a>
      </li>
    ];
  }

  return (
    <nav aria-label="Page navigation" className={styles.paginationContainer}>
      <ul className="pagination pagination-sm">
        <li data-testid="first" onClick={() => onPageChange(1)}>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pagesDOM}
        <li data-testid="last" onClick={() => onPageChange(pages)}>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  limit: PropTypes.number,
  page: PropTypes.number
};

Pagination.defaultProps = {
  limit: 2,
  page: 1
};

export default Pagination;
