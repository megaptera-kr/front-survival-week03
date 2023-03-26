import * as React from 'react';

export interface TextInputProps {
    label : string,
    placeholder : string,
}

export function TextInput ({ label, placeholder}: TextInputProps) {
    const id = `text-input-${label}`;
    
  return (
    <div>
    <label htmlFor = {id} style={{
        paddingRight: '1rem',
    }}>검색</label>
    <input id = "search-text-input" placeholder = { placeholder || "입력하세요" } type="text"/>
    </div>
  );
}
