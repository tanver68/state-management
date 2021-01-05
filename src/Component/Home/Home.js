import React, { useContext } from 'react';
import { CategoriesContext } from '../../App';
import Categories from '../Categories/Categories';


const Home = () => {
    const category = useContext(CategoriesContext)
    return (
        <div style={{border:'1px solid gray',
                     margin : '20px',
                      padding: '20px',
                      borderRadius:'20px'
                    }}>
            <h2>This is Home Value: {category} </h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;