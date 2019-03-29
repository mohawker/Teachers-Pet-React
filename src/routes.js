// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LiveTv from "@material-ui/icons/LiveTv";
import People from "@material-ui/icons/People";
import Assessment from "@material-ui/icons/Assessment";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/liveclassroom",
    name: "Live Classroom",
    rtlName: "ملف تعريفي للمستخدم",
    icon: LiveTv,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    rtlName: "طباعة",
    icon: People,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Reviews",
    rtlName: "الرموز",
    icon: Assessment,
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
