import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Posts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhotoSizeSelectActualIcon />
      </ListItemIcon>
      <ListItemText primary="Photos" />
    </ListItem>    
  </div>
);