import * as React from 'react';
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import { IconButton, Tooltip } from '@mui/material';


export default function SocialLinks() {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {content.contact.socials.map((social, index) => (
                <Tooltip key={index} title={social.alt} arrow sx={{
                    '& .MuiTooltip-tooltip': {
                        backgroundColor: '#333',
                        color: '#fff',
                        fontSize: '14px',
                        padding: '6px 12px',
                    },
                    '.MuiTooltip-arrow': {
                        color: '#333',
                    },
                }}
                    placement="left"
                >
                    <IconButton
                        color="inherit"
                        size="small"
                        href={social.href}
                        aria-label={social.alt}
                        sx={{ alignSelf: 'center', color: 'white' }}
                    >
                        <img
                            src={social.img}
                            alt={social.alt}
                            style={{ width: 24, height: 24 }}
                        />
                    </IconButton>
                </Tooltip>
            ))}
        </div>
    );
};
