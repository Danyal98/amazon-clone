import React, { useState, useContext } from "react"

const AppContext = React.createContext({
    state: {},
    actions: {}
})

const propTypes = {
};

const defaultProps = {
};

function AppProvider(props) {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState();

    const state = {
        items,
        user,
    }

    const actions = {
        setItems,
        setUser,
    }

    return (
        <AppContext.Provider value={{ state, actions }}>
            {props.children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = propTypes;
AppProvider.defaultProps = defaultProps;

function useApp(props) {
    return useContext(AppContext)
}

export {
    AppProvider,
    useApp,
}