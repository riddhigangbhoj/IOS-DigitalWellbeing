function App() {
    return React.createElement(
        'div',
        { className: 'app-container' },
        React.createElement(
            window.iPhone,
            null,
            React.createElement('div', {
                style: {
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '40px'
                }
            })
        )
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
