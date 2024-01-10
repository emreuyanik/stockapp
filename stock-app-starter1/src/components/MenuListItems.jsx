import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <SpaceDashboardIcon sx={{ color: "white" }} />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    icon: <ShoppingCartIcon sx={{ color: "white" }} />,
    title: "Purchases",
    url: "/stock/purchases/",
  },
  {
    icon: <AttachMoneyIcon sx={{ color: "white" }} />,
    title: "Sales",
    url: "/stock/sales/",
  },
  {
    icon: <StoreIcon sx={{ color: "white" }} />,
    title: "Firms",
    url: "/stock/firms/",
  },
  {
    icon: <StarsIcon sx={{ color: "white" }} />,
    title: "Brands",
    url: "/stock/brands/",
  },
  {
    icon: <InventoryIcon sx={{ color: "white" }} />,
    title: "Products",
    url: "/stock/products/",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <List>
      {icons.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          onClick={() => navigate(item.url)}
          sx={{
            color: "white", 
            "&:hover": {
              
              color: "red", 
              "& .MuiSvgIcon-root": {
                color: "red", 
              },
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
