import React from "react";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
// import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

export default function folder({ folder }) {
  return (

    <Typography noWrap >
   <Link
      component="button"
      variant="body2"
      noWrap
      >
        <CreateNewFolderIcon />
        {folder.name}
      </Link>
    </Typography>
   

  );
}
