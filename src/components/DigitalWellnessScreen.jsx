function DigitalWellnessScreen({ onNavigate }) {
    return React.createElement(
        'div',
        {
            style: {
                width: '100%',
                height: '100%',
                background: '#f2f2f7',
                overflowY: 'auto',
                overflowX: 'hidden',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                WebkitFontSmoothing: 'antialiased'
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
                    fontWeight: '590'
                }
            },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                '5:24',
                React.createElement('i', { className: 'ph-fill ph-battery-charging-vertical', style: { fontSize: '16px', color: '#000', marginLeft: '2px' } })
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '15px' } },
                React.createElement('i', { className: 'ph-fill ph-cell-signal-full', style: { fontSize: '14px' } }),
                '5G',
                React.createElement('span', {
                    style: {
                        background: '#c7c7cc',
                        borderRadius: '11px',
                        padding: '1px 5px',
                        fontSize: '12px',
                        fontWeight: '600'
                    }
                }, '4')
            )
        ),

        // Back Button
        React.createElement(
            'div',
            { style: { padding: '8px 20px 6px 20px' } },
            React.createElement(
                'button',
                {
                    style: {
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
                    }
                },
                React.createElement('i', { className: 'ph-bold ph-caret-left', style: { fontSize: '13px', color: '#000' } })
            )
        ),

        // All Devices
        React.createElement('div', {
            style: {
                padding: '0 20px 8px 20px',
                fontSize: '20px',
                fontWeight: '700',
                color: '#aeaeb2',
                letterSpacing: '0.3px'
            }
        }, 'All Devices'),

        // Daily Average Card
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '14px 12px 12px 12px'
                }
            },
            // Daily Average label
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '5px',
                    fontWeight: '400'
                }
            }, 'Daily Average'),

            // Time and percentage
            React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' } },
                React.createElement('div', {
                    style: {
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        letterSpacing: '0.1px'
                    }
                }, '24h 44m'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#aeaeb2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontWeight: '400',
                        whiteSpace: 'nowrap'
                    }
                },
                    React.createElement('i', { className: 'ph ph-arrow-down', style: { fontSize: '12px' } }),
                    '7% from last week'
                )
            ),

            // Chart with grid
            React.createElement(
                'div',
                {
                    style: {
                        height: '105px',
                        position: 'relative',
                        marginBottom: '5px'
                    }
                },
                // Grid lines
                React.createElement('div', {
                    style: {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '35px',
                        height: '100%',
                        borderTop: '1px dotted #e5e5ea',
                        borderBottom: '1px dotted #e5e5ea'
                    }
                }),
                React.createElement('div', {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        right: '35px',
                        height: '0',
                        borderTop: '1px dotted #e5e5ea'
                    }
                }),

                // Y-axis labels
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#00cec9', fontWeight: '400' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, '0'),

                // Bars container
                React.createElement(
                    'div',
                    {
                        style: {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '10px',
                            paddingRight: '35px',
                            paddingBottom: '15px'
                        }
                    },
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
                                    gap: '4px'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    width: '100%',
                                    height: i < 4 ? (i === 3 ? '38px' : '62px') : '0px',
                                    background: '#00cec9',
                                    borderRadius: '3px'
                                }
                            }),
                            React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, day)
                        )
                    )
                )
            ),

            // See All button
            React.createElement(
                'div',
                {
                    onClick: () => onNavigate('activity'),
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '11px 0 0 0',
                        borderTop: '0.5px solid #e5e5ea',
                        cursor: 'pointer'
                    }
                },
                React.createElement('div', { style: { fontSize: '16px', color: '#000', fontWeight: '400' } }, 'See All App & Website Activity'),
                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
            ),

            React.createElement('div', {
                style: {
                    fontSize: '12px',
                    color: '#aeaeb2',
                    marginTop: '7px',
                    fontWeight: '400'
                }
            }, 'Updated today at 5:24 PM')
        ),

        // Limit Usage
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Limit Usage'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
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
                            gap: '10px',
                            padding: '7px 12px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '54px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '21px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, item.title),
                        React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                )
            )
        ),

        // Communication
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Communication'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
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
                            gap: '10px',
                            padding: '7px 12px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '54px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '21px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, item.title),
                        React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                )
            )
        ),

        // Restrictions
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Restrictions'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '7px 12px',
                    minHeight: '54px'
                }
            },
            React.createElement('div', {
                style: {
                    width: '46px',
                    height: '46px',
                    borderRadius: '11px',
                    background: '#ff453a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }
            }, React.createElement('i', { className: 'ph-fill ph-prohibit', style: { fontSize: '21px', color: 'white' } })),
            React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, 'Content & Privacy Restrictions'),
                React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, 'Manage content, apps and settings')
            ),
            React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
        ),

        // Lock Settings
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#007aff', marginBottom: '3px', fontWeight: '400' } }, 'Lock Screen Time Settings'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Use a passcode to secure Screen Time settings.')
        ),

        // Share Across Devices
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' } },
                React.createElement('div', { style: { fontSize: '16px', color: '#000', fontWeight: '400' } }, 'Share Across Devices'),
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
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'You can enable this on any device signed in to iCloud to sync your Screen Time settings.')
        ),

        // Family
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#007aff', marginBottom: '3px', fontWeight: '400' } }, 'Set Up Screen Time for Family'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Set up Family Sharing to use Screen Time with your family\'s devices.')
        ),

        // Turn Off
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 40px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#ff3b30', marginBottom: '3px', fontWeight: '400' } }, 'Turn Off App & Website Activity'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Turning off App & Website Activity disables real-time reporting, Downtime, App Limits and Always Allowed.')
        )
    );
}

window.DigitalWellnessScreen = DigitalWellnessScreen;
