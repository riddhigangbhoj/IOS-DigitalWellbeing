function DigitalWellnessScreen() {
    return React.createElement(
        'div',
        {
            style: {
                width: '100%',
                height: '100%',
                background: '#f2f2f7',
                overflowY: 'auto',
                overflowX: 'hidden',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
            }
        },
        // Status Bar
        React.createElement(
            'div',
            {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 20px',
                    height: '44px',
                    fontSize: '15px',
                    fontWeight: '600'
                }
            },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                React.createElement('span', null, '5:24'),
                React.createElement('i', { className: 'ph-fill ph-battery-charging-vertical', style: { fontSize: '18px', color: '#34c759' } })
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '5px' } },
                React.createElement('i', { className: 'ph-fill ph-cell-signal-full', style: { fontSize: '16px' } }),
                React.createElement('span', { style: { fontSize: '15px' } }, '5G'),
                React.createElement('span', {
                    style: {
                        background: '#d1d1d6',
                        borderRadius: '10px',
                        padding: '2px 7px',
                        fontSize: '13px',
                        fontWeight: '600'
                    }
                }, '4')
            )
        ),

        // Back Button
        React.createElement(
            'div',
            { style: { padding: '12px 20px' } },
            React.createElement(
                'button',
                {
                    style: {
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                    }
                },
                React.createElement('i', { className: 'ph-bold ph-caret-left', style: { fontSize: '16px', color: '#000' } })
            )
        ),

        // All Devices Header
        React.createElement('div', {
            style: {
                padding: '0 20px',
                fontSize: '22px',
                fontWeight: '700',
                color: '#aeaeb2',
                marginBottom: '16px'
            }
        }, 'All Devices'),

        // Daily Average Card
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 20px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '16px'
                }
            },
            // Daily Average label
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '8px'
                }
            }, 'Daily Average'),

            // Time and percentage
            React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' } },
                React.createElement('div', {
                    style: {
                        fontSize: '36px',
                        fontWeight: '600',
                        lineHeight: '1',
                        letterSpacing: '-1px'
                    }
                }, '24h 44m'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#aeaeb2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }
                },
                    React.createElement('i', { className: 'ph ph-arrow-down', style: { fontSize: '14px' } }),
                    React.createElement('span', null, '7% from last week')
                )
            ),

            // Chart
            React.createElement(
                'div',
                {
                    style: {
                        height: '100px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '16px',
                        marginBottom: '10px',
                        position: 'relative',
                        paddingRight: '35px'
                    }
                },
                // Y-axis labels
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '0', fontSize: '11px', color: '#aeaeb2' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '40%', fontSize: '11px', color: '#aeaeb2' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '20px', fontSize: '11px', color: '#aeaeb2' } }, '0'),

                // Bars
                ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) =>
                    React.createElement(
                        'div',
                        {
                            key: i,
                            style: {
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px'
                            }
                        },
                        React.createElement('div', {
                            style: {
                                width: '100%',
                                height: i < 4 ? '60px' : '0px',
                                background: '#00cec9',
                                borderRadius: '3px'
                            }
                        }),
                        React.createElement('div', { style: { fontSize: '11px', color: '#aeaeb2' } }, day)
                    )
                )
            ),

            // See All button
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 0 0 0',
                        borderTop: '0.33px solid #d1d1d6'
                    }
                },
                React.createElement('div', { style: { fontSize: '17px', color: '#000' } }, 'See All App & Website Activity'),
                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
            ),

            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginTop: '12px'
                }
            }, 'Updated today at 5:24 PM')
        ),

        // Limit Usage Header
        React.createElement('div', {
            style: {
                padding: '0 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px',
                marginBottom: '8px'
            }
        }, 'Limit Usage'),

        // Limit Usage Items
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 20px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: 'ph-moon', color: '#5e5ce6', title: 'Downtime', subtitle: 'Off until schedule' },
                { icon: 'ph-hourglass', color: '#ff9f0a', title: 'App Limits', subtitle: 'Set time limits for apps' },
                { icon: 'ph-check', color: '#30d158', title: 'Always Allowed', subtitle: 'Choose apps to allow at all times' },
                { icon: 'ph-ruler', color: '#0a84ff', title: 'Screen Distance', subtitle: 'Reduce eye strain' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '11px 16px',
                            borderBottom: index < arr.length - 1 ? '0.33px solid #d1d1d6' : 'none'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '60px',
                            height: '60px',
                            borderRadius: '13.5px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '30px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px', color: '#000' } }, item.title),
                        React.createElement('div', { style: { fontSize: '13px', color: '#aeaeb2' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
                )
            )
        ),

        // Communication Header
        React.createElement('div', {
            style: {
                padding: '0 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px',
                marginBottom: '8px'
            }
        }, 'Communication'),

        // Communication Items
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 20px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: 'ph-chat-circle-dots', color: '#30d158', title: 'Communication Limits', subtitle: 'Set limits for calling and messaging' },
                { icon: 'ph-shield-check', color: '#0a84ff', title: 'Communication Safety', subtitle: 'Protect from sensitive content' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '11px 16px',
                            borderBottom: index < arr.length - 1 ? '0.33px solid #d1d1d6' : 'none'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '60px',
                            height: '60px',
                            borderRadius: '13.5px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '30px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px', color: '#000' } }, item.title),
                        React.createElement('div', { style: { fontSize: '13px', color: '#aeaeb2' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
                )
            )
        ),

        // Restrictions Header
        React.createElement('div', {
            style: {
                padding: '0 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px',
                marginBottom: '8px'
            }
        }, 'Restrictions'),

        // Restrictions Item
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 20px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '11px 16px'
                }
            },
            React.createElement('div', {
                style: {
                    width: '60px',
                    height: '60px',
                    borderRadius: '13.5px',
                    background: '#ff453a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }
            }, React.createElement('i', { className: 'ph-fill ph-prohibit', style: { fontSize: '30px', color: 'white' } })),
            React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px', color: '#000' } }, 'Content & Privacy Restrictions'),
                React.createElement('div', { style: { fontSize: '13px', color: '#aeaeb2' } }, 'Manage content, apps and settings')
            ),
            React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
        ),

        // Lock Settings
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 10px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#007aff', marginBottom: '2px' } }, 'Lock Screen Time Settings'),
            React.createElement('div', { style: { fontSize: '13px', color: '#6e6e73', lineHeight: '1.2' } }, 'Use a passcode to secure Screen Time settings.')
        ),

        // Share Across Devices
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 10px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '16px'
                }
            },
            React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' } },
                React.createElement('div', { style: { fontSize: '17px', color: '#000' } }, 'Share Across Devices'),
                React.createElement('div', {
                    style: {
                        width: '51px',
                        height: '31px',
                        borderRadius: '15.5px',
                        background: '#34c759',
                        position: 'relative'
                    }
                },
                    React.createElement('div', {
                        style: {
                            width: '27px',
                            height: '27px',
                            borderRadius: '50%',
                            background: 'white',
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            boxShadow: '0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06)'
                        }
                    })
                )
            ),
            React.createElement('div', { style: { fontSize: '13px', color: '#6e6e73', lineHeight: '1.2' } }, 'You can enable this on any device signed in to iCloud to sync your Screen Time settings.')
        ),

        // Family Setup
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 10px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#007aff', marginBottom: '2px' } }, 'Set Up Screen Time for Family'),
            React.createElement('div', { style: { fontSize: '13px', color: '#6e6e73', lineHeight: '1.2' } }, 'Set up Family Sharing to use Screen Time with your family\'s devices.')
        ),

        // Turn Off
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 40px 16px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#ff453a', marginBottom: '2px' } }, 'Turn Off App & Website Activity'),
            React.createElement('div', { style: { fontSize: '13px', color: '#6e6e73', lineHeight: '1.2' } }, 'Turning off App & Website Activity disables real-time reporting, Downtime, App Limits and Always Allowed.')
        )
    );
}

window.DigitalWellnessScreen = DigitalWellnessScreen;
