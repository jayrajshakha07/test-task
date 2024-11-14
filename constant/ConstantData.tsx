import AccountPage from "@/imports/account/Page/AccountPage";
import AuditLogPage from "@/imports/auditLog/page/AuditLogPage";
import HelpIcon from "@/imports/connection/assets/HelpIcon";
import SendIcon from "@/imports/connection/assets/SendIcon";
import StarIcon from "@/imports/connection/assets/StarIcon";
import ConnectionPage from "@/imports/connection/page/ConnectionPage";
import NotificationPage from "@/imports/notification/page/NotificationPage";
import {
  Bell,
  CircleUserRound,
  CircleUserRoundIcon,
  ExternalLink,
} from "lucide-react";

export const ConnectionLinks = [
  {
    icon: <SendIcon />,
    text: "Browse connections in Gallery",
  },
  {
    icon: <SendIcon />,
    text: "Develop or manage integrations",
  },
  {
    icon: <HelpIcon />,
    text: "Learn more about connections",
  },
  {
    icon: <StarIcon />,
    text: "Notion AI connectors",
  },
];

export const ConnectionData = [
  {
    imageUrl:
      "https://www.notion.so/images/external_integrations/slack-icon.png",
    title: "Slack",
    text: "Notifications, live links, and workflows between Notion Slack",
    preview: "Link Preview",
    btn: "Connect",
  },
  {
    imageUrl:
      "https://s3-us-west-2.amazonaws.com/public.notion-static.com/8fb58690-ee50-4584-b9fd-ca9b524f56aa/google-drive-icon-19632.png",
    title: "Google Drive",
    text: " Add previews of files.",
    preview: "Link Preview",
    btn: "Connect",
  },
  {
    imageUrl: "https://www.notion.so/images/external_integrations/jira.png",
    title: "Jira Sync",
    text: "Sync projects's issues from Jira into Notion Projects",
    preview: "Link Preview",
    btn: "Connect",
  },
];

export const SideBar = [
  {
    title: "My Account",
    url: "account",
    icon: CircleUserRound,
  },
  {
    title: "My Notification",
    url: "notification",
    icon: Bell,
  },
  {
    title: "My Connection",
    url: "connection",
    icon: ExternalLink,
  },

  {
    title: "Audit Log",
    url: "auditlog",
    icon: CircleUserRound,
  },
];
export const invoices = [
  {
    User: "Albert Flores",
    email: "jayrajshakha@gmail.com",
    Event: "View Os Edited Private PAGE",
    Date: "2022/11/20 11:20 PM",
  },
  {
    User: "Albert Flores",
    email: "jayrajshakha@gmail.com",
    Event: "needed to ok  secret oprjhehc ",
    Date: "2022/11/20 11:20 PM",
  },
  {
    User: "Albert Flores",
    email: "jayrajshakha@gmail.com",
    Event: "Securiyty concern Os  swdnjkqw ",
    Date: "2022/11/20 11:20 PM",
  },
  {
    User: "Albert Flores",
    email: "jayrajshakha@gmail.com",
    Event: "Password sec Os and lorem ext",

    Date: "2022/11/20 11:20 PM",
  },
  {
    User: "Albert Flores",
    Event: "Event Os loime un  os JUber",
    email: "jayrajshakha@gmail.com",

    Date: "2022/11/20 11:20 PM",
  },
  {
    User: "Albert Flores",
    Event: "Ai git Os Ihen ok iser email",
    email: "jayrajshakha@gmail.com",

    Date: "2022/11/20 11:20 PM",
  },
];

export const Routes = [
  {
    title: "My Account",
    url: "/",
    icon: CircleUserRound,
    component: <AccountPage />,
  },
  {
    title: "My Notification",
    url: "/notification",
    icon: Bell,
    component: <NotificationPage />,
  },
  {
    title: "My Connection",
    url: "/connection",
    icon: ExternalLink,
    component: <ConnectionPage />,
  },

  {
    title: "Audit Log",
    url: "/auditlog",
    icon: CircleUserRoundIcon,
    component: <AuditLogPage />,
  },
];
