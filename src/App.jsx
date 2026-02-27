function App() {
    return React.createElement(
        'div',
        { className: 'app-container' },
        React.createElement(
            window.iPhone,
            null,
            React.createElement(window.DigitalWellnessScreen)
        )
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
