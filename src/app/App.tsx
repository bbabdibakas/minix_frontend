import {AppButton} from "shared/ui/AppButton/AppButton";
import {useState} from "react";
import {AppInput} from "shared/ui/AppInput/AppInput";

const App = () => {

    const [value, setValue] = useState<string>('')

    const onChangeValue = (value: string) => {
        setValue(value)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <AppInput value={value} placeholder={'Value'} onChange={onChangeValue}/>
                <AppButton onClick={() => alert("Hello")}>
                    Login
                </AppButton>
            </div>
        </div>
    )
}

export default App