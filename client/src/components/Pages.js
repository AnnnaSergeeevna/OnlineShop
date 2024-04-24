import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import '../Bootstrap.css';

const Pages = observer(() => {
    const { item } = useContext(Context);
    const pageCount = Math.ceil(item.totalCount / item.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className='mt-5'>
            <Pagination.First />
            <Pagination.Prev />
            {pages.map(page => (
                <Pagination.Item
                    key={page}
                    active={item.page === page}
                    onClick={() => item.setPage(page)}
                >
                    {page}</Pagination.Item>
            ))}
            {/* <Pagination.Ellipsis /> */}
            {/* <Pagination.Item>{pageCount}</Pagination.Item> */}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>

    );

});

export default Pages;
