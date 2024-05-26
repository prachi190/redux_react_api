import React from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TodoTable = ({todos})=>{
    const columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Title', field: 'title' },
        { headerName: 'Completed', field: 'completed', cellRenderer: (params) => (params.value ? 'Yes' : 'No') },
      ];
      return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact
            rowData={todos}
            columnDefs={columnDefs}
            defaultColDef={{
              flex: 1,
              minWidth: 100,
              resizable: true,
              sortable: true,
              filter: true,
            }}
          />
        </div>
      );

}

export default TodoTable;