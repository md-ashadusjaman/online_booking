import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 ">
        {children}
      </button>
    );
};

export default PrimaryButton;