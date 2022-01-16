import { Grid, GridColumn } from "@progress/kendo-react-grid";
import React, { useEffect, useState } from "react";
import "./kendoGrid.css";

export default function KendoGrid({ data, gridcolumns }) {
  const [page, setPage] = React.useState({ skip: 0, take: 10 });

  const columns = [
    {
      name: "Daily Diff",
      selector: "daily_diff",
      cell: (row) => (row.dail_diff)
    },
    {
      name: "Country",
      selector: "country",
    },
    {
      name: "Username",
      selector: "username",
    },
    {
      name: "Rank",
      selector: "rank",
    },
    {
      name: "Money",
      selector: "money",
    },
  ];

  const pageChange = (event) => {
    setPage(event.page);
  };

  console.log(data);

  return (
    <>
      <Grid
        data={data.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={data.length}
        pageable={true}
        onPageChange={pageChange}
      >
        {columns.map((item, index) =>
          item.selector === "daily_diff" ? (
            <GridColumn
              field={item.selector}
              title={item.name}
              key={index}
              className={item.cell}
            />
          ) : (
            <GridColumn field={item.selector} title={item.name} key={index} />
          )
        )}
      </Grid>
    </>
  );
}
