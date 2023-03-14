import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserIsMounted = (state: StateSchema) => state.user._isMounted;
