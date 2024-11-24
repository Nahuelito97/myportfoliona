import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import SocialLinks from './SocialLinks';
import { IconButton, Tooltip, Typography, Link } from '@mui/material';


function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'white' }} align="center" mt={1}>
      {'Copyright © '}
      <Link href="">{content.nav.logo}&nbsp;</Link>
      {new Date().getFullYear()} 🚀
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer class="tj-footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: { sm: 'center', md: 'left' },
                color: 'white',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  borderColor: 'divider',
                  color: 'white',
                }}
              >
                <div>
                  <Copyright sx={{ color: 'white' }} />
                </div>

                <SocialLinks />
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </footer>
  );
}