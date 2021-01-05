import React, { useContext } from 'react';
import {CategoriesContext} from '../../App';


const CategoriesDetails = () => {
    const category = useContext(CategoriesContext)
    return (
        <div>
            <h2>This is categories details view</h2>
            <p>Selected Category : {category}</p>
        </div>
    );
};

export default CategoriesDetails;