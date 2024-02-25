import { Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material"
import { OrderHeaderModel } from "../../../interfaces"
import CollapsibleRow from "./CollapsibleRow"

interface Props {
    orderHeaders: OrderHeaderModel[]
}

const CollapsibleTable = ({ orderHeaders }: Props) => {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableCell align="center"></TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Status</TableCell>
            </TableHead>
            <TableBody>
                {orderHeaders.map((header, index) => (
                    <CollapsibleRow key={index} orderData={header}/>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default CollapsibleTable