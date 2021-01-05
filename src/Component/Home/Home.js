import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props
    return (
        <div style={{border:'1px solid gray',
                     margin : '20px',
                      padding: '20px',
                      borderRadius:'20px'
                    }}>
            <h2>This is Home Value: {count} </h2>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;