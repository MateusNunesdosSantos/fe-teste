import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ProductForm from '../../components/reduxForm/ProductForm';

import Counter from '../../components/Counter';

import './styles.css';

const products = [
  {
    id: 1,
    title: 'AiPods Apple Fones de ouvido',
    price: 1499.99,
    portion: 'Em até 12x de R$ 124,92',
    discount: 'R$ 1.349 à vista(10% de desconto)',
    img: '/img/produto-01.jpeg',
  },
  {
    id: 2,
    title: 'Capa de silicone para iPhone 8/7',
    price: 299.0,
    portion: 'Em até 12x de R$ 24,92',
    discount: 'R$ 269,10 à vista(10% de desconto)',
    img: '/img/produto-02.jpeg',
  },
  {
    id: 3,
    title: 'Apple Pencil',
    price: 729.0,
    portion: 'Em até 12x de R$ 60,75',
    discount: 'R$ 656,10 à vista(10% de desconto)',
    img: '/img/produto-03.jpeg',
  },
  {
    id: 4,
    title: 'Magic Mouse 2 - Prateado',
    price: 549.0,
    portion: 'Em até 12x de 45,75',
    discount: 'R$ 494,10 à vista(10% de desconto)',
    img: '/img/produto-04.jpeg',
  },
  {
    id: 5,
    title: 'Caixa prateada de aliminio com pulseira esportiva branca',
    price: 2899.0,
    portion: 'Em até 12x de 241,58',
    discount: 'R$ 2.609,00 à vista(10% de desconto)',
    img: '/img/produto-05.jpeg',
  },
  {
    id: 6,
    title: 'Cabo de lightning para USB(1m)',
    price: 149.0,
    portion: 'Em até 12x de 12,42',
    discount: 'R$ 134,10 à vista(10% de desconto)',
    img: '/img/produto-06.jpeg',
  },
  {
    id: 7,
    title: 'Smart Keybord para iPod Pro 12,9 polegadas - inglês(EUA)',
    price: 1099.0,
    portion: 'Em até 12x de 91,58',
    discount: 'R$ 989,10 à vista(10% de desconto)',
    img: '/img/produto-07.jpeg',
  },
  {
    id: 8,
    title: 'Carregador USB de 5W Apple',
    price: 149.0,
    portion: 'Em até 12x de 12,42',
    discount: 'R$ 134,10 à vista(10% de desconto)',
    img: '/img/produto-08.jpeg',
  },
];

const Products = () => {
  return (
    <Box p={10}>
      <Typography variant="h5" className="titlePro" style={{ fontWeight: 300 }}>
        Produtos
        <Divider />
      </Typography>

      <Box my={10}>
        <Grid container spacing={5}>
          {products.map((product) => (
            <Grid
              key={product.id}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className="card"
            >
              <Box>
                <img
                  style={{ width: '80%' }}
                  alt={product.title}
                  src={product.img}
                />
              </Box>
              <div className="box-area">
                <Box>
                  <Typography className="textProd">{product.title}</Typography>
                  <Typography variant="h5" className="listPrice">
                    R${product.price}
                  </Typography>
                  <Typography className="textDis">{product.portion}</Typography>
                  <Typography className="textDis">
                    {product.discount}
                  </Typography>
                </Box>
                <div className="couterUp">
                  <Counter />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={10}>
        <Typography
          className="titlePro"
          variant="h5"
          color="textPrimary"
          style={{ fontWeight: 300 }}
        >
          Dados do cliente
        </Typography>
        <Divider />
        <Box mt={5}>
          <ProductForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
