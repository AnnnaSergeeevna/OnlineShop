import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import Item from './Item';

const ItemList = observer(() => {
    const { item } = useContext(Context);

    return (
        <Row ow xs={1} sm={2} md={3} lg={4} xxl={6} className='d-flex mt-5 justify-content-space-around' >
            {item.items.map(item =>
                <Item key={item.id} item={item} />
            )}
        </Row>
    );
});

export default ItemList;






