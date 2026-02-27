function BaseScreen({
    children,
    backgroundColor = '#000',
    style = {}
}) {
    return (
        <div
            className="base-screen"
            style={{
                backgroundColor,
                width: '100%',
                height: '100%',
                position: 'relative',
                ...style
            }}
        >
            {children}
        </div>
    );
}

window.BaseScreen = BaseScreen;
