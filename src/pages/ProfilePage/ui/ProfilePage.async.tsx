import {lazy} from 'react';

export const ProfilePageAsync = lazy(()=>new Promise(resolve => {
    //@ts-expect-error-ignore to simulate delay
    setTimeout(()=>{ resolve(import('./ProfilePage')); }, 1000)
}));