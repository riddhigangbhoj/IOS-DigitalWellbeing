function ScreenManager() {
    const app = window.useApp();

    const handleSwipe = (direction) => {
        console.log('Swipe detected:', direction);
        if (direction === 'left' && app.currentScreen === 'home') {
            // Could navigate to another screen
        } else if (direction === 'right' && app.currentScreen === 'settings') {
            app.goBack();
        }
    };

    const handleTap = (position) => {
        console.log('Tap detected at:', position);
    };

    const handleLongPress = (position) => {
        console.log('Long press detected at:', position);
    };

    const handleScroll = (delta) => {
        // Scroll is handled within individual screens
    };

    const renderScreen = () => {
        const screenProps = {
            onNavigate: app.navigateToScreen,
            onSwipe: handleSwipe,
            onTap: handleTap,
            onLongPress: handleLongPress,
            onScroll: handleScroll
        };

        switch (app.currentScreen) {
            case 'home':
                return React.createElement(window.HomeScreen, screenProps);
            case 'settings':
                return React.createElement(window.SettingsScreen, screenProps);
            default:
                return React.createElement(window.HomeScreen, screenProps);
        }
    };

    return React.createElement(
        window.InteractionLayer,
        {
            onSwipe: handleSwipe,
            onTap: handleTap,
            onLongPress: handleLongPress,
            onScroll: handleScroll
        },
        renderScreen()
    );
}

window.ScreenManager = ScreenManager;
