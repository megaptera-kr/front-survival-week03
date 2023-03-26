import * as React from 'react';
import { TextInput } from './TextInput';

export interface SearchBarProps {
    categories: string[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: string) => void;
}

export function SearchBar (props: SearchBarProps) {

    return (
    <div>
        <TextInput label='검색' placeholder='식당 이름' />
        <ul><li></li></ul>
    </div>
    );
}
