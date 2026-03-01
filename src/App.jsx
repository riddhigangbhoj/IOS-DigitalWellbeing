function App() {
    const [currentScreen, setCurrentScreen] = React.useState('home');
    const [activeSolution, setActiveSolution] = React.useState('solution2');

    const handleNavigate = (screen) => {
        setCurrentScreen(screen);
    };

    const handleSolutionChange = (solution) => {
        console.log('Switching to:', solution, 'from screen:', currentScreen);
        setActiveSolution(solution);
        setCurrentScreen('home');
        // Scroll to top when switching solutions
        setTimeout(() => {
            const scrollableElements = document.querySelectorAll('[style*="overflow"]');
            scrollableElements.forEach(el => {
                if (el.scrollTop > 0) {
                    el.scrollTop = 0;
                }
            });
        }, 0);
    };

    let screenComponent;
    if (currentScreen === 'activity') {
        screenComponent = React.createElement(window.AppActivityScreen, {
            onNavigate: handleNavigate
        });
    } else if (currentScreen === 'insights-detail') {
        screenComponent = React.createElement(window.InsightsDetailScreen, {
            onNavigate: handleNavigate
        });
    } else {
        screenComponent = React.createElement(window.DigitalWellnessScreen, {
            onNavigate: handleNavigate,
            isSolution: activeSolution === 'solution2'
        });
    }

    return React.createElement(
        'div',
        { className: 'app-container' },
        activeSolution === 'solution1' ?
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                },
                // Solution Toggle - 70% size
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '60px 20px 0px 20px',
                            marginBottom: '-25px',
                            position: 'relative',
                            zIndex: 1000,
                            userSelect: 'none'
                        }
                    },
                    React.createElement(
                        'div',
                        {
                            style: {
                                background: 'white',
                                borderRadius: '35px',
                                padding: '4px',
                                display: 'flex',
                                gap: '6px',
                                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                                alignItems: 'center',
                                position: 'relative',
                                zIndex: 1001
                            }
                        },
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('solution1');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'solution1' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'solution1' ? 'white' : '#666',
                                    fontSize: '11px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    position: 'relative',
                                    zIndex: 1002
                                }
                            },
                            'Current Look'
                        ),
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('solution2');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'solution2' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'solution2' ? 'white' : '#666',
                                    fontSize: '11px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    position: 'relative',
                                    zIndex: 1002
                                }
                            },
                            'Solution'
                        )
                    )
                ),
                // iPhone Prototype
                React.createElement(
                    window.iPhone,
                    null,
                    screenComponent
                )
            )
        :
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                },
                // Solution Toggle - 70% size
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '60px 20px 0px 20px',
                            marginBottom: '-25px',
                            position: 'relative',
                            zIndex: 1000,
                            userSelect: 'none'
                        }
                    },
                    React.createElement(
                        'div',
                        {
                            style: {
                                background: 'white',
                                borderRadius: '35px',
                                padding: '4px',
                                display: 'flex',
                                gap: '6px',
                                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                                alignItems: 'center',
                                position: 'relative',
                                zIndex: 1001
                            }
                        },
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('solution1');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'solution1' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'solution1' ? 'white' : '#666',
                                    fontSize: '11px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    position: 'relative',
                                    zIndex: 1002
                                }
                            },
                            'Current Look'
                        ),
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('solution2');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'solution2' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'solution2' ? 'white' : '#666',
                                    fontSize: '11px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    position: 'relative',
                                    zIndex: 1002
                                }
                            },
                            'Solution'
                        )
                    )
                ),
                // iPhone Prototype (same as solution1)
                React.createElement(
                    window.iPhone,
                    null,
                    screenComponent
                )
            )
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
