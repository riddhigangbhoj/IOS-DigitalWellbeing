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
                // iPhone + Guide wrapper
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0px',
                            position: 'relative'
                        }
                    },
                    // iPhone Prototype
                    React.createElement(
                        window.iPhone,
                        null,
                        screenComponent
                    ),
                    // Guide steps
                    React.createElement(
                        'div',
                        {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0px',
                                marginLeft: '-20px',
                                alignSelf: 'center',
                                minWidth: '140px'
                            }
                        },
                        (currentScreen === 'home' ? [
                            { num: '1', text: 'Read the insight', top: '280px' },
                            { num: '2', text: 'Swipe for next', top: '340px' },
                            { num: '3', text: 'Tap "View more"', top: '400px' }
                        ] : [
                            { num: '1', text: 'Tap to expand', top: '280px' },
                            { num: '2', text: 'Give feedback', top: '340px' },
                            { num: '3', text: 'Scroll for more', top: '400px' },
                            { num: '4', text: 'Try Week view', top: '460px' }
                        ]).map((step, i, arr) =>
                            React.createElement('div', {
                                key: i,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginBottom: i < arr.length - 1 ? '12px' : '0'
                                }
                            },
                                // Arrow
                                React.createElement('div', {
                                    style: {
                                        width: '20px',
                                        height: '1px',
                                        background: '#c7c7cc',
                                        flexShrink: 0
                                    }
                                }),
                                // Step box
                                React.createElement('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '5px 10px',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e5ea',
                                        background: 'white',
                                        whiteSpace: 'nowrap',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                                    }
                                },
                                    React.createElement('span', {
                                        style: {
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '50%',
                                            background: '#007aff',
                                            color: 'white',
                                            fontSize: '9px',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }
                                    }, step.num),
                                    React.createElement('span', {
                                        style: {
                                            fontSize: '10px',
                                            color: '#6e6e73',
                                            fontWeight: '400',
                                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                                        }
                                    }, step.text)
                                )
                            )
                        )
                    )
                )
            )
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
