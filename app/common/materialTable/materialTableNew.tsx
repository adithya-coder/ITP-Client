/* eslint-disable react-hooks/exhaustive-deps */
import { createStyles, Grid, IconButton, LinearProgress, makeStyles, TablePagination, Theme } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import AssignmentIcon from '@material-ui/icons/Assignment';
import MaterialTable, { MTableBody, MTableToolbar } from "material-table";
import React, { useContext, useEffect, useState } from "react";
import customTheme from "../../pages/hooks/custom-theme.module.css";
import { ThemeContext } from "../../ThemeContext";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      paddingTop: "250px",
    },
    toolbarSection: {
      display: 'flex',
      flexWrap: 'nowrap',

      '@media (min-width: 320px) and (max-width: 767px)': {
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      },
    },

    datatableToolBar: {
      width: "100%",

      '@media (min-width: 320px) and (max-width: 767px)': {
        width: "100% !important",
      },

      "& div.MuiToolbar-root": {
        '@media (min-width: 320px) and (max-width: 767px)': {
          flexWrap: 'wrap',
        },
      },

      "& .MuiFormControl-root": {
        '@media (min-width: 320px) and (max-width: 767px)': {
          width: 'calc(100% - 40px)',
          paddingLeft: '0',
        },
      },
    },

    toolbarMenuIcon: {
      height: 'fit-content',
      alignSelf: 'center',
    },
  })
);

export const MaterialTableWrapper = (props: any) => {

  const classes = useStyles();
  const {
    filterChanged,
    handleColumnFilter,
    tableColumns,
    exportToExcel,
    handleRowDeleteAction,
    updateAction,
    addAction,
    handlePageChange,
    handlePageSizeChange,
    pageSize,
    pageIndex,
    title,
    externalEdit,
    externalView,
    externalAdd,
    disableColumnFiltering,
    handleCommonSearchBar,
    searchByText,
    loading,
    count,
    parentChildData,
    draftView,
    setDraftViewModel,
    records,
    selection,
    selectionExport 
  } = props;

  const defaultEditOptions = {
    onRowUpdate: (newData: any, oldData: any) =>
      new Promise((resolve) => {
        updateAction(newData, oldData, resolve);
      }),
    onRowAdd: (newData: any) =>
      new Promise((resolve, reject) => {
        addAction(newData, resolve, reject);
      }),
    onRowDelete: (oldData: any) =>
      new Promise((resolve, reject) => {
        handleRowDeleteAction(oldData, resolve, reject);
      }),
  };

  const [editableOptions, setEditableOptions] = useState<any>(
    defaultEditOptions
  );

  const [columnOptions, setColumnOptions] = useState<any>([]);
  const [pageNo, setPageNo] = useState<Number>(0);

  const data = records.map((o:any) => ({ ...o, tableData: {} }))

  useEffect(() => {
    handleEditOptions();
  }, [selection]);

  const handleEditOptions = () => {
    var optionsVar: any[] = [];
    var columnOptions: any[] = [];

    if (handleRowDeleteAction  && !selection) {
      optionsVar.push({
        onRowDelete: (oldData: any) =>
          new Promise((resolve) => {
            handleRowDeleteAction(oldData, resolve);
          }),
      });
    }
    if (updateAction  && !selection) {
      optionsVar.push({
        onRowUpdate: (newData: any, oldData: any) =>
          new Promise((resolve) => {
            updateAction(newData, oldData, resolve);
          })
      })
    }
    if (addAction  && !selection) {
      optionsVar.push({
        onRowAdd: (newData: any) => new Promise((resolve, reject) => {
          addAction(newData, resolve, reject);
        })
      })
    }
    if (externalView  && !selection) {
      columnOptions.push({
        icon: "visibility",
        onClick: (event: any, selectedRow: any) => {
          externalView(selectedRow);
          // open dialog and fill your data to update
        },
      })
    }
    if (externalEdit  && !selection) {
      columnOptions.push(
        {
          icon: "edit",
          onClick: (event: any, selectedRow: any) => {
            externalEdit(selectedRow);
            // open dialog and fill your data to update
          },
        })
    }
    if (selection) {
      columnOptions.push(
        {
          icon: "checkbox",
          onClick: (event: any, selectedRow: any) => {
            selectionExport(selectedRow)
          }
        })
    }

    const allActions = Object.assign({}, ...optionsVar);
    setEditableOptions((allActions));
    setColumnOptions((columnOptions));
  }

  const { customStyles } = useContext(ThemeContext);

  const { surfaceBgTheme, surfaceBg, table, underLineIndicator, dataTableToolBarMain, tableStrip } = customStyles

  return (
    <Grid container>
      <Grid id="m-table" item xs={12} className={`${table} ${underLineIndicator} ${tableStrip}`}>
        {loading ? <LinearProgress /> : null}
        <MaterialTable
          columns={tableColumns}
          isLoading={loading}
          data={data}
          title={title}
          onSearchChange={(e: any) => {
            if (handleCommonSearchBar) {
              handleCommonSearchBar(e);
            }
          }}
          onFilterChange={(e: any) => {
            handleColumnFilter(e);
          }}
          editable={editableOptions}
          components={{
            Toolbar: (props) => (
              <Grid container className={`${classes.toolbarSection}`}>
                <Grid item className={`${classes.datatableToolBar} ${customTheme.dataTableToolBar} ${dataTableToolBarMain} ${surfaceBgTheme}`} style={externalAdd ? { width: 'calc(100% - 50px)' } : { width: '100%' }} >
                  <MTableToolbar {...props} />
                </Grid>

                {externalAdd ? (
                  <Grid item className={customTheme.surfaceBg} style={{ display: 'flex', alignItems: 'center', width: '50px', ...surfaceBg }}>
                    <IconButton onClick={externalAdd}>
                      <AddCircle />
                    </IconButton>

                  </Grid>

                ) : (
                  <></>
                )}

                {draftView ? (
                  <IconButton className={`${classes.toolbarMenuIcon}`} style={{marginRight: '5px',}} onClick={() => setDraftViewModel(true)}>
                    <AssignmentIcon />
                  </IconButton>
                ) : <></>
                }
                <Grid item className={customTheme.surfaceBg} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', ...surfaceBg }}>
               
                </Grid>


              </Grid>

            ),
            Body: (bodyProps) => (
              <MTableBody
                {...bodyProps}
                onFilterChanged={(columnId: number, value: string) => {
                  // get column's fieldName
                  filterChanged(columnId, value);
                  // get data whose prop has same value as filter
                  // redux action, tried using local hook for state as well
                  bodyProps.onFilterChanged(columnId, value);
                }}
              />
            ),
            OverlayLoading: props => (<div className={classes.loading}>Loading...</div>),
            Pagination: (props) => (
              <TablePagination
                SelectProps={props.SelectProps}
                colSpan={props.colSpan}
                count={count}
                labelDisplayedRows={props.labelDisplayedRows}
                labelRowsPerPage={''}
                style={props.style}
                rowsPerPageOptions={[10, 25, 50]}
                rowsPerPage={pageSize}
                page={pageIndex}
                onPageChange={(event, page) => {
                  props.onChangePage(event, page);
                  setPageNo(page);
                  handlePageChange(page);
                }}
                onRowsPerPageChange={(event) => {
                  if (pageNo === 0) {
                    props.onChangeRowsPerPage(event);
                    handlePageSizeChange(parseInt(event.target.value));
                  } else {
                    handlePageChange(0);
                    handlePageSizeChange(parseInt(event.target.value));
                  }
                }}
              />
            ),
          }}
          actions={columnOptions}
          options={{
            filtering: disableColumnFiltering ? !disableColumnFiltering : true,
            addRowPosition: "first",
            debounceInterval: 1000,
            filterCellStyle: {
              padding: "0px",
              height: "0.2em",
            },
            pageSize: 10,

            headerStyle: {
              backgroundColor: "#9fa6a1",
              zIndex: "revert",
            },
            exportButton: exportToExcel && !selection  ? { csv: true, pdf: false } : false,
            exportAllData: true,

            exportCsv: (columns, data) => {
              exportToExcel(columns, data);
            },
            actionsColumnIndex: -1,
            selection: selection ? selection : false,
          }}
          localization={{
            toolbar: {
              addRemoveColumns: "Add or remove columns",
              nRowsSelected: "{0} row(s) selected",
              showColumnsTitle: "Show Columns",
              showColumnsAriaLabel: "Show Columns",
              exportTitle: "Export",
              exportAriaLabel: "Export",
              exportCSVName: "Export as Excel",
              exportPDFName: "Export as PDF",
              searchTooltip: "Search",
              searchPlaceholder: searchByText ? searchByText : "Search",
              searchAriaLabel: "Search",
              clearSearchAriaLabel: "Clear Search",
            },
            body: { emptyDataSourceMessage: "" }
          }}
          parentChildData={parentChildData}
        />
      </Grid>
    </Grid>
  );
};
export default MaterialTableWrapper;
