import {routePath} from "app/providers/AppRouter";
import AppLink from "shared/ui/AppLink/AppLink";
import MainPageIcon from "shared/assets/icons/MainPageIcon.svg"
import MainPageActiveIcon from "shared/assets/icons/MainPageActiveIcon.svg"
import ProfilePageIcon from "shared/assets/icons/ProfilePageIcon.svg"
import ProfilePageActiveIcon from "shared/assets/icons/ProfilePageActiveIcon.svg"
import {useLocation} from "react-router";
import * as styles from "./Sidebar.module.scss"

const Sidebar = () => {
    const location = useLocation()

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <AppLink to={routePath.main} className={styles.link}>
                    {location.pathname === routePath.main ? <MainPageActiveIcon/> : <MainPageIcon/>}
                    <div className={styles.item}>
                        Main
                    </div>
                </AppLink>
                <AppLink to={routePath.profiles} className={styles.link}>
                    {location.pathname === routePath.profiles ? <ProfilePageActiveIcon/> : <ProfilePageIcon/>}
                    <div className={styles.item}>
                        Profile
                    </div>
                </AppLink>
            </div>
        </div>
    )
}

export default Sidebar