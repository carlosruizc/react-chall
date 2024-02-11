import React from 'react';

export const InputField = ({ label, className, id, type, placeholder, value, onChange }: { label: string, className: string, id: string, type: string, placeholder: string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);
