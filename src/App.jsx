function App() {
    const [currentScreen, setCurrentScreen] = React.useState('home');
    const [activeSolution, setActiveSolution] = React.useState('solution2');

    const handleNavigate = (screen) => {
        setCurrentScreen(screen);
    };

    const [insightView, setInsightView] = React.useState('day');

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
    if (activeSolution === 'wireframe') {
        screenComponent = React.createElement(window.WireframeScreen);
    } else if (currentScreen === 'activity') {
        screenComponent = React.createElement(window.AppActivityScreen, {
            onNavigate: handleNavigate
        });
    } else if (currentScreen === 'insights-detail') {
        screenComponent = React.createElement(window.InsightsDetailScreen, {
            onNavigate: handleNavigate,
            onViewChange: setInsightView
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
        (activeSolution === 'solution1' || activeSolution === 'wireframe') ?
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
                        ),
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('wireframe');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'wireframe' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'wireframe' ? 'white' : '#666',
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
                            'Wireframe'
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
                        ),
                        React.createElement(
                            'button',
                            {
                                onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSolutionChange('wireframe');
                                },
                                style: {
                                    padding: '8px 22px',
                                    borderRadius: '28px',
                                    border: 'none',
                                    background: activeSolution === 'wireframe' ? '#007aff' : 'transparent',
                                    color: activeSolution === 'wireframe' ? 'white' : '#666',
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
                            'Wireframe'
                        )
                    )
                ),
                // iPhone + Guide wrapper
                React.createElement(
                    'div',
                    {
                        style: {
                            position: 'relative',
                            display: 'inline-block'
                        }
                    },
                    // iPhone Prototype
                    React.createElement(
                        window.iPhone,
                        null,
                        screenComponent
                    ),
                    // Guide steps - positioned absolutely around the phone
                    ...(currentScreen === 'home' ? [
                        // Step 1 - Read the insight (right, pointing to insight content)
                        { num: '1', text: 'Read the insight', side: 'left', top: '59%' },
                        // Step 2 - Swipe for next (right, pointing to pagination dots)
                        { num: '2', text: 'Swipe for next', side: 'right', top: '68%' },
                        // Step 3 - Tap View more (right, at View more height)
                        { num: '3', text: 'Tap "View more"', side: 'right', top: '51%' }
                    ] : currentScreen === 'insights-detail' && insightView === 'day' ? [
                        // Step 1 - Tap to expand & give feedback (right, near expand arrow)
                        { num: '1', text: 'Tap to expand & give feedback', side: 'right', top: '28%' },
                        // Step 2 - Scroll for more (right, lower)
                        { num: '2', text: 'Scroll for more', side: 'right', top: '50%' },
                        // Step 3 - Try Week view (left, near toggle)
                        { num: '3', text: 'Try Week view', side: 'left', top: '12%' }
                    ] : currentScreen === 'insights-detail' && insightView === 'week' ? [
                        // Only scroll hint
                        { num: '', text: 'Scroll to view more', side: 'right', top: '50%' }
                    ] : []).map((step, i) =>
                        React.createElement('div', {
                            key: step.text,
                            style: {
                                position: 'absolute',
                                top: step.top,
                                [step.side === 'left' ? 'right' : 'left']: step.side === 'left' ? 'calc(100% - 15px)' : 'calc(100% - 15px)',
                                display: 'flex',
                                flexDirection: step.side === 'left' ? 'row-reverse' : 'row',
                                alignItems: 'center',
                                gap: '0px',
                                zIndex: 5
                            }
                        },
                            // Arrow line extending into screen
                            React.createElement('div', {
                                style: {
                                    width: '40px',
                                    height: '1px',
                                    background: '#c7c7cc',
                                    flexShrink: 0
                                }
                            }),
                            // Arrow head
                            React.createElement('div', {
                                style: {
                                    width: 0,
                                    height: 0,
                                    borderTop: '4px solid transparent',
                                    borderBottom: '4px solid transparent',
                                    [step.side === 'left' ? 'borderRight' : 'borderLeft']: '0px',
                                    [step.side === 'left' ? 'borderLeft' : 'borderRight']: '6px solid #c7c7cc',
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
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                                    [step.side === 'left' ? 'marginRight' : 'marginLeft']: '4px'
                                }
                            },
                                step.num ? React.createElement('span', {
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
                                }, step.num) : null,
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
    );
}

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
