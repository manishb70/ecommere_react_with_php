import React from 'react';
import { useTable } from 'react-table';
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";




const CategoryList = () => {
    const data = React.useMemo(
        () => [
            {
                name: 'Apron with Cap',
                productId: '#67766',
                quantity:'1,698',
                price: '₹ 2,999',
                sale: '1,290',
                stockDate: '20 Nov 2023',
            },
            {
                name: 'Kia cover',
                productId: '#99996',
                quantity:'1,929',
                price: '₹ 1,999',
                sale: '1,567',
                stockDate: '20 Nov 2023',
            },
            {
                name: 'Table cover',
                productId: '#675787',
                quantity:'4,567',
                price: '₹ 99',
                sale: '2,789',
                stockDate: '20 Nov 2023',
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Category name',
                accessor: 'name',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Sale',
                accessor: 'sale',
            },
            {
                Header: 'Start Date',
                accessor: 'stockDate',
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
                                <th {...column.getHeaderProps()} className="px-6 py-3">
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
                                    <td {...cell.getCellProps()} className="px-6 py-4">
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

export default CategoryList;
