import {rootReducer} from './../store/reducers';

/**
 * Root state type based on the return type of the rootReducer.
 * It's based on the object with the registered reducers and their relative types.
 */
type RootState = ReturnType<typeof rootReducer>;
