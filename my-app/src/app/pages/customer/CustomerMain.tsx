import React, { FC, useCallback,useEffect, useMemo, useState } from 'react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid } from "@material-ui/core";
import CreateNewAccountModal from "./CustomerForm";
import { toast } from "react-toastify";
import {
  deleteCustomerDetailsService,
  getCustomerDetailsService,
  saveCustomerDetailsService,
   updateCustomerDetailsService,
} from "../../services/customer-master/CustomerDetailsService";
import { async } from 'rxjs/internal/scheduler/async';


export type Person = {
  _id: string,
  date: Date,
  referenceNumber: string,
  title: string,
  nic: number,
  mobile:number,
  email: string,
  customer: string,
  customerType: string,
  salesPerson: number,
  address: string,
};

const Example: FC = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEditd, setIsEditd] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [rowData, setRowData] = useState<any>([]); 
  const [tableData, setTableData] = useState<Person[]>([]);
 

  const handleCreateNewRow = (values: Person) => {
    tableData.push(values);
    setTableData([...tableData]);
  };
const handleModalClose = () => {
  setRowData(null);
  setIsEdit(false);
  setCreateModalOpen(false);

};
const today = new Date().toISOString().slice(0, 10);
  const handleSubmit = (values: any) => {
    handleModalClose();
    let dateTime = new Date();
    const data: any = {};
    const id = values?.id;
    data.companyId=1;
   // data.userId = 1;
  
    data.referenceNumber = values?.referenceNumber;
    data.date = values?.date;
    data.title = values?.title;
    data.nic =values?.mobile;
    data.mobile=values?.mobile;
    data.email=values?.email;
    data.customer=values?.customer;
    data.customerType=values?.customerType;
    data.salesPerson=values?.salesPerson;
    data.address=values?.address;
    data.status =1;
    if(isEdit){
      data.updateAt = today;
    
    }else{
      data.createAt =today;
    }
  
// console.log("data===>",data);
//     setTableData([...data]);
//     setDataLoading(true);
    if (isEdit) {
      if (!readOnly) {
        updateCustomerDetailsService(id,data).subscribe({
          next: (response: any) => {
            toast(("Successfully Update"), {
              className: "toast-success-container",
            });
            setIsEditd(true);
          },
          error: (error: any) => {
            toast(error as any, { className: "toast-error-container" });
          },
        });
      }
    } else {
      if (!readOnly) {
      saveCustomerDetailsService(data).subscribe({
        next: (response: any) => {
          toast(("Successfully Insert"), {
            className: "toast-success-container",
          });
          setIsSaved(true);
        },
        error: (error: any) => {
          toast(error as any, { className: "toast-error-container" });
        },
      });
    }
  }

    setDataLoading(false);
  };

  const fetchCustomers = async (companyId: any,page: any,pageSize: any) => {
    getCustomerDetailsService(page,pageSize,companyId).subscribe({
      next: (response: any) => {
        setTableData(response.data.customers);
        console.log("data====>",response.data.response);
        console.log("data 2====>",response.data.customers);
      },
      error: (error: any) => {
        toast(error as any, { className: "toast-error-container" });
      },
    });
  }
  const handleSaveRowEdits = async (row:any) =>{

  }
  

  const handleDeleteRow = async (customerId: any,) =>{
    deleteCustomerDetailsService(customerId._id).subscribe({
      next: (response: any) => {

        toast(("Successfully Delete"), {
          className: "toast-success-container",
        });
        setIsDelete(true);
      },
      error: (error: any) => {
        toast(error as any, { className: "toast-error-container" });
      },
    });
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: '_id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: true,
        enableHiding:true,
        size: 80,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        //  ...getCommonEditTextFieldProps(cell),
        }),
      }, {
        accessorKey: 'customer',
        header: 'Customer',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
         // ...getCommonEditTextFieldProps(cell),
          type: 'number',
        }),
      },
      {
        accessorKey: 'referenceNumber',
        header: 'Reference Number',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
         // ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
         // ...getCommonEditTextFieldProps(cell),
          type: 'email',
        }),
      }
     
    ],
    [],
  );

  useEffect(() => {
  
    fetchCustomers(1,0,100);

  },[isEditd,isDelete,isSaved]);
  // useEffect(() => {
   
  // }, [isEdit]);
  return (
    <>
      <Grid container>
          <Grid item xs={12}>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 100,
          },
        }}
        columns={columns}
        data={tableData}
        enablePagination
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
             <Tooltip arrow placement="left" title="View">
              <IconButton onClick={() =>{ 
                setReadOnly(true);
                setCreateModalOpen(true);
              setRowData(row.original);
              console.log("data==>",row.original);
            }
            }>
                 <VisibilityIcon />
              </IconButton>
           </Tooltip>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton color="primary" onClick={() =>{ 
              setIsEdit(true);
              setCreateModalOpen(true);
              setRowData(row.original);
              setReadOnly(false);
            console.log("data==>",row.original);
            }
            }>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() =>{ 
            
            handleDeleteRow(row.original);
            
           
            console.log("data==>",row.original);
            }
            }>
                <Delete />
              </IconButton>
            </Tooltip>
           
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
       
           <IconButton style={{color:"gray"}} onClick={() => {
            setRowData(null);
            setReadOnly(false);
            setIsEdit(false);
            setCreateModalOpen(true);
           }}>
           <ControlPointIcon />
         </IconButton>
        )}
      />
      </Grid>
      </Grid>
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
         isEdit={isEdit}
         rowData={rowData}
         readOnly={readOnly}
        onClose={handleModalClose}
        handleSubmit ={handleSubmit}
      />
    </>
  );
};


export default Example;
