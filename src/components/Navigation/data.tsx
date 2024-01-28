import { ReactElement } from "react"
import { 
  SquaresSvg,
  ChartSvg,
  GameSvg,
  BagSvg,
  UserSvg,
  MessagesSvg,
  PercentSvg,
  ImageSvg,
  SettingsSvg
} from "../../static"
import SideMenu from "./SIdeMenu";

export type NavigationItemType = {
  id: string;
  icon: ReactElement;
  clickable: boolean,
  active: boolean,
  sideMenu?: ReactElement
}

export const NavigationData: NavigationItemType[] = [
  {
    id: '0',
    icon: <SquaresSvg />,
    clickable: false,
    active: false,
  },
  {
    id: '1',
    icon: <ChartSvg />,
    clickable: false,
    active: false
  },
  {
    id: '2',
    icon: <GameSvg />,
    clickable: true,
    sideMenu: <SideMenu title="App Customization" menu={[
      {
        id: '0',
        title: 'App Builder',
        extra: false
      },
      {
        id: '1',
        title: 'App Customizer',
        extra: false
      },
      {
        id: '2',
        title: 'A/B Testing',
        extra: false
      },
    ]} />,
    active: false
  },
  {
    id: '3',
    icon: <BagSvg />,
    clickable: true,
    sideMenu: <SideMenu title="Store Managemen" menu={[
      {
        id: '0',
        title: 'Content Management',
        extra: false
      },
      {
        id: '1',
        title: 'Product Management',
        extra: false
      },
      {
        id: '2',
        title: 'Product Referral',
        extra: false
      },
      {
        id: '3',
        title: 'Shops Management',
        extra: false
      },
    ]} />,
    active: false
  },
  {
    id: '4',
    icon: <UserSvg />,
    clickable: true,
    sideMenu: <SideMenu title="User Management" menu={[
      {
        id: '0',
        title: 'Employee Management',
        extra: false
      },
      {
        id: '1',
        title: 'Customer Management',
        extra: false
      },
      {
        id: '2',
        title: 'Partner Management',
        extra: false
      },
    ]} />,
    active: false
  },
  {
    id: '5',
    icon: <MessagesSvg />,
    clickable: true,
    sideMenu: <SideMenu title="Communication" menu={[
      {
        id: '0',
        title: 'Chat',
        extra: false
      },
      {
        id: '1',
        title: 'Notifications',
        extra: true
      }
    ]} />,
    active: false
  },
  {
    id: '6',
    icon: <PercentSvg />,
    clickable: false,
    active: false
  },
  {
    id: '7',
    icon: <ImageSvg />,
    clickable: false,
    active: false
  },
  {
    id: '8',
    icon: <SettingsSvg />,
    clickable: false,
    active: false
  },
]