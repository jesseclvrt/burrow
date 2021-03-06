import { Properties } from 'csstype';
import { useReducer } from 'react';
import { Box, Connection, Menu, ServicePopup, Tunnel } from '../components';
import { initialState, reducer } from '../state';

const AppStyle: Properties = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'grey',
};

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boxComponents = state.boxes.map((BoxData, index) => <Box key={index} BoxData={BoxData} dispatch={dispatch} state={state} />); // TODO: consider not passing entire state
    const connectionComponents = state.connections.map((thisConn, index) => <Connection key={index} connection={thisConn} />);
    const tunnelComponents = state.tunnels.map((tunnel, index) => <Tunnel key={index} tunnel={tunnel} />);

    return (
        <div style={AppStyle}>
            <Menu state={state} dispatch={dispatch} />
            <ServicePopup state={state} dispatch={dispatch} />
            {boxComponents}
            {connectionComponents}
            {tunnelComponents}
        </div>
    );
};
