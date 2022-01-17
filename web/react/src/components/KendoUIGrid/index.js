import { Grid, GridColumn } from "@progress/kendo-react-grid";
import React from "react";
import { filterBy } from "@progress/kendo-data-query";
import "./kendoGrid.css";
import { Button } from "@progress/kendo-react-buttons";

export default function KendoGrid({ data, gridcolumns }) {
  const [page, setPage] = React.useState({ skip: 0, take: 10 });
  const [filter, setFilter] = React.useState({
    logic: "and",
    filters: [
      {
        field: "username",
        operator: "contains",
        value: "",
      },
    ],
  });


  const pageChange = (event) => {
    setPage(event.page);
  };

  const clearFilter = () => {
    setFilter({
      logic: "and",
      filters: [
        {
          field: "username",
          operator: "contains",
          value: "",
        },
      ],
    });
  };

  return (
    <>
      <Button
        look="outline"
        onClick={clearFilter}
        style={{
          backgroundColor: "transparent",
          color: "#ff6600",
          borderColor: "#ff6600",
        }}
      >
        Clear filter
      </Button>
      <Grid
        data={filterBy(data, filter)}
        onPageChange={pageChange}
        filterable={true}
        filter={filter}
        onFilterChange={(e) => setFilter(e.filter)}
      >
        <GridColumn
          field={"money"}
          title={"Rank"}
          cell={(index) => <td>{index.dataIndex + 1}</td>}
          filterable={false}
        />
        <GridColumn
          field={"username"}
          title={"Username"}
          filterable={[{ multi: true }, { search: true }]}
        />
        <GridColumn field={"country"} title={"Country"} filterable={false} />
        <GridColumn field={"money"} title={"Money"} filterable={false} />
        <GridColumn
          field={"daily_diff"}
          title={"Daily Diff"}
          width={100}
          filterable={false}
          cell={(diff) =>
            diff.dataItem[diff.field] === 1 ? (
              <div className="daily_diff">
                <div className="circle high-diff">
                  <i class="fas fa-chevron-up"></i>
                </div>
              </div>
            ) : diff.dataItem[diff.field] === 0 ? (
              <div className="daily_diff">
                <div className="circle">
                  <i class="fas fa-minus"></i>
                </div>
              </div>
            ) : diff.dataItem[diff.field] === -1 ? (
              <div className="daily_diff">
                <div className="circle low-diff">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
            ) : (
              <div className="daily_diff">
                
              </div>
            )
          }
        />
      </Grid>

     
    </>
  );
}