import React from 'react';
import { returnPagination } from './paginationRange';

const Pagination = ({ totalPage, page, limits, siblings, handleChange }: any) => {
    const arr = returnPagination(totalPage, page, limits, siblings)
    return (
        <div className='flex justify-center'>
            <div>
                <ul className='pag flex gap-6 bg-red-900'>
                    <li>prev</li>

                    {
                        arr.map((item, index) => <li onClick={(e) => handleChange(item)} key={index}>{item}</li>)
                    }
                    <li>next</li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;