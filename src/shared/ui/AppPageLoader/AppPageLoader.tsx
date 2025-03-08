import {AppLoader} from "shared/ui/AppLoader/AppLoader";
import * as styles from "./AppPageLoader.module.scss";

interface AppPageLoaderProps {
    className?: string
}

export const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className,
    } = props

    return (
        <div className={`${styles.AppPageLoader} ${className}`}>
            <AppLoader/>
        </div>
    )
}