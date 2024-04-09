import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { Container, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import ItemStore from '../store/ItemStore';

const TypeBar = observer(() => {
    const { item } = useContext(Context);


    return (<>
        <h1 style={{ fontFamily: 'Poiret One' }}>Olfactory Groups</h1>
        <ListGroup as="ul" className='shopListGroup'>
            {item.types.map(type =>
                <ListGroup.Item
                    active={type.id === item.selectedType.id}
                    className={`list-group-item ${type.id === item.selectedType.id ? `active-${type.id}` : ''}`}
                    onClick={() => item.setSelectedType(type)}
                    key={type.id} id={type.id}>
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup>
    </>);
}
);

export default TypeBar;






