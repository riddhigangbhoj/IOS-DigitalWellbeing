const { createContext, useContext, useState, useCallback } = React;

const AppContext = createContext();

function AppProvider({ children }) {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [screenHistory, setScreenHistory] = useState(['home']);
    const [leftNotes, setLeftNotes] = useState(screenConfig['home'].leftNotes);
    const [rightNotes, setRightNotes] = useState(screenConfig['home'].rightNotes);

    const navigateToScreen = useCallback((screenId) => {
        if (!screenConfig[screenId]) {
            console.error(`Screen '${screenId}' not found in config`);
            return;
        }

        setCurrentScreen(screenId);
        setScreenHistory(prev => [...prev, screenId]);
        setLeftNotes(screenConfig[screenId].leftNotes);
        setRightNotes(screenConfig[screenId].rightNotes);
    }, []);

    const goBack = useCallback(() => {
        if (screenHistory.length <= 1) return;

        const newHistory = screenHistory.slice(0, -1);
        const previousScreen = newHistory[newHistory.length - 1];

        setScreenHistory(newHistory);
        setCurrentScreen(previousScreen);
        setLeftNotes(screenConfig[previousScreen].leftNotes);
        setRightNotes(screenConfig[previousScreen].rightNotes);
    }, [screenHistory]);

    const updateNotes = useCallback((left, right) => {
        if (left !== undefined) setLeftNotes(left);
        if (right !== undefined) setRightNotes(right);
    }, []);

    const value = {
        currentScreen,
        screenHistory,
        leftNotes,
        rightNotes,
        navigateToScreen,
        goBack,
        updateNotes,
        screenConfig
    };

    return React.createElement(AppContext.Provider, { value }, children);
}

function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
}

// Make available globally
window.AppProvider = AppProvider;
window.useApp = useApp;
