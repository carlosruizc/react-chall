import React from 'react';

const BreakifiedStrings = ({ array, symbol }: { array: string[], symbol: string }) => {
    if (typeof array === 'undefined') {
        return;
    }
    return (
        <div className='breakify-line' key={array.toString()}>
            {array.map((substring, index) => (
                <h1 key={index} className={substring === symbol && substring !== '' ? 'breakify-element' : 'breakify-regular'}>
                    {substring}
                </h1>
            ))}
        </div>
    );
}

export default BreakifiedStrings;