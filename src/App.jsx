function App() {
    const app = window.useApp();

    return (
        <div className="app-container">
            <TextBox
                position="left"
                title="Instructions"
                content={app.leftNotes}
            />

            <iPhone>
                <ScreenManager />
            </iPhone>

            <TextBox
                position="right"
                title="Notes"
                content={app.rightNotes}
            />
        </div>
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(
        window.AppProvider,
        null,
        React.createElement(App)
    )
);
