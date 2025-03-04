import {createRoot} from 'react-dom/client';
import App from "app/App";
import "app/styles/index.scss"
import {StoreProvider} from "app/providers/StoreProvider";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StoreProvider>
            <App/>
        </StoreProvider>
    );
}