import React, { FC, memo } from 'react';

const Header: FC = () => {
    return (
        <header className='header'>
            <h3 className='pl-5 text-white text-4xl my-auto font-bold'>Giphy Search</h3>
        </header>  
    );
}
 
export default memo(Header);
