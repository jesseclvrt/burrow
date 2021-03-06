import Xarrow from 'react-xarrows';
import { AppState, Dispatch } from '../state';

type ConnectionProps = {
    connection: AppState['connections'][0];
};
export const Connection = (Props: ConnectionProps) => {
    const { connection } = Props;
    return <Xarrow start={`connection-${JSON.stringify(connection)}`} end={`service-${connection.box2ServiceId}`} />;
};

type ConnectionStartPointProps = {
    connection: AppState['connections'][0];
    state: AppState;
    dispatch: Dispatch;
};
export const ConnectionStartPoint = (Props: ConnectionStartPointProps) => {
    const { connection, state, dispatch } = Props;

    const removeConnection = (event: any) => {
        event.stopPropagation();
        if (!state.metaData.tunnelSetupIsActive) dispatch({ type: 'delete-connection', connectionToRemove: connection });
    };

    return (
        <div
            id={`connection-${JSON.stringify(connection)}`}
            data-connection={JSON.stringify(connection)}
            onClick={removeConnection}
            style={{ position: 'relative', float: 'right' }}
        >
            {connection.box1Port === -1 ? 'x' : connection.box1Port}
        </div>
    );
};
