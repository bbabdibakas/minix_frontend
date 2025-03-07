import {Link} from "react-router"
import {routePath} from "app/providers/AppRouter";
import * as styles from "./Sidebar.module.scss"

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <Link to={routePath.main}>
                    Main
                </Link>
                <Link to={routePath.profile}>
                    Profile
                </Link>
            </div>
        </div>
    )
}

export default Sidebar