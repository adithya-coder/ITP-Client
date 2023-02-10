/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import { FormControl, Select, InputLabel, Menu, ListItemText, ListItem, Collapse, MenuItem, FormHelperText, Card } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import formComponentsStyles from '../hooks/UserStyles';
import { getIn } from 'formik';
import { ChevronRight, ExpandLess, ExpandMore } from '@material-ui/icons';
import customTheme from "../../../pages/hooks/custom-theme.module.css";
import {ThemeContext} from "../../../ThemeContext";

const CascaderSelect = (props: any) => {

    const { error, helperText, ...field } = fieldToTextField(props);
    const { name, value } = field;
    const [defaultValue, setDefaultValue] = React.useState<any>(value ? value : "");
    const [selectedOption, setSelectedOption] = React.useState<any>(null);
    const [openCollaps, setOpenCollaps] = React.useState<string[]>([]);
    const { textfieldprops, options, form, label, required, setFieldValue, methodChange } = props;
    const classes = formComponentsStyles();


    const errorText =
        getIn(form.touched, name ? name : "") && getIn(form.errors, name ? name : "");

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (option: any) => {
        if(!option.readOnly){

            setSelectedOption(option);
            setDefaultValue(option.value);
            setFieldValue(name, {value:option.value,code:option.code});
            setAnchorEl(null);
        }
        
        if (methodChange) {
            methodChange({value:option.value,code:option.code})
        }

    };

    useEffect(() => {
        if(value){
            options.every((option:any) => {
                if(selectedOption === null){
                    getSelectedOption(option);
                    return true;
                }
                else{
                    return false;
                }
            });
        }
      }, [options, value]);

    const getSelectedOption = (option:any) => {
        if(option.value === value){
            setSelectedOption(option);
            setFieldValue(name, {value:option.value,code:option.code});
        }
        else if(option.children && option.children.length > 0){
            option.children.every((subOption:any) => {
                if(selectedOption === null){
                    openCollaps.push(option.value);
                    getSelectedOption(subOption);
                    return true;
                }
                else{
                    return false;
                }
            });
        }
    }

    const handleCollapsClick = (value: string) => {

        var tmp: any = [...openCollaps];
        var index = tmp.indexOf(value);
        if (index === -1) {
            tmp.push(value);
        }
        else {
            tmp.splice(index, 1);
        }
        setOpenCollaps(tmp);
    };

    const generateList: any = (option: any, index: number) => {
        option.code = option.code ? option.code : !isNaN(Number(option.value)) && (option.value.toString().length === 1) ? '0'+option.value : option.value;
        if(option.children && option.children.length > 0){
            option.children.forEach((subOption:any) => {
                subOption.code = (!isNaN(Number(subOption.value)) && (subOption.value.toString().length === 1)) ? option.code+'0'+subOption.value : option.code+''+subOption.value;
                subOption.path = option.path ? option.path+' / '+subOption.label+' ('+subOption.value+')' : option.label+' ('+option.value+') / '+subOption.label+' ('+subOption.value+')';
            });
        }

        return option.children && option.children.length > 0 ?
            <div>
                <ListItem style={{ minWidth: 250, }} button>
                    <ListItemText onClick={() => { handleSelect(option) }} primary={option.label+' ('+option.code+')'} />
                    {openCollaps.indexOf(option.value.toString()) !== -1 ? index % 2 === 0 ? <ChevronRight onClick={() => { handleCollapsClick(option.value.toString()) }} /> : <ExpandLess onClick={() => { handleCollapsClick(option.value.toString()) }} /> : <ExpandMore onClick={() => { handleCollapsClick(option.value.toString()) }} />}
                </ListItem>
                <Card className={cascadeMenuSubItem} style={{position:'fixed', margin:'5px', marginLeft: index % 2 === 0 ? '251px' : '0px', marginTop: index % 2 === 0 ? '-48px' : '0px', zIndex:index+2}}>
                    {option.children.map((subOption: any) => (
                        <Collapse in={openCollaps.indexOf(option.value.toString()) !== -1} timeout="auto" unmountOnExit>
                            {generateList(subOption, index + 1)}
                        </Collapse>
                    ))}
                </Card>
            </div>
            :
            <ListItem className={customTheme.cascadeMenuSubItem} onClick={() => { handleSelect(option) }} style={{ minWidth: 250, }} button>
                <ListItemText primary={option.label+' ('+option.code+')'} />
            </ListItem>
    }

    const {customStyles} = useContext(ThemeContext);

    const {inputFill, customSelect, cascadeMenu, cascadeMenuSubItem} = customStyles

    return (
        <FormControl size="small" error={!!errorText} className={`${classes.formSelectors} ${inputFill}`} style={{ width: "100%" }}>
            <InputLabel style={{ marginTop: -7, marginLeft: 14, zIndex: 1 }}>{label + (required ? ' *' : '')}</InputLabel>
            <Select size="small" className={customSelect} {...field} {...props} {...textfieldprops} value={defaultValue} style={{ minWidth: 250 }} onClick={handleClick} inputProps={{ readOnly: true }}>
                {selectedOption ? <MenuItem value={selectedOption.value}>{selectedOption?.path ? selectedOption.path : selectedOption.label + ' ('+selectedOption.value+')'}</MenuItem> : null}
            </Select>
            <Menu
                className={cascadeMenu}
                style={{ height: 480 }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                    vertical: -60,
                    horizontal: 'left',
                }}
            >
                {options.length > 0 ?
                    options.map((option: any, index: number) => (
                        generateList(option, index)
                    ))
                    :
                    <ListItem onClick={handleClose} className={cascadeMenuSubItem} style={{ width: 250 }}>
                        <ListItemText style={{ textAlign: 'center', color: 'grey' }} primary={'No data available'} />
                    </ListItem>
                }
            </Menu>
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    );
}

export default React.memo(CascaderSelect);