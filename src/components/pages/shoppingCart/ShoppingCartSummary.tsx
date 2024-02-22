import { useEffect, useState } from "react"
import { CartItemModel } from "../../../interfaces"
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography, useTheme } from "@mui/material";

interface Props {
    items: CartItemModel[];
}

const ShoppingCartSummary = ({ items }: Props ) => {

    // Styling
    const { palette } = useTheme();
    const contrast = palette.primary.contrastText;

    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        if (items) {
            const sum = items.reduce((subtotal, item) => {
                return subtotal += (item.quantity * item.menuItem.priceInUSD)
            }, 0);
            setSubtotal(sum);
        }
    }, [items])

  return (
    <TableContainer>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none' }}>
                        <Typography variant='body1' color={contrast}>
                        Subtotal
                        </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: 'none' }} align="right">
                        <Typography variant='body2' color={contrast}>
                        $ {subtotal}
                        </Typography>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography variant='body1' color={contrast}>
                        Envio
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant='body2' color={contrast}>
                        $ {(subtotal > 10000) ? 0 : 2000} 
                        </Typography>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell sx={{ borderBottom: 'none' }}>
                        <Typography variant='body1'color={contrast}>
                        Total
                        </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: 'none' }} align="right">
                        <Typography variant='body2' color={contrast}>
                        $ {(subtotal > 10000) ? subtotal : subtotal+2000}
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ShoppingCartSummary