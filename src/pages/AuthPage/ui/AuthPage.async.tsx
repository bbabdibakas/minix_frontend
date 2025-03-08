import {lazy} from 'react';

export const AuthPageAsync = lazy(()=>new Promise(resolve => {
    //@ts-expect-error-ignore to simulate delay
    setTimeout(()=>{ resolve(import('./AuthPage')); }, 1000)
}));