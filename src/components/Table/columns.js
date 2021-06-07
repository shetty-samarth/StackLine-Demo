import {format} from 'date-fns'

function thousandsSeperator(x) {
    x = x.toFixed(2);
    return "$ "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const COLUMNS = [
    {
        Header: 'WEEK ENDING',
        accessor: 'weekEnding',
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'RETAIL SALES',
        accessor: 'retailSales',
        Cell: ({value}) => {return `${thousandsSeperator(value)}`},
    },
    {
        Header: 'WHOLESALE SALES',
        accessor: 'wholesaleSales',
        Cell: ({value}) => {return `${thousandsSeperator(value)}`}
    },
    {
        Header: 'UNITS SOLD',
        accessor: 'unitsSold'
    },
    {
        Header: 'RETAILER MARGIN',
        accessor: 'retailerMargin'
    },
]