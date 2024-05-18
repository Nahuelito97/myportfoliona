import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
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
            <div class="footer-logo-box">
              <a href="#home"><img src="assets/img/logo/logo.png" alt="" /></a>
            </div>
            <div class="copy-text">
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}