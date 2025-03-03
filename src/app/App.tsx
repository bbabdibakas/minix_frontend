import * as styles from './App.module.scss'
import {AppButton} from "shared/ui/AppButton/AppButton";

const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <p className={styles.text}>
                    Hello, World!
                    <AppButton onClick={() => alert("Hello")}>
                        Login
                    </AppButton>
                </p>
            </div>
        </div>
    )
}

export default App