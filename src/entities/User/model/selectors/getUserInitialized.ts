import {RootState} from 'app/providers/StoreProvider';

export const getUserInitialized = (state: RootState) => state.user.isInitialized