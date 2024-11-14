import { AppSidebar } from "@/components/ui/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AccountPage from "@/imports/account/Page/AccountPage";
import AuditLogPage from "@/imports/auditLog/page/AuditLogPage";
import ConnectionPage from "@/imports/connection/page/ConnectionPage";
import NotificationPage from "@/imports/notification/page/NotificationPage";
import { UserStore } from "@/zustand/UserStore";
import {
  Bell,
  CircleUserRound,
  CircleUserRoundIcon,
  ExternalLink,
} from "lucide-react";

const DailogPage = () => {
  const { userData } = UserStore();

  const tabs = [
    {
      title: "My Account",
      url: "account",
      icon: CircleUserRound,
      component: <AccountPage />,
    },
    {
      title: "My Notification",
      url: "notification",
      icon: Bell,
      component: <NotificationPage />,
    },
    {
      title: "My Connection",
      url: "connection",
      icon: ExternalLink,
      component: <ConnectionPage />,
    },

    {
      title: "Audit Log",
      url: "auditlog",
      icon: CircleUserRoundIcon,
      component: <AuditLogPage />,
    },
  ];

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <div className=" absolute left-[215px]  top-0  h-full w-[80%]">
        {tabs?.find((i) => i?.url === userData?.tab)?.component}
      </div>
    </div>
  );
};

export default DailogPage;
