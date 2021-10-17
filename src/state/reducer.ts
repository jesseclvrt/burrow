import { AppAction, DeleteAction } from './actions';
import { AppState, LOCAL_STORAGE_ID } from './state';

/**
 * A Reducer is a function that takes the current state and an action, and returns a new state (based on the type of action provided).
 */
export const reducer = (currentState: AppState, action: AppAction): AppState => {
    const { type, payload } = action;

    switch (type) {
        case 'clear-app': {
            return { ...currentState, boxes: [], routes: [] };
        }

        case 'delete': {
            const boxes = currentState.boxes.filter((BoxData, index) => {
                return BoxData.id !== (payload as DeleteAction['payload']).id;
            });
            return { ...currentState, boxes };
        }

        case 'save-local': {
            localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(currentState));
            return currentState;
        }

        case 'clear-local': {
            localStorage.removeItem(LOCAL_STORAGE_ID);
            return currentState;
        }

        default:
            throw new Error('Unknown Type sent to StateReducer!');
    }
};