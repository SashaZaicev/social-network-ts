import React from 'react';
import styles from './Paginator.module.css';
// let styles = require('./Paginator.module.css');

type PaginatorPropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void

}
const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount
        / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p) => {
                return <span
                    key={p + 1}
                    className={currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>
                            {p} </span>
            })}
        </div>)
}

export default Paginator;
