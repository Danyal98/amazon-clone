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

    const state = {
        items,
    }

    const actions = {
        setItems,
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