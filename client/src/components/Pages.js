import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import '../Bootstrap.scss';

const Pages = observer(() => {
    const { item } = useContext(Context);
    const pageCount = Math.ceil(item.totalCount / item.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    const handleFirstClick = () => {
        item.setPage(Number(1))
    };

    const handlePrevClick = () => {
        const prev = (Number(item.page - 1));
        item.setPage(prev > 0 ? prev : item.page)
    };

    const handleNextClick = () => {
        const next = (Number(item.page + 1));
        item.setPage(next <= pageCount ? next : item.page)
    };

    const handleLastClick = () => {
        item.setPage(Number(pageCount))
    };


    return (
        <Pagination
            style={{ fontFamily: 'Poiret One', color: '--bs - danger - text - emphasis' }}
            className=' page-link d-flex justify-content-center align-items-center mt-5'>
            <Pagination.First onClick={handleFirstClick} />
            <Pagination.Prev onClick={handlePrevClick} />
            {pages.map(page => (
                <Pagination.Item style={{ fontSize: 'xx-large' }}
                    key={page}
                    active={item.page === page}
                    onClick={() => item.setPage(page)}
                >{page}</Pagination.Item>
            ))}
            {/* <Pagination.Ellipsis /> */}
            {/* <Pagination.Item>{pageCount}</Pagination.Item> */}
            <Pagination.Next onClick={handleNextClick} />
            <Pagination.Last onClick={handleLastClick} />
        </Pagination>

    );

});

export default Pages;
