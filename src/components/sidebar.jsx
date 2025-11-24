import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import "./sidebar.css";

export default function sidebar() {
  return (
    <>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: "var(--sidebar-bg)",
            position: "fixed",
            top: "50px",
            left: 0,
            bottom: 0, 
            // height: "calc(100vh - 50px)",
            // height: "100vh",
            width: "200px",
            borderRight: "1px solid var(--sidebar-border)",
            zIndex: 999,
            transition: "0.3s ease",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px 18px",
              fontSize: "15px",
              borderRadius: "8px",
              color: "var(--text-primary)",
              transition: "0.2s ease",
              "&:hover": {
                background: "var(--hover-bg)",
                color: "var(--hover-text)",
              },
            },
          }}
        >
          <MenuItem><i className="fas fa-tachometer-alt" style={{padding:"10px"}}></i> แดชบอร์ด </MenuItem>
          <MenuItem><i className="fas fa-clipboard" style={{padding:"10px"}}></i> รายงาน  </MenuItem>
          <MenuItem><i className="fas fa-user" style={{padding:"10px"}}></i> ผู้ใช้งาน </MenuItem>
          <MenuItem><i className="fas fa-cog" style={{padding:"10px"}}></i> ตั้งค่า </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
