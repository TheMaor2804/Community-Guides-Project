import MuiMenu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import ROUTES from "../../../routes/routesModel";
import MenuLink from "../../../routes/components/MenuLink";
import NavBarItem from "../../../routes/components/NavbarItem";


const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useCurrentUser();

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <NavBarItem
          to={ROUTES.ABOUT}
          label="About"
          onClick={onClose}
        />
        <NavBarItem
          to={ROUTES.CONTACT}
          label="Contact"
          onClick={onClose}
        />
        {user && <NavBarItem
          label={"Create Guide"}
          to={ROUTES.CREATE_GUIDE}
          onClick={onClose}
        />}
        {user && user.isAdmin &&
          <NavBarItem
            label={"CRM"}
            to={ROUTES.CRM}
            onClick={onClose}
          />}
        {user && (user.isMod || user.isAdmin) &&
          <NavBarItem
            label={"Mod Page"}
            to={ROUTES.MOD_PAGE}
            onClick={onClose}
          />}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
