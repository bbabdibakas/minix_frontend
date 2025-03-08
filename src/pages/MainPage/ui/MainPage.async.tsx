import {lazy} from 'react';

export const MainPageAsync = lazy(()=>new Promise(resolve => {
    //@ts-expect-error-ignore to simulate delay
    setTimeout(()=>{ resolve(import('./MainPage')); }, 1000)
}));