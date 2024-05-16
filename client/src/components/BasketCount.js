import React from 'react';
import { observer } from 'mobx-react-lite';

const BasketCounter = observer(({ basketItems }) => {
    const itemCount = basketItems.length;
    return (
        <div className="basket-counter">
            <span>{itemCount}</span>
        </div>
    );
}
)

export default BasketCounter;