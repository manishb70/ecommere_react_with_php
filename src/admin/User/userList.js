import React from 'react';
import { useTable } from 'react-table';
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const UserList = () => {
    const data = React.useMemo(
        () => [
            {
                id: '#876',
                name: 'Ant',
                phoneNo: '9876543210',
                email: 'ant@gmail.com',

            },
            {
                id: '#780',
                name: 'Man',
                phoneNo: '9876543210',
                email: 'man@gmail.com',

            },
            {
                id: '#908',
                name: 'anj',
                phoneNo: '9876543210',
                email: 'anj@gmail.com',

            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'User Id',
                accessor: 'id',
            },
            {
                Header: 'User name',
                accessor: 'name',
            },
            {
                Header: 'Phone Number',
                accessor: 'phoneNo',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: () => (
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <button type="button" class="text-blue-700 bg-transparent focus:ring-4 focus:ring-blue-300 text-xl rounded-lg text-sm px-2 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"><IoEyeOutline /></button>

                        <button type="button" class="focus:outline-none text-green-700 bg-trasnparent text-xl rounded-lg text-sm px-2 me-2 mb-2 dark:focus:ring-green-600"><FiEdit /></button>



                        <button type="button" class="focus:outline-none text-red-700 bg-transparent text-xl rounded-lg text-sm px-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><RiDeleteBinLine />
                        </button>


                    </a>
                ),
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-md bg-gray-100 md:px-7 mt-5 w-80 mx-auto border-y border-gray-400 md:w-full">
            <table {...getTableProps()} className="w-full text-sm whitespace-nowrap text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="px-5 py-3">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="px-5 py-4">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
