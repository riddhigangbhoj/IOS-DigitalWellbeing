function DigitalWellnessScreen() {
    const createIcon = (iconName, size = 32, weight = 'regular') => {
        return React.createElement('i', {
            className: `ph ${iconName}`,
            style: {
                fontSize: `${size}px`,
                fontWeight: weight,
                color: 'white'
            }
        });
    };

    return React.createElement(
        'div',
        {
            style: {
                width: '100%',
                height: '100%',
                background: '#f2f2f7',
                overflowY: 'auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
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
                    padding: '8px 24px 0 24px',
                    height: '44px',
                    fontSize: '15px',
                    fontWeight: '600'
                }
            },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
                '5:24 ',
                React.createElement('i', { className: 'ph ph-battery-charging-vertical', style: { fontSize: '16px', color: 'green' } })
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px' } },
                React.createElement('i', { className: 'ph ph-wifi-high', style: { fontSize: '14px' } }),
                ' 5G ',
                React.createElement('span', {
                    style: {
                        background: '#e5e5ea',
                        borderRadius: '12px',
                        padding: '2px 6px',
                        fontSize: '12px'
                    }
                }, '4')
            )
        ),

        // Back Button
        React.createElement(
            'div',
            { style: { padding: '8px 24px' } },
            React.createElement(
                'button',
                {
                    style: {
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                    }
                },
                React.createElement('i', { className: 'ph ph-caret-left', style: { fontSize: '20px' } })
            )
        ),

        // All Devices
        React.createElement('div', {
            style: {
                padding: '8px 24px',
                fontSize: '22px',
                fontWeight: '700',
                color: '#8e8e93',
                letterSpacing: '-0.5px'
            }
        }, 'All Devices'),

        // Daily Average Card
        React.createElement(
            'div',
            {
                style: {
                    margin: '12px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    padding: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                }
            },
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#8e8e93',
                    marginBottom: '4px',
                    fontWeight: '400'
                }
            }, 'Daily Average'),

            React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '16px' } },
                React.createElement('div', {
                    style: {
                        fontSize: '34px',
                        fontWeight: '700',
                        lineHeight: '1',
                        letterSpacing: '-0.5px'
                    }
                }, '24h 44m'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#8e8e93',
                        paddingBottom: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }
                },
                    React.createElement('i', { className: 'ph ph-arrow-down', style: { fontSize: '12px' } }),
                    ' 7% from last week'
                )
            ),

            // Chart
            React.createElement(
                'div',
                {
                    style: {
                        height: '120px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '12px',
                        marginBottom: '8px',
                        position: 'relative',
                        paddingRight: '40px'
                    }
                },
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '0', fontSize: '11px', color: '#8e8e93' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', fontSize: '11px', color: '#8e8e93' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '24px', fontSize: '11px', color: '#8e8e93' } }, '0'),
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
                                gap: '6px'
                            }
                        },
                        React.createElement('div', {
                            style: {
                                width: '100%',
                                height: i < 4 ? '70px' : '0px',
                                background: '#00d4aa',
                                borderRadius: '4px'
                            }
                        }),
                        React.createElement('div', { style: { fontSize: '11px', color: '#8e8e93' } }, day)
                    )
                )
            ),

            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0 0 0',
                        borderTop: '0.5px solid #e5e5ea',
                        marginTop: '12px'
                    }
                },
                React.createElement('div', { style: { fontSize: '15px' } }, 'See All App & Website Activity'),
                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
            ),

            React.createElement('div', {
                style: {
                    fontSize: '12px',
                    color: '#8e8e93',
                    marginTop: '8px'
                }
            }, 'Updated today at 5:24 PM')
        ),

        // Limit Usage section
        React.createElement('div', {
            style: {
                padding: '16px 24px 8px 24px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#8e8e93',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }
        }, 'Limit Usage'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px',
                    background: 'white',
                    borderRadius: '14px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: 'ph-moon', color: '#5856d6', title: 'Downtime', subtitle: 'Off until schedule' },
                { icon: 'ph-hourglass', color: '#ff9500', title: 'App Limits', subtitle: 'Set time limits for apps' },
                { icon: 'ph-check', color: '#34c759', title: 'Always Allowed', subtitle: 'Choose apps to allow at all times' },
                { icon: 'ph-ruler', color: '#007aff', title: 'Screen Distance', subtitle: 'Reduce eye strain' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 16px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '60px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '56px',
                            height: '56px',
                            borderRadius: '12px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, createIcon(item.icon, 28, 'fill')),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '15px', marginBottom: '2px' } }, item.title),
                        React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
                )
            )
        ),

        // Communication section
        React.createElement('div', {
            style: {
                padding: '24px 24px 8px 24px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#8e8e93',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }
        }, 'Communication'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px',
                    background: 'white',
                    borderRadius: '14px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: 'ph-chat-circle-dots', color: '#34c759', title: 'Communication Limits', subtitle: 'Set limits for calling and messaging' },
                { icon: 'ph-shield-check', color: '#007aff', title: 'Communication Safety', subtitle: 'Protect from sensitive content' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 16px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '60px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '56px',
                            height: '56px',
                            borderRadius: '12px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, createIcon(item.icon, 28, 'fill')),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '15px', marginBottom: '2px' } }, item.title),
                        React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
                )
            )
        ),

        // Restrictions
        React.createElement('div', {
            style: {
                padding: '24px 24px 8px 24px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#8e8e93',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }
        }, 'Restrictions'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 16px',
                    minHeight: '60px'
                }
            },
            React.createElement('div', {
                style: {
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: '#ff3b30',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }
            }, createIcon('ph-prohibit', 28, 'fill')),
            React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', { style: { fontSize: '15px', marginBottom: '2px' } }, 'Content & Privacy Restrictions'),
                React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, 'Manage content, apps and settings')
            ),
            React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '16px', color: '#c7c7cc' } })
        ),

        // Bottom options
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 12px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    padding: '14px 16px'
                }
            },
            React.createElement('div', { style: { fontSize: '15px', color: '#007aff', marginBottom: '4px' } }, 'Lock Screen Time Settings'),
            React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93', lineHeight: '1.4' } }, 'Use a passcode to secure Screen Time settings.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 12px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    padding: '14px 16px'
                }
            },
            React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' } },
                React.createElement('div', { style: { fontSize: '15px' } }, 'Share Across Devices'),
                React.createElement('div', {
                    style: {
                        width: '51px',
                        height: '31px',
                        borderRadius: '16px',
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
                            boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                        }
                    })
                )
            ),
            React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93', lineHeight: '1.4' } }, 'You can enable this on any device signed in to iCloud to sync your Screen Time settings.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 12px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    padding: '14px 16px'
                }
            },
            React.createElement('div', { style: { fontSize: '15px', color: '#007aff', marginBottom: '4px' } }, 'Set Up Screen Time for Family'),
            React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93', lineHeight: '1.4' } }, 'Set up Family Sharing to use Screen Time with your family\'s devices.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 32px 16px',
                    background: 'white',
                    borderRadius: '14px',
                    padding: '14px 16px'
                }
            },
            React.createElement('div', { style: { fontSize: '15px', color: '#ff3b30', marginBottom: '4px' } }, 'Turn Off App & Website Activity'),
            React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93', lineHeight: '1.4' } }, 'Turning off App & Website Activity disables real-time reporting, Downtime, App Limits and Always Allowed.')
        )
    );
}

window.DigitalWellnessScreen = DigitalWellnessScreen;
