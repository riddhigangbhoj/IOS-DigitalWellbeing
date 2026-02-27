function App() {
    return (
        <div className="app-container">
            <iPhone>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '40px'
                }}></div>
            </iPhone>
        </div>
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
