import { Box } from '@mui/system'
import React from 'react'
import Avatar from '@mui/material/Avatar';

export default function LinkItems() {
  return (
    <Box>
   <Box>
   {/* <Avatar alt="image" src="/static/images/avatar/1.jpg" /> */}
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
   </Box>
    </Box>
  )
}
