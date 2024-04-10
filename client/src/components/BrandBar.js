import React, { useContext } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const BrandBar = observer(() => {
    const { item } = useContext(Context);

    const getRandomBrands = () => {
        const shuffledBrands = item.brands.slice().sort(() => Math.random() - 0.5);
        return shuffledBrands.slice(0, 3);
    };

    return (
        <><h1 style={{ fontFamily: 'Poiret One' }}>Designers</h1>
            <Carousel>
                {[...Array(3)].map((_, index) => (
                    <Carousel.Item slide={true} interval={5000} key={index}>
                        <div className="d-flex justify-content-center align-items-flex-end w-100 h-100">
                            {getRandomBrands().map(brand => (
                                <Card
                                    key={brand.id}
                                    className='p-1 m-4 w-100 h-100 justify-content-center align-items-center-!important'
                                    style={{ maxWidth: '120px', minHeight: '60px', cursor: 'pointer' }}
                                    onClick={() => item.setSelectedBrand(brand)}
                                    border={brand.id === item.selectedBrand.id ? 'red' : 'grey'}
                                >
                                    <div className="d-flex align-items-center justify-content-center" >
                                        {brand.name}
                                    </div>
                                </Card>

                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="carousel-indicators"></div>
        </>);



});

export default BrandBar;









