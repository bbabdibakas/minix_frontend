import AppLink from 'shared/ui/AppLink/AppLink';
import {useLocation} from 'react-router';
import {useSidebarItems} from '../model/selectors/getSidebarItems';
import * as styles from './Sidebar.module.scss'

const Sidebar = () => {
    const location = useLocation()
    const sidebarItems = useSidebarItems()

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                {
                    sidebarItems.map((item, index) => (
                        <AppLink to={item.path} className={styles.link} key={index}>
                            {location.pathname === item.path ? <item.activeIcon/> : <item.icon/>}
                            <div className={styles.label}>
                                {item.label}
                            </div>
                        </AppLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar