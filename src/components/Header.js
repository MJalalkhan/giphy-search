import React,{memo} from 'react'

const Header = () => {
    return (
        <header className='header'>
            <h3 className='pl-5 text-white text-4xl my-auto font-bold'>Giphy Search</h3>
        </header>  
      );
}
 
export default memo(Header);
