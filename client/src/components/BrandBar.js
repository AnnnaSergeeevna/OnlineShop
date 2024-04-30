import React, { useContext } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import '../Bootstrap.css';

const BrandBar = observer(() => {
    const { item } = useContext(Context);

    return (
        <>
            <h1 style={{ fontFamily: 'Poiret One' }}>Designers</h1>
            <Carousel>
                {item.brands.reduce((acc, brand, index) => {
                    if (index % 3 === 0) {
                        acc.push(item.brands.slice(index, index + 3));
                    }
                    return acc;
                }, []).map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex} slide='true' interval={3000}>
                        <div className="d-flex justify-content-center align-items-end">
                            {group.map(brand => (
                                <Card
                                    key={brand.id}
                                    className={`border-grey ${item.selectedBrand && item.selectedBrand.id == brand.id ? 'selected' : ''}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        item.setSelectedBrand(brand);
                                    }}
                                >
                                    <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                                        {brand.name}
                                    </div>
                                </Card>

                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );

});

export default BrandBar;









// import React, { useContext } from 'react';
// import { Card, Carousel } from 'react-bootstrap';
// import { observer } from 'mobx-react-lite';
// import { Context } from '../index';

// const BrandBar = observer(() => {
//     const { item } = useContext(Context);

//     return (
//         <>
//             <h1 style={{ fontFamily: 'Poiret One' }}>Designers</h1>
//             <Carousel>
//                 {item.brands.reduce((acc, brand, index) => {
//                     if (index % 3 === 0) {
//                         acc.push(item.brands.slice(index, index + 3));
//                     }
//                     return acc;
//                 }, []).map((group, groupIndex) => (
//                     <Carousel.Item key={groupIndex} slide={true} interval={5000}>
//                         <div className="d-flex justify-content-center align-items-end w-100 h-100">
//                             {group.map(brand => (
//                                 <Card
//                                     key={brand.id}
//                                     className='p-1 m-4 w-100 h-100 justify-content-center align-items-center-!important'
//                                     style={{ maxWidth: '120px', minHeight: '60px', cursor: 'pointer' }}
//                                     onClick={() => {
//                                         console.log('Clicked brand id:', brand.id);
//                                         console.log('Selected brand:', brand.id);
//                                         console.log('Current brand:', item.selectedBrand);
//                                         item.setSelectedBrandId(brand.id); // Используем setSelectedBrandId для установки выбранного бренда
//                                     }}
//                                     border={item.selectedBrandId === brand.id ? 'red' : 'grey'}>
//                                     <div className="d-flex align-items-center justify-content-center" >
//                                         {brand.name}
//                                     </div>
//                                 </Card>
//                             ))}
//                         </div>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//         </>
//     );
// });

// export default BrandBar;






// const getRandomBrands = () => {
//     const shuffledBrands = item.brands.slice().sort(() => Math.random() - 0.5);
//     return shuffledBrands.slice(0, 3);
// };