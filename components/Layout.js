import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/styles';
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazone</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazone</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All right reserved Amazone.
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
