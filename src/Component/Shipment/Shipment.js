import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoriesContext)
    return (
        <div>
            <h2>This is Shipment value : {category}</h2>
        </div>
    );
};

export default Shipment;