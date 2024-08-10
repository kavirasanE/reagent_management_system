import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TestDoneForm from "../components/TestDoneForm";
import ReagentLogo from "../assets/logo.png"

const drawerWidth = 200;

function Layout({ props, children }) {
  // console.log(props)
  // const { props } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openTestDoneForm, setOpenTestDoneForm] = React.useState(false);

  const handleTestDataForm = () => {
    setOpenTestDoneForm(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerMenu = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
    },
    {
      id: 2,
      title: "Reagent Table",
      path: "/reagenttable",
    },
    {
      id: 3,
      title: "Test Done",
      path: "/testdone",
    },
    {
      id: 4,
      title: "About RIS",
      path: "/aboutris",
    },
  ];
  const drawerMenu1 = [
    {
      id: 1,
      title: "Add Stocks",
      path: "/addstocks",
    },
    {
      id: 2,
      title: "Admin",
      path: "/admin",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {drawerMenu.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={text.path}>
                <ListItemText primary={text.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerMenu1.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={text.path}>
                <ListItemText primary={text.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    props !== undefined ? () => props().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex   justify-between items-center gap-40">
            <Typography
              variant="h5"
              noWrap
              component="div"
              fontWeight="semibold"
              textAlign="center"
            >
              Reagent Inventory Management System
            </Typography>
            <button
              onClick={handleTestDataForm}
              className="p-2 drop-shadow-xl shadow-xl bg-gray-200 text-black hover:scale-95 font-bold rounded-sm"
            >
              Test Data Form
            </button>
          </div>
          <div>
            <Modal
              open={openTestDoneForm}
              onClose={() => setOpenTestDoneForm(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <TestDoneForm />
              </Box>
            </Modal>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop:"5px"
            },
          }}
          open
        >
          <p className="absolute font-bold text-xl">
          <img src={ReagentLogo} className="w-40 h-20 object-cover mb-2 "/>
          </p>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  props: PropTypes.func,
};

export default Layout;
