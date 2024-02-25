import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { OrderDetailsModel, OrderHeaderModel } from "../../../interfaces";
import React from "react";

interface Props {
    orderData: OrderHeaderModel;
}

const CollapsibleRow = ({ orderData }: Props) => {

    const [open, setOpen] = useState(false);

    // date formatter
    const formatDate = (utcDate: string) => {
        const date = new Date(utcDate);

        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

  return (
    <React.Fragment>
        {/* <TableCell colSpan={8}> */}
        <TableRow 
        // sx={{ marginBottom: "0px" }}
        // sx={{ '& > *': { borderBottom: 'unset' } }}
        >
            <TableCell align="center">
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{ justifyContent: 'center' }}
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell align="center">{orderData.orderHeaderId}</TableCell>
            <TableCell align="center">{orderData.contactName}</TableCell>
            <TableCell align="center">{orderData.contactPhoneNumber}</TableCell>

            <TableCell align="center">{orderData.orderTotal}</TableCell>
            <TableCell align="center">{orderData.totalItems}</TableCell>
            <TableCell align="center">{formatDate(orderData.orderDate)}</TableCell>
            <TableCell align="center">{orderData.status}</TableCell>
        </TableRow>

        <TableRow>
            <TableCell 
            colSpan={8}
            style={{ paddingBottom: 0, paddingTop: 0 }}
            >
                <Collapse in={open} unmountOnExit >
                    <Box marginBottom={4} marginTop={2}>
                        <Typography>Order details</Typography>
                        <Table size="small" sx={{ width: "100%" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={10} width="60%">Name</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderData.orderDetails.map((item: OrderDetailsModel, index) => (
                                    <TableRow key={index}>
                                        <TableCell colSpan={10} width="60%">{item.itemName}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>

        {/* </TableCell> */}
    </React.Fragment>
  )
}

export default CollapsibleRow