import React from 'react';
import BookList from '../BookList';
import BookListItem from '../BookListItem';
import ShoppingCartTable from '../../ShoppingCartTable/ShoppingCartTable';


const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
        
    )
}

export default HomePage;