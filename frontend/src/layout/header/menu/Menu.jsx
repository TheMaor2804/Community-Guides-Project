import MuiMenu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import useUsers from "../../../users/hooks/useUsers";
import ROUTES from "../../../routes/routesModel";
import MenuLink from "../../../routes/components/MenuLink";


const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useCurrentUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

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

        {!user && (
          <>
            <MenuLink
              text="login"
              to={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="signup"
              to={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink
              text="logout"
              to={ROUTES.ROOT}
              onClick={onLogout}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
