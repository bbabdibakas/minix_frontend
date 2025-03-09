import {getUserData} from "entities/User";
import {useSelector} from "react-redux";
import {SidebarItem} from "../types/SidebarState";
import {routePath} from "app/providers/AppRouter";
import MainPageIcon from "shared/assets/icons/MainPageIcon.svg"
import MainPageActiveIcon from "shared/assets/icons/MainPageActiveIcon.svg"
import ProfilePageIcon from "shared/assets/icons/ProfilePageIcon.svg"
import ProfilePageActiveIcon from "shared/assets/icons/ProfilePageActiveIcon.svg"

export const useSidebarItems = () => {
    const userData = useSelector(getUserData);

    const sidebarItems: SidebarItem[] = [
        {
            path: routePath.main,
            label: 'Main',
            icon: MainPageIcon,
            activeIcon: MainPageActiveIcon
        }
    ]

    if (userData) {
        sidebarItems.push({
            path: routePath.profiles + userData.username,
            label: 'Profile',
            icon: ProfilePageIcon,
            activeIcon: ProfilePageActiveIcon
        })
    }

    return sidebarItems
}