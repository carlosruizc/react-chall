import React from 'react';

export const Button = ({ onClick, className, children }: { onClick: () => void, className: string, children: React.ReactNode }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};