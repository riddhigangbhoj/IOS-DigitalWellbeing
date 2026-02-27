function DigitalWellnessScreen() {
    return React.createElement(
        'div',
        {
            style: {
                width: '100%',
                height: '100%',
                background: '#f2f2f7',
                overflowY: 'auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
                    padding: '12px 20px 8px 20px',
                    fontSize: '15px',
                    fontWeight: '600',
                    background: '#f2f2f7'
                }
            },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
                React.createElement('span', null, '5:24'),
                React.createElement('div', {
                    style: {
                        width: '14px',
                        height: '14px',
                        background: '#000',
                        borderRadius: '3px',
                        fontSize: '10px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }, '🔋')
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' } },
                React.createElement('span', null, '📶'),
                React.createElement('span', null, '5G'),
                React.createElement('span', {
                    style: {
                        background: '#e5e5ea',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px'
                    }
                }, '4')
            )
        ),

        // Back Button
        React.createElement(
            'div',
            { style: { padding: '16px 20px' } },
            React.createElement(
                'button',
                {
                    style: {
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'white',
                        border: 'none',
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }
                },
                '←'
            )
        ),

        // All Devices Header
        React.createElement('div', {
            style: {
                padding: '0 20px 16px 20px',
                fontSize: '28px',
                fontWeight: '700',
                color: '#8e8e93'
            }
        }, 'All Devices'),

        // Daily Average Card
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }
            },
            React.createElement('div', { style: { fontSize: '15px', color: '#8e8e93', marginBottom: '8px' } }, 'Daily Average'),
            React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' } },
                React.createElement('div', { style: { fontSize: '40px', fontWeight: '600' } }, '24h 44m'),
                React.createElement('div', {
                    style: {
                        fontSize: '15px',
                        color: '#8e8e93',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }
                },
                    React.createElement('span', null, '↓'),
                    '7% from last week'
                )
            ),
            // Bar Chart
            React.createElement(
                'div',
                { style: { height: '140px', display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '12px', position: 'relative' } },
                React.createElement('div', { style: { position: 'absolute', right: '10px', top: '0', fontSize: '12px', color: '#8e8e93' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '10px', top: '50%', fontSize: '12px', color: '#8e8e93' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '10px', bottom: '20px', fontSize: '12px', color: '#8e8e93' } }, '0'),
                ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) =>
                    React.createElement(
                        'div',
                        {
                            key: day + index,
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
                                height: index < 4 ? '80px' : '0px',
                                background: index < 4 ? '#00d4aa' : 'transparent',
                                borderRadius: '4px'
                            }
                        }),
                        React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93' } }, day)
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
                        padding: '16px 0',
                        borderTop: '1px solid #e5e5ea'
                    }
                },
                React.createElement('div', { style: { fontSize: '17px' } }, 'See All App & Website Activity'),
                React.createElement('div', { style: { fontSize: '20px', color: '#8e8e93' } }, '›')
            ),
            React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93', marginTop: '8px' } }, 'Updated today at 5:24 PM')
        ),

        // Limit Usage Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#8e8e93',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }
        }, 'Limit Usage'),

        // Limit Usage Items
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: '🌙', color: '#5856d6', title: 'Downtime', subtitle: 'Off until schedule' },
                { icon: '⏳', color: '#ff9500', title: 'App Limits', subtitle: 'Set time limits for apps' },
                { icon: '✓', color: '#34c759', title: 'Always Allowed', subtitle: 'Choose apps to allow at all times' },
                { icon: '📏', color: '#007aff', title: 'Screen Distance', subtitle: 'Reduce eye strain' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: item.title,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            borderBottom: index < arr.length - 1 ? '1px solid #e5e5ea' : 'none'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '60px',
                            height: '60px',
                            borderRadius: '14px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            flexShrink: 0
                        }
                    }, item.icon),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px' } }, item.title),
                        React.createElement('div', { style: { fontSize: '15px', color: '#8e8e93' } }, item.subtitle)
                    ),
                    React.createElement('div', { style: { fontSize: '20px', color: '#c7c7cc' } }, '›')
                )
            )
        ),

        // Communication Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#8e8e93',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }
        }, 'Communication'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }
            },
            [
                { icon: '💬', color: '#34c759', title: 'Communication Limits', subtitle: 'Set limits for calling and messaging' },
                { icon: '🛡️', color: '#007aff', title: 'Communication Safety', subtitle: 'Protect from sensitive content' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: item.title,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            borderBottom: index < arr.length - 1 ? '1px solid #e5e5ea' : 'none'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '60px',
                            height: '60px',
                            borderRadius: '14px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            flexShrink: 0
                        }
                    }, item.icon),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px' } }, item.title),
                        React.createElement('div', { style: { fontSize: '15px', color: '#8e8e93' } }, item.subtitle)
                    ),
                    React.createElement('div', { style: { fontSize: '20px', color: '#c7c7cc' } }, '›')
                )
            )
        ),

        // Restrictions Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '600',
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
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px'
                }
            },
            React.createElement('div', {
                style: {
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: '#ff3b30',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    flexShrink: 0
                }
            }, '🚫'),
            React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', { style: { fontSize: '17px', marginBottom: '2px' } }, 'Content & Privacy Restrictions'),
                React.createElement('div', { style: { fontSize: '15px', color: '#8e8e93' } }, 'Manage content, apps and settings')
            ),
            React.createElement('div', { style: { fontSize: '20px', color: '#c7c7cc' } }, '›')
        ),

        // Bottom Options
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#007aff', marginBottom: '8px' } }, 'Lock Screen Time Settings'),
            React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, 'Use a passcode to secure Screen Time settings.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px'
                }
            },
            React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } },
                React.createElement('div', { style: { fontSize: '17px' } }, 'Share Across Devices'),
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
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }
                    })
                )
            ),
            React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, 'You can enable this on any device signed in to iCloud to sync your Screen Time settings.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 16px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#007aff', marginBottom: '8px' } }, 'Set Up Screen Time for Family'),
            React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, 'Set up Family Sharing to use Screen Time with your family\'s devices.')
        ),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 32px 16px',
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px'
                }
            },
            React.createElement('div', { style: { fontSize: '17px', color: '#ff3b30', marginBottom: '8px' } }, 'Turn Off App & Website Activity'),
            React.createElement('div', { style: { fontSize: '13px', color: '#8e8e93' } }, 'Turning off App & Website Activity disables real-time reporting, Downtime, App Limits and Always Allowed.')
        )
    );
}

window.DigitalWellnessScreen = DigitalWellnessScreen;
