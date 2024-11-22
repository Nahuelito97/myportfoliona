import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import SocialLinks from './SocialLinks';

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
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{
                    justifyContent: 'left',
                    color: 'white',
                  }}
                >
                  <IconButton
                    color="inherit"
                    size="small"
                    href="https://github.com/mui"
                    aria-label="GitHub"
                    sx={{ alignSelf: 'center', color: 'white' }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    size="small"
                    href="https://x.com/MaterialUI"
                    aria-label="X"
                    sx={{ alignSelf: 'center', color: 'white' }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    size="small"
                    href="https://www.linkedin.com/company/mui/"
                    aria-label="LinkedIn"
                    sx={{ alignSelf: 'center', color: 'white' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </footer>
  );
}