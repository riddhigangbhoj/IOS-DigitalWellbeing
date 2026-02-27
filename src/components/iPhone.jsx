function iPhone({ children }) {
    return (
        <div className="iphone-container">
            <div className="iphone-bezel">
                <div className="iphone-notch"></div>
                <div className="iphone-screen">
                    {children}
                </div>
                <div className="iphone-home-indicator"></div>
            </div>
        </div>
    );
}

window.iPhone = iPhone;
