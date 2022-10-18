import React from 'react'

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPage} = props;
    return (
        <div className="pagination">
            <button className="page-button" onClick={onLeftClick}>
                <div>👈</div>
            </button>
            <div>{page} de {totalPage}</div>
            <button className="page-button" onClick={onRightClick}>
                <div>👉</div>
            </button>
        </div>
    )
}

export default Pagination;