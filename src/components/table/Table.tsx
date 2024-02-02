
import Pagination from '@/utils/pagination/Pagination';
import React, { useEffect, useState } from 'react';

const Table = () => {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    const [user, setUser] = useState<any>([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const totalPage = Math.ceil(data.length / limit)
    useEffect(() => {
        let arr = [];
        for (let i = (page - 1) * limit; i < page * limit; i++) {
            arr.push(data[i])
        }
        console.log(arr);
        setUser(arr)
    }, [data, page, limit])
    const handleChange = (e) => {
        setPage(e)
    }
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>field</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.length && user?.map((item: any) => <tr>
                            <td> {item?.userId}</td>
                            <td> {item?.title}</td>
                            <td> {item?.userId}</td>
                            <td> {item?.id}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} handleChange={handleChange} />
        </div>
    );
};

export default Table;