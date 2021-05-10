import React from 'react';
import { Box, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import './styles.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    boxShadow: 'none',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  Button: {
    background: '#FF9800',
  },
});

const Cart = () => {
  const classes = useStyles();

  return (
    <>
      <div className="main">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              <span className="nameClient">John Doe,</span>
            </Typography>
            <Typography className="text">
              Sua compra no valor <span className="price">R$ 299,00</span>
              <br /> foi finalizada com sucesso
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img className="img" alt="purchase" src="/img/purchase.png" />
            </Box>
          </CardContent>
          <CardActions>
            <Button className={classes.Button} size="larg">
              <Link className="link" to="/">
                Iniciar nova compra
              </Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Cart;
