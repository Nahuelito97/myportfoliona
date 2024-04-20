import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

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
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>

                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://github.com/Nahuelito97"
                        aria-label="GitHub"
                        sx={{
                            alignSelf: 'center',
                            "&:hover": {
                                color: 'teal.500',
                                backgroundColor: 'teal.500',
                            },
                        }}
                        target="_blank"
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://twitter.com/nahuelitodev"
                        aria-label="X"
                        sx={{
                            alignSelf: 'center',
                            "&:hover": {
                                color: 'teal.500',
                                backgroundColor: 'teal.500',
                            },
                        }}
                        target="_blank"
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/in/nahuewagner/"
                        aria-label="LinkedIn"
                        sx={{
                            alignSelf: 'center',
                            "&:hover": {
                                color: 'teal.500',
                                backgroundColor: 'teal.500',
                            },
                        }}
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}

<Box sx={{ display: { sm: '', md: 'none' } }}>
    <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ minWidth: '30px', p: '4px' }}
    >
        <MenuIcon />
    </Button>
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
            sx={{
                minWidth: '60dvw',
                p: 2,
                backgroundColor: 'background.paper',
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    flexGrow: 1,
                }}
            >
                <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 text-white">
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                            }`}
                        onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                        }}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </Box>
    </Drawer>
</Box>