import React from 'react';
import DataTable from "react-data-table-component";
import "./table.css"

export default function Table({data, columns, ...props}) {
    return (
        <div className="table">
            <DataTable
            columns={columns}
            data={data}
            {...props} className='dataTable'>
                
            </DataTable>
        </div>
    )
}
