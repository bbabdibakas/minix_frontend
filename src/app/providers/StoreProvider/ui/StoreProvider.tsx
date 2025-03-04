import {ReactNode} from "react";
import {RootState} from "../model/RootState";
import {createReduxStore} from "../model/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: RootState;
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(
        initialState as RootState,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider