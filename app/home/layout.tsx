import React from 'react';
import SearchComponent from '../../components/Search';

const HomeLayout = ({ children }:{
    children: React.ReactNode;
  }) => {
    return <>
        <div className="container mx-auto p-4">
            <SearchComponent />
            {children}
        </div>        
    </>;
};

export default HomeLayout;