function App() {
    const [currentScreen, setCurrentScreen] = React.useState('home');

    const handleNavigate = (screen) => {
        setCurrentScreen(screen);
    };

    let screenComponent;
    if (currentScreen === 'activity') {
        screenComponent = React.createElement(window.AppActivityScreen, {
            onNavigate: handleNavigate
        });
    } else {
        screenComponent = React.createElement(window.DigitalWellnessScreen, {
            onNavigate: handleNavigate
        });
    }

    return React.createElement(
        'div',
        { className: 'app-container' },
        React.createElement(
            window.iPhone,
            null,
            screenComponent
        )
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
