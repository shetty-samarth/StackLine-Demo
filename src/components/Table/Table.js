import React, {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {useTable, useSortBy} from 'react-table'
import {COLUMNS} from './columns'
import './Table.css'

const Table = () =>{
    const products = useSelector((state)=>state.data.sales)
    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>products,[products])
    const tableInstance = useTable({
        columns,
        data
    }, useSortBy);

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance

    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderProps}>
                        {
                            headerGroup.headers.map( column=>(
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span id = 'icon'>
                                    {column.isSorted ? (column.isSortedDesc ? '  ̬':'  ˆ'):''}
                                </span>
                                </th>))
                        }
                    </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map(cell =>{
                                       return (<td {...cell.getCellProps}>{cell.render('Cell')}</td>
                                       )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}

export default Table;