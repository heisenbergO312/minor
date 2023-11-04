import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <div>
      <TwitterIcon style={{margin:"0 0.5em 0 0.5em"}} />
     <LinkedInIcon style={{margin:"0 0.5em 0 0.5em"}}/>
     <InstagramIcon style={{margin:"0 0.5em 0 0.5em"}}/>
     </div>
    </div>
  )
}

export default Footer