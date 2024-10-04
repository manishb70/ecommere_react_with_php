import React from 'react';
import { useTable } from 'react-table';
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductList = () => {
    const data = React.useMemo(
        () => [
            {
                name: 'Apron with Cap',
                productId: '#67766',
                quantity: '1,698',
                price: '₹ 2,999',
                sale: '1,290',
                stock: 'Out of stock',
            },
            {
                name: 'Kia cover',
                productId: '#99996',
                quantity: '1,929',
                price: '₹ 1,999',
                sale: '1,567',
                stock: 'Out of stock',
            },
            {
                name: 'Table cover',
                productId: '#675787',
                quantity: '4,567',
                price: '₹ 99',
                sale: '2,789',
                stock: 'In stock',
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Product name',
                accessor: 'name',
            },
            {
                Header: 'Product Id',
                accessor: 'productId',
            },
            {
                Header: 'Price',
                accessor: 'price',
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
                Header: 'Stock',
                accessor: 'stock',
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: () => (
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                        <button type="button" class="text-blue-700 bg-transparent focus:ring-4 focus:ring-blue-300 text-xl rounded-lg text-sm px-2 me-2 mb-2 focus:outline-none"><IoEyeOutline /></button>

                        <button type="button" class="focus:outline-none text-green-700 bg-trasnparent text-xl rounded-lg text-sm px-2 me-2 mb-2"><FiEdit /></button>



                        <button type="button" class="focus:outline-none text-red-700 bg-transparent text-xl rounded-lg text-sm px-2"><RiDeleteBinLine />
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
            <table {...getTableProps()} className="w-full text-sm whitespace-nowrap text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                            <tr {...row.getRowProps()} className="bg-white border-b">
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

export default ProductList;
