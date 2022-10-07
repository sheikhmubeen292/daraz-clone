import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useCart } from "react-use-cart";



const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));


function Cart() {
  const [open, setOpen] = useState(false);
  // const { enqueueSnackbar }: any = useSnackbar();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  
  if (isEmpty)
    return (
      <Box sx={{ padding: "5rem 0rem", height: "92vh" }}>
        <Typography
          mt={10}
          mb={36}
          sx={{
            color: "#fff",
            fontSize: { xs: "28px", md: "38px" },
            fontFamily: "Light Bold",
            textAlign: "center",
          }}
        >
          Your Cart is Empty
        </Typography>
      </Box>
    );
  return (
    <Box pt={6} pb={10} sx={{ minHeight: "90vh", background: "black" }}>
      <Container>
        <Box mb={4}>
          <Button onClick={() => emptyCart()}>Clear cart</Button>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            background: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableBody>
              {items.map(
                (
                  { id, image, price, name, quantity, totalQuantiy },
                  i
                ) => {
                  return (
                    <TableRow key={id + i}>
                      <StyledTableCell>
                        <img src={`http://localhost:5000/uploads/${image}`} alt="" height="100px" width="100px" />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography
                          color="#fff"
                          fontSize="16px"
                          fontWeight="600"
                        >
                          {name}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color="#fff" fontSize="16px">
                          {price}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography
                            sx={{
                              paddingY: "2px",
                              width: "35px",
                              marginRight: "5px",
                              border: "1px solid #A1A1A5",
                              borderRadius: "5px",
                              color: "#fff",
                              fontSize: "18px",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => updateItemQuantity(id, quantity - 1)}
                          >
                            -
                          </Typography>
                          <Typography
                            sx={{
                              paddingY: "2px",
                              width: "35px",
                              border: "1px solid #A1A1A5",
                              borderRadius: "4px",
                              color: "#fff",
                              fontSize: "18px",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              // if (quantity >= totalQuantiy) {
                              //   return -enqueueSnackbar(
                              //     `You can not select more than ${quantity}`,
                              //     {
                              //       variant: "error",
                              //     }
                              //   );
                              // }
                              updateItemQuantity(id, quantity + 1);
                            }}
                          >
                            +
                          </Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color="#fff" fontSize="16px">
                          Quantity ({quantity})
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography
                          sx={{
                            paddingY: "2px",
                            width: "35px",
                            background: "#423550",
                            borderRadius: "4px",
                            color: "#fff",
                            fontSize: "18px",
                            textAlign: "center",
                            cursor: "pointer",
                            "&:hover": {
                              background: "#423550a1",
                            },
                          }}
                          onClick={() => {
                            removeItem(id)
;
                          }}
                        >
                          X
                        </Typography>
                      </StyledTableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box textAlign="center">
          <Typography
            mt={4}
            mb={2}
            sx={{
              color: "#fff",
              fontSize: { xs: "24px", md: "32px" },
              // textAlign: "right",
            }}
          >
            Total Price: {cartTotal}
          </Typography>
   
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;