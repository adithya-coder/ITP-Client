import React, { FC, useCallback,useEffect, useMemo, useState } from 'react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import customTheme from "../hooks/custom-theme.module.css";
import * as Yup from 'yup';
import metaDataStyles from "../hooks/UseStyles";
import {
  Grid,
  Paper,
  Container,
  Typography,
  CssBaseline,
  LinearProgress,
  Switch,
} from "@material-ui/core";
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
import { toast } from "react-toastify";
import Modal from "@material-ui/core/Modal";
import * as yup from "yup";
import { AddCircle } from "@material-ui/icons";
import FormikMultiSelect from "../../common/misc/FormComponents/FormikMultiSelect";
import TextFormField from "../../common/misc/FormComponents/TextFormField";
import FormikAutocomplete from "../../common/misc/FormComponents/FormikAutocomplete";
import SubmitBtn from "../../common/misc/FormComponents/SubmitBtn";

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    state: string;
  };
//example of creating a mui dialog modal for creating new rows
 const CreateNewAccountModa = (props: any) => {

    const {open,onClose,columns,handleSubmit, isEdit,rowData,readOnly} =props;
    const classes:any = metaDataStyles();
    const [dataLoading, setDataLoading] = useState(false);
    const [cusType, setCusType] = useState<any>([ 
        { value: 1, label: "New" },
        { value: 3, label: "Nomal" },
        { value: 2, label: "Daily" }]);
        const [salesPerson, setSalesPerson] = useState<any>([ 
          { value: 1, label: "Adithya" },
          { value: 2, label: "Heshan" },
          { value: 3, label: "Gayan" }]);

    const [customerDetails, setCustomerDetails] = useState<any>(null)
    const [saveAs, setSaveAs] = useState<boolean>(false)
  
    useEffect(() => {
      if(isEdit === true || readOnly === true ){
        setCustomerDetails(rowData);
        console.log("rowData",rowData);
      }else{
        setCustomerDetails(null);
      };
 },[isEdit,readOnly]);

 function formatDate(date:any) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
};
     const userSchema = yup.object().shape({
      referenceNumber: yup.string().required('Requird').typeError('Field Must Be String'),
      date:yup.date().required('Requird').typeError('Field Must Be Date'),
      title: yup.string() .required('Requird').typeError('Field Must Be String'),
      nic: yup.number().required('Requird').typeError('Field Must Be Number'),
      mobile: yup.number().required('Requird').typeError('Field Must Be Number'),
      email: Yup.string().email('Invalid email ').required('Required'),
      customer: yup.string().required('Requird').typeError('Field Must Be String'),
     customerType:yup.number().required('Requird').typeError('Field Must Be Number'),
      });
      const today = new Date().toISOString().slice(0, 10);

    return (
    <>
     <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="right-modal-title"
      aria-describedby="add-edit-supplier"
      disableScrollLock
      className={`${classes.modalRight} primaryTextLight inputLight themeChangeLight`}
    >
       <div className={`${classes.modalPaper}`}
      style={{backgroundColor: '#ffffff',}}
    >
      <h2 id="simple-modal-title">
      {readOnly? ("View Customer" ) : isEdit?  ("Update Customer") :  ("New Customer") }
        </h2>

      <div className={classes.w100}>
      <Formik
         enableReinitialize
        validationSchema={userSchema}
         onSubmit={(values) => {
      
          handleSubmit(values);
       
          
         }}

         initialValues={{
          id: customerDetails? customerDetails._id:0,
          date: customerDetails? formatDate(customerDetails.date) : formatDate(today),
          referenceNumber:customerDetails? customerDetails.referenceNumber: "",
          title:customerDetails? customerDetails.title:"",
          nic:customerDetails? customerDetails.nic:null,
          mobile:customerDetails? customerDetails.mobile:null,
          email:customerDetails? customerDetails.email:"",
          customer:customerDetails? customerDetails.customer:"",
          customerType:customerDetails? customerDetails.customerType : '',
          salesPerson:customerDetails? customerDetails.salesPerson  :'',
          address: customerDetails? customerDetails.address:"",
        } }
       >
       
         {({ values,}) => (
                <Form className={classes.form}>
                  <Paper
                    className={`${classes.paperSection}`}
                    style={{backgroundColor: '#3561b5',}}
                  >
                    <Typography>{"Customer Details"}</Typography>
                  </Paper>

                  <Paper
                    className={`${classes.paper} `}
                    style={{backgroundColor: '#ffffff'}}
                  >
                    <Container component="main" maxWidth="lg">
                      <CssBaseline />
                      <Grid container spacing={2} className={classes.mb10}>
                        <Grid item xs={12} sm={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Date"+" *"}</Typography>
                                  <Field
                                    type='date'
                                    disabled={readOnly}
                                    name="date"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Reference No"+" *"}</Typography>
                                  <Field
                                  type='text'
                                    disabled={readOnly}
                                    name="referenceNumber"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    
                                  />
                                  
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Type"+" *"}</Typography>
                                  <Field
                                    disabled={readOnly}
                                    name="customerType"
                                    size="small"
                                    component={FormikAutocomplete}
                                    className={{color: '#5e5e5e', backgroundColor: '#e4e6eb',}}
                                    options={cusType}
                                    label={"Select"}
                                    textfieldprops={{
                                      fullWidth: true,
                                      variant: "outlined",
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </Paper>
                  <Paper
                    className={`${classes.paper} `}
                    style={{backgroundColor: '#ffffff'}}
                  >
                    <Container component="main" maxWidth="lg">
                      <CssBaseline />
                      <Grid container spacing={2} className={classes.mb10}>
                        <Grid item xs={12} sm={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Customer Name"+" *"}</Typography>
                                  <Field
                                    type='text'
                                    disabled={readOnly}
                                    name="customer"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Title"+" *"}</Typography>
                                  <Field
                                  type='text'
                                    disabled={readOnly}
                                    name="title"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    
                                  />
                                  
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"NIC"+" *"}</Typography>
                                  <Field
                                  type='text'
                                    disabled={readOnly}
                                    name="nic"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </Paper>
                  <Paper
                    className={`${classes.paper} `}
                    style={{backgroundColor: '#ffffff'}}
                  >
                    <Container component="main" maxWidth="lg">
                      <CssBaseline />
                      <Grid container spacing={2} className={classes.mb10}>
                        <Grid item xs={12} sm={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Mobile"+" *"}</Typography>
                                  <Field
                                    type='number'
                                    disabled={readOnly}
                                    name="mobile"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Email"+" *"}</Typography>
                                  <Field
                                  type='text'
                                    disabled={readOnly}
                                    name="email"
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    
                                  />
                                  
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                  <Typography>{"Sales Person"+" "}</Typography>
                                  <Field
                                    disabled={readOnly}
                                    name="salesPerson"
                                    size="small"
                                    component={FormikAutocomplete}
                                    className={{color: '#5e5e5e', backgroundColor: '#e4e6eb',}}
                                    options={salesPerson}
                                    label={"Select"}
                                    textfieldprops={{
                                      fullWidth: true,
                                      variant: "outlined",
                                    }}
                                  />
                             
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </Paper>
                  <Paper
                    className={`${classes.paper} `}
                    style={{backgroundColor: '#ffffff'}}
                  >
                    <Container component="main" maxWidth="lg">
                      <CssBaseline />
                      <Grid container spacing={2} className={classes.mb10}>
                        <Grid item xs={12} sm={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                              <Grid container spacing={2}>
                             
                                  <Typography>{"Address"+" "}</Typography>
                                  <Field
                                  multiline
                                  rows={4}
                                    disabled={readOnly}
                                    name="address"
                                    placeholder={("Address")}
                                    className={customTheme.customTextAreaContent}
                                    style={{backgroundColor: '#e4e6eb',}}
                                    component={TextFormField}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                />
                                </Grid>
                               
                               
                              
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Container>
                  </Paper>
                  <Grid
                    container
                    className={`${classes.footer} ${classes.justifyEnd}  ${classes.mt20}`}
                    spacing={2}
                  >
                    <Grid item className={classes.dFlex}>
                      <Button
                        onClick={ 
                          onClose
                        }
                        size="medium"
                        id="testBtn"
                        className={`${classes.mr10} ${customTheme.cancelBtn}`}
                        variant="outlined"
                        style={{
                          color:"white",
                          backgroundColor: '#3561b5',
                     
                        }}
                      >
                        {"Cancel"}
                      </Button>
                   
                      <SubmitBtn
                        onClick={() =>{ setSaveAs(true)
                          
                        }}
                        disabled={readOnly}
                        btnText={readOnly ? ("NEXT") : ("Save")}
                        loading={dataLoading}
                        w="100%"
                      />
                    </Grid>
                  </Grid>
               
         </Form>
         )}
       </Formik>
     </div>
  </div>

      </Modal>
    </>
     
    );
  };
  export default CreateNewAccountModa;