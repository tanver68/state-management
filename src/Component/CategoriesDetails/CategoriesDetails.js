import React, { useContext } from 'react';
import {CategoriesContext} from '../../App';


const CategoriesDetails = (props) => {
    const {name} =props.products;
    return (
        <div>
            <h2>This is categories details view </h2>
            <p>Selected Category : {name}</p>
        </div>
    );
};

export default CategoriesDetails;