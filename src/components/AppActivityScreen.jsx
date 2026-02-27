function AppActivityScreen({ onNavigate }) {
    const { useState } = React;
    const [activeTab, setActiveTab] = useState('day');

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
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } }, '5:25'),
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

        // Header with back button and dropdowns
        React.createElement(
            'div',
            {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 20px',
                    gap: '12px'
                }
            },
            React.createElement(
                'button',
                {
                    onClick: () => onNavigate('home'),
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
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                        flexShrink: 0
                    }
                },
                React.createElement('i', { className: 'ph-bold ph-caret-left', style: { fontSize: '13px', color: '#000' } })
            ),
            React.createElement('div', {
                style: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: '600'
                }
            }, 'All Devices'),
            React.createElement(
                'button',
                {
                    style: {
                        background: 'white',
                        border: 'none',
                        borderRadius: '18px',
                        padding: '6px 14px',
                        fontSize: '16px',
                        fontWeight: '400',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
                    }
                },
                'Devices'
            )
        ),

        // Week/Day Toggle - Always visible
        React.createElement(
            'div',
            {
                style: {
                    margin: '10px 16px',
                    background: '#e5e5ea',
                    borderRadius: '10px',
                    padding: '2px',
                    display: 'flex',
                    gap: '2px'
                }
            },
            React.createElement(
                'button',
                {
                    onClick: () => setActiveTab('week'),
                    style: {
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeTab === 'week' ? 'white' : 'transparent',
                        fontSize: '14px',
                        fontWeight: activeTab === 'week' ? '600' : '400',
                        color: '#000',
                        cursor: 'pointer',
                        boxShadow: activeTab === 'week' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                    }
                },
                'Week'
            ),
            React.createElement(
                'button',
                {
                    onClick: () => setActiveTab('day'),
                    style: {
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeTab === 'day' ? 'white' : 'transparent',
                        fontSize: '14px',
                        fontWeight: activeTab === 'day' ? '600' : '400',
                        color: '#000',
                        cursor: 'pointer',
                        boxShadow: activeTab === 'day' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                    }
                },
                'Day'
            )
        ),

        // CONDITIONAL CONTENT BASED ON ACTIVE TAB
        activeTab === 'week' ?
            // ============= WEEK VIEW CONTENT =============
            React.createElement(React.Fragment, null,
                // Screen Time Section Header
                React.createElement('div', {
                    style: {
                        padding: '16px 20px 8px 20px',
                        fontSize: '13px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        textTransform: 'uppercase'
                    }
                }, 'Screen Time'),

                // Screen Time Card for Week
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
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '5px',
                            fontWeight: '400'
                        }
                    }, 'Daily Average'),

                    React.createElement('div', {
                        style: {
                            fontSize: '32px',
                            fontWeight: '600',
                            marginBottom: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }
                    },
                        '24h 44m',
                        React.createElement('div', {
                            style: {
                                fontSize: '15px',
                                color: '#aeaeb2',
                                fontWeight: '400',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }
                        },
                            React.createElement('i', { className: 'ph-fill ph-caret-down', style: { fontSize: '12px' } }),
                            '7% from last week'
                        )
                    ),

                    // Weekly Chart with colored segments
                    React.createElement(
                        'div',
                        {
                            style: {
                                height: '105px',
                                position: 'relative',
                                marginBottom: '5px',
                                marginTop: '16px'
                            }
                        },
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
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '14h'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                            ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                                const heights = [62, 62, 62, 48, 0, 0, 0];
                                const colors = i === 3 ? ['#0099cc', '#00cec9', '#ff9f0a', '#aeaeb2'] : ['#0099cc', '#00cec9', '#ff9f0a'];
                                const segments = i === 3 ? [0.4, 0.25, 0.2, 0.15] : [0.45, 0.3, 0.25];

                                return React.createElement(
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
                                    i === 3 ?
                                        React.createElement('div', {
                                            style: {
                                                width: '100%',
                                                height: heights[i] + 'px',
                                                borderRadius: '3px',
                                                background: `linear-gradient(to top, ${colors[0]} 0%, ${colors[0]} ${segments[0] * 100}%, ${colors[1]} ${segments[0] * 100}%, ${colors[1]} ${(segments[0] + segments[1]) * 100}%, ${colors[2]} ${(segments[0] + segments[1]) * 100}%, ${colors[2]} ${(segments[0] + segments[1] + segments[2]) * 100}%, ${colors[3]} ${(segments[0] + segments[1] + segments[2]) * 100}%, ${colors[3]} 100%)`
                                            }
                                        }) :
                                        React.createElement('div', {
                                            style: {
                                                width: '100%',
                                                height: heights[i] + 'px',
                                                borderRadius: '3px',
                                                background: heights[i] > 0 ? `linear-gradient(to top, ${colors[0]} 0%, ${colors[0]} ${segments[0] * 100}%, ${colors[1]} ${segments[0] * 100}%, ${colors[1]} ${(segments[0] + segments[1]) * 100}%, ${colors[2]} ${(segments[0] + segments[1]) * 100}%, ${colors[2]} 100%)` : 'transparent'
                                            }
                                        }),
                                    React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                                );
                            })
                        )
                    ),

                    // Categories
                    React.createElement(
                        'div',
                        {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginBottom: '14px',
                                paddingBottom: '14px',
                                marginTop: '5px',
                                borderBottom: '0.5px solid #e5e5ea'
                            }
                        },
                        [
                            { label: 'Productivity & Finance', time: '15h 43m', color: '#0099cc' },
                            { label: 'Entertainment', time: '9h 14m', color: '#00cec9' },
                            { label: 'Other', time: '7h 25m', color: '#ff9f0a' }
                        ].map((cat, i) =>
                            React.createElement(
                                'div',
                                {
                                    key: i,
                                    style: {
                                        textAlign: 'center',
                                        flex: 1
                                    }
                                },
                                React.createElement('div', {
                                    style: {
                                        fontSize: '11px',
                                        color: cat.color,
                                        marginBottom: '2px',
                                        fontWeight: '400',
                                        whiteSpace: 'nowrap'
                                    }
                                }, cat.label),
                                React.createElement('div', {
                                    style: {
                                        fontSize: '14px',
                                        color: '#000',
                                        fontWeight: '600'
                                    }
                                }, cat.time)
                            )
                        )
                    ),

                    // Total Screen Time
                    React.createElement(
                        'div',
                        {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }
                        },
                        React.createElement('div', {
                            style: {
                                fontSize: '16px',
                                color: '#000',
                                fontWeight: '400'
                            }
                        }, 'Total Screen Time'),
                        React.createElement('div', {
                            style: {
                                fontSize: '16px',
                                color: '#aeaeb2',
                                fontWeight: '400'
                            }
                        }, '98h 59m')
                    ),

                    // Updated timestamp
                    React.createElement('div', {
                        style: {
                            fontSize: '12px',
                            color: '#aeaeb2',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }
                    },
                        'Updated today at 5:24 PM',
                        React.createElement('i', { className: 'ph ph-spinner', style: { fontSize: '14px' } })
                    )
                ),

                // Limits Section
                React.createElement('div', {
                    style: {
                        padding: '16px 20px 8px 20px',
                        fontSize: '13px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        textTransform: 'uppercase'
                    }
                }, 'Limits'),

                React.createElement(
                    'div',
                    {
                        style: {
                            margin: '0 16px 14px 16px',
                            background: 'white',
                            borderRadius: '11px',
                            padding: '12px 12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }
                    },
                    React.createElement('div', { style: { fontSize: '16px', color: '#000' } }, 'Instagram & Snapchat'),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#aeaeb2',
                            fontSize: '16px'
                        }
                    },
                        '2 min',
                        React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                    )
                ),

                // Most Used Section
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px 20px 8px 20px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            fontWeight: '400',
                            color: '#6e6e73',
                            textTransform: 'uppercase'
                        }
                    }, 'Most Used'),
                    React.createElement('div', {
                        style: {
                            fontSize: '16px',
                            color: '#007aff',
                            fontWeight: '400'
                        }
                    }, 'Show Categories')
                ),

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
                        { icon: 'ph-compass', color: '#0a84ff', name: 'Safari', time: '17h 59m' },
                        { icon: 'ph-hash', color: '#611f69', name: 'Slack', time: '5h 12m' },
                        { icon: 'ph-terminal-window', color: '#007acc', name: 'com.microsoft.VSCode', time: '4h 43m' },
                        { icon: 'ph-play-circle', color: '#ff0000', name: 'YouTube', time: '3h 46m' },
                        { icon: 'ph-circle', color: '#aeaeb2', name: 'claude.ai', time: '3h 22m' },
                        { icon: 'ph-circle', color: '#e50914', name: 'com.netflix.Netflix', time: '3h 16m' },
                        { icon: 'ph-circle', color: '#aeaeb2', name: 'github.com', time: '2h 15m' }
                    ].map((app, i, arr) =>
                        React.createElement(
                            'div',
                            {
                                key: i,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 12px',
                                    borderBottom: i < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: app.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }
                            }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                            React.createElement(
                                'div',
                                { style: { flex: 1 } },
                                React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                                React.createElement('div', {
                                    style: {
                                        height: '4px',
                                        background: '#e5e5ea',
                                        borderRadius: '2px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            width: `${Math.random() * 60 + 30}%`,
                                            background: '#aeaeb2',
                                            borderRadius: '2px'
                                        }
                                    })
                                )
                            ),
                            React.createElement('div', {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#aeaeb2',
                                    fontSize: '14px'
                                }
                            },
                                app.time,
                                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                            )
                        )
                    )
                ),

                React.createElement('div', {
                    style: {
                        padding: '0 16px 20px 16px',
                        fontSize: '16px',
                        color: '#007aff',
                        fontWeight: '400'
                    }
                }, 'Show More'),

                // Pickups Section for Week View
                React.createElement('div', {
                    style: {
                        padding: '16px 20px 8px 20px',
                        fontSize: '13px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        textTransform: 'uppercase'
                    }
                }, 'Pickups'),

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
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '5px',
                            fontWeight: '400'
                        }
                    }, 'Daily Average'),

                    React.createElement('div', {
                        style: {
                            fontSize: '32px',
                            fontWeight: '600',
                            marginBottom: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }
                    },
                        '122',
                        React.createElement('div', {
                            style: {
                                fontSize: '15px',
                                color: '#aeaeb2',
                                fontWeight: '400',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }
                        },
                            React.createElement('i', { className: 'ph-fill ph-caret-down', style: { fontSize: '12px' } }),
                            '22% from last week'
                        )
                    ),

                    // Weekly Pickups Chart
                    React.createElement(
                        'div',
                        {
                            style: {
                                height: '105px',
                                position: 'relative',
                                marginBottom: '5px',
                                marginTop: '16px'
                            }
                        },
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
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, '170'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '5px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                            ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                                const heights = [70, 60, 55, 65, 0, 0, 0];
                                return React.createElement(
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
                                            height: heights[i] + 'px',
                                            background: '#00cec9',
                                            borderRadius: '3px'
                                        }
                                    }),
                                    React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                                );
                            })
                        )
                    ),

                    // Most Pickups and Total Pickups
                    React.createElement(
                        'div',
                        {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                marginTop: '16px',
                                marginBottom: '16px',
                                paddingBottom: '16px',
                                borderBottom: '0.5px solid #e5e5ea'
                            }
                        },
                        React.createElement(
                            'div',
                            { style: { flex: 1 } },
                            React.createElement('div', {
                                style: {
                                    fontSize: '13px',
                                    color: '#aeaeb2',
                                    marginBottom: '4px',
                                    fontWeight: '400'
                                }
                            }, 'Most Pickups'),
                            React.createElement('div', {
                                style: {
                                    fontSize: '16px',
                                    color: '#000',
                                    fontWeight: '600'
                                }
                            }, 'Sunday: 166')
                        ),
                        React.createElement(
                            'div',
                            { style: { flex: 1 } },
                            React.createElement('div', {
                                style: {
                                    fontSize: '13px',
                                    color: '#aeaeb2',
                                    marginBottom: '4px',
                                    fontWeight: '400'
                                }
                            }, 'Total Pickups'),
                            React.createElement('div', {
                                style: {
                                    fontSize: '16px',
                                    color: '#000',
                                    fontWeight: '600'
                                }
                            }, '488')
                        )
                    ),

                    // First Used After Pickup section header
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '10px',
                            fontWeight: '400'
                        }
                    }, 'First Used After Pickup'),

                    // Apps list with progress bars
                    [
                        { icon: 'ph-chat-circle-dots', color: '#25d366', name: 'WhatsApp', count: 97, progress: 95 },
                        { icon: 'ph-compass', color: '#0a84ff', name: 'Safari', count: 32, progress: 35 },
                        { icon: 'ph-lightbulb', color: '#ff6633', name: 'Swiggy', count: 31, progress: 33 },
                        { icon: 'ph-camera', color: '#e4405f', name: 'Instagram', count: 21, progress: 25 }
                    ].map((app, i, arr) =>
                        React.createElement(
                            'div',
                            {
                                key: i,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: i < arr.length - 1 ? '14px' : '0'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: app.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }
                            }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                            React.createElement(
                                'div',
                                { style: { flex: 1 } },
                                React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                                React.createElement('div', {
                                    style: {
                                        height: '4px',
                                        background: '#e5e5ea',
                                        borderRadius: '2px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            width: `${app.progress}%`,
                                            background: '#00cec9',
                                            borderRadius: '2px'
                                        }
                                    })
                                )
                            ),
                            React.createElement('div', {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#aeaeb2',
                                    fontSize: '14px'
                                }
                            },
                                app.count,
                                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                            )
                        )
                    )
                ),

                React.createElement('div', {
                    style: {
                        padding: '0 16px 20px 16px',
                        fontSize: '16px',
                        color: '#007aff',
                        fontWeight: '400'
                    }
                }, 'Show More'),

                // Notifications Section for Week View
                React.createElement('div', {
                    style: {
                        padding: '16px 20px 8px 20px',
                        fontSize: '13px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        textTransform: 'uppercase'
                    }
                }, 'Notifications'),

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
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '5px',
                            fontWeight: '400'
                        }
                    }, 'Daily Average'),

                    React.createElement('div', {
                        style: {
                            fontSize: '32px',
                            fontWeight: '600',
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }
                    },
                        '236',
                        React.createElement('div', {
                            style: {
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#ff453a'
                            }
                        }),
                        React.createElement('div', {
                            style: {
                                fontSize: '15px',
                                color: '#aeaeb2',
                                fontWeight: '400',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                marginLeft: '6px'
                            }
                        },
                            React.createElement('i', { className: 'ph-fill ph-caret-down', style: { fontSize: '12px' } }),
                            '8% from last week'
                        )
                    ),

                    // Weekly Notifications Chart
                    React.createElement(
                        'div',
                        {
                            style: {
                                height: '105px',
                                position: 'relative',
                                marginBottom: '16px'
                            }
                        },
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
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '140'),
                        React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                            ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                                const heights = [60, 65, 58, 68, 0, 0, 0];
                                return React.createElement(
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
                                            height: heights[i] + 'px',
                                            background: '#ff453a',
                                            borderRadius: '3px'
                                        }
                                    }),
                                    React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                                );
                            })
                        )
                    ),

                    // Apps list with progress bars and red dots
                    [
                        { icon: 'ph-hash', color: '#611f69', name: 'Slack', count: 314, progress: 95 },
                        { icon: 'ph-chat-circle-dots', color: '#25d366', name: 'WhatsApp', count: 305, progress: 93 },
                        { icon: 'ph-chat-circle', color: '#30d158', name: 'Messages', count: 67, progress: 25 },
                        { icon: 'ph-lightbulb', color: '#ff6633', name: 'Swiggy', count: 64, progress: 23 }
                    ].map((app, i, arr) =>
                        React.createElement(
                            'div',
                            {
                                key: i,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: i < arr.length - 1 ? '14px' : '10px'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: app.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }
                            }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                            React.createElement(
                                'div',
                                { style: { flex: 1 } },
                                React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                                React.createElement('div', {
                                    style: {
                                        height: '4px',
                                        background: '#e5e5ea',
                                        borderRadius: '2px',
                                        position: 'relative',
                                        overflow: 'visible'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            width: `${app.progress}%`,
                                            background: '#d1d1d6',
                                            borderRadius: '2px'
                                        }
                                    }),
                                    React.createElement('div', {
                                        style: {
                                            position: 'absolute',
                                            left: `${app.progress}%`,
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#ff453a'
                                        }
                                    })
                                )
                            ),
                            React.createElement('div', {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#aeaeb2',
                                    fontSize: '14px'
                                }
                            },
                                app.count,
                                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                            )
                        )
                    )
                ),

                React.createElement('div', {
                    style: {
                        padding: '0 28px 20px 28px',
                        fontSize: '16px',
                        color: '#007aff',
                        fontWeight: '400'
                    }
                }, 'Show More'),

                // Bottom spacing
                React.createElement('div', {
                    style: {
                        height: '100px'
                    }
                })
            )
        :
            // ============= DAY VIEW CONTENT =============
            React.createElement(React.Fragment, null,
                // Screen Time Section Header
                React.createElement('div', {
                    style: {
                        padding: '16px 20px 8px 20px',
                        fontSize: '13px',
                        fontWeight: '400',
                        color: '#6e6e73',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.08px'
                    }
                }, 'Screen Time'),

        // Screen Time Card
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
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '5px',
                    fontWeight: '400'
                }
            }, 'Today, 25 February'),

            React.createElement('div', {
                style: {
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '16px'
                }
            }, '18h 30m'),

            // Weekly Chart with thinner bars
            React.createElement(
                'div',
                {
                    style: {
                        height: '105px',
                        position: 'relative',
                        marginBottom: '5px'
                    }
                },
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
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                        const heights = [62, 62, 62, 48, 0, 0, 0];
                        const colors = i === 3 ? ['#00cec9', '#0099cc', '#ff9f0a'] : ['#aeaeb2'];
                        return React.createElement(
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
                            i === 3 ?
                                React.createElement('div', {
                                    style: {
                                        width: '100%',
                                        height: heights[i] + 'px',
                                        borderRadius: '3px',
                                        background: `linear-gradient(to top, ${colors[0]} 0%, ${colors[0]} 33%, ${colors[1]} 33%, ${colors[1]} 66%, ${colors[2]} 66%, ${colors[2]} 100%)`
                                    }
                                }) :
                                React.createElement('div', {
                                    style: {
                                        width: '100%',
                                        height: heights[i] + 'px',
                                        background: colors[0],
                                        borderRadius: '3px'
                                    }
                                }),
                            React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                        );
                    })
                )
            ),

            // Hourly Chart - VERY THIN BARS
            React.createElement(
                'div',
                {
                    style: {
                        height: '70px',
                        position: 'relative',
                        marginBottom: '10px'
                    }
                },
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '0', fontSize: '10px', color: '#aeaeb2' } }, '2h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '1h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '12px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
                React.createElement(
                    'div',
                    {
                        style: {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '2px',
                            paddingRight: '25px',
                            paddingBottom: '12px'
                        }
                    },
                    Array.from({ length: 24 }).map((_, i) => {
                        const heights = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 12, 15, 32, 18, 28, 22, 35, 28, 0, 0, 0, 0, 0];
                        const colors = ['#00cec9', '#0099cc', '#ff9f0a'];
                        const colorIndex = i % 3;
                        return React.createElement('div', {
                            key: i,
                            style: {
                                flex: 1,
                                height: heights[i] + 'px',
                                background: heights[i] > 0 ? colors[colorIndex] : 'transparent',
                                borderRadius: '1px',
                                minWidth: '3px'
                            }
                        });
                    })
                )
            ),

            // Time labels
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '10px',
                        color: '#aeaeb2',
                        paddingRight: '25px',
                        marginBottom: '14px'
                    }
                },
                React.createElement('div', null, '12 AM'),
                React.createElement('div', null, '6 AM'),
                React.createElement('div', null, '12 PM'),
                React.createElement('div', null, '6 PM')
            ),

            // Categories
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginBottom: '14px',
                        paddingBottom: '14px',
                        borderBottom: '0.5px solid #e5e5ea'
                    }
                },
                [
                    { label: 'Other', time: '1h 57m', color: '#00cec9' },
                    { label: 'Productivity & Finance', time: '1h 53m', color: '#0099cc' },
                    { label: 'Entertainment', time: '1h 29m', color: '#ff9f0a' }
                ].map((cat, i) =>
                    React.createElement(
                        'div',
                        {
                            key: i,
                            style: {
                                textAlign: 'center',
                                flex: 1
                            }
                        },
                        React.createElement('div', {
                            style: {
                                fontSize: '11px',
                                color: cat.color,
                                marginBottom: '2px',
                                fontWeight: '400',
                                whiteSpace: 'nowrap'
                            }
                        }, cat.label),
                        React.createElement('div', {
                            style: {
                                fontSize: '14px',
                                color: '#000',
                                fontWeight: '600'
                            }
                        }, cat.time)
                    )
                )
            ),

            React.createElement('div', {
                style: {
                    fontSize: '12px',
                    color: '#aeaeb2'
                }
            }, 'Updated today at 5:24 PM')
        ),

        // Limits Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase'
            }
        }, 'Limits'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#000' } }, 'Instagram & Snapchat'),
            React.createElement('div', {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#aeaeb2',
                    fontSize: '16px'
                }
            },
                '2 min',
                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
            )
        ),

        // Most Used Section
        React.createElement(
            'div',
            {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 20px 8px 20px'
                }
            },
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    fontWeight: '400',
                    color: '#6e6e73',
                    textTransform: 'uppercase'
                }
            }, 'Most Used'),
            React.createElement('div', {
                style: {
                    fontSize: '16px',
                    color: '#007aff',
                    fontWeight: '400'
                }
            }, 'Show Categories')
        ),

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
                { icon: 'ph-compass', color: '#0a84ff', name: 'Safari', time: '2h 53m' },
                { icon: 'ph-play-circle', color: '#ff0000', name: 'YouTube', time: '1h 26m' },
                { icon: 'ph-circle', color: '#aeaeb2', name: 'irctc.co.in', time: '48m' },
                { icon: 'ph-terminal-window', color: '#007acc', name: 'com.microsoft.VSCode', time: '31m' },
                { icon: 'ph-video-camera', color: '#aeaeb2', name: 'com.google.meetings', time: '30m' },
                { icon: 'ph-circle', color: '#aeaeb2', name: 'outlook.cloud.microsoft', time: '18m' },
                { icon: 'ph-hash', color: '#611f69', name: 'Slack', time: '18m' }
            ].map((app, i, arr) =>
                React.createElement(
                    'div',
                    {
                        key: i,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 12px',
                            borderBottom: i < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: app.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                        React.createElement('div', {
                            style: {
                                height: '4px',
                                background: '#e5e5ea',
                                borderRadius: '2px',
                                position: 'relative',
                                overflow: 'hidden'
                            }
                        },
                            React.createElement('div', {
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: `${Math.random() * 80 + 20}%`,
                                    background: '#aeaeb2',
                                    borderRadius: '2px'
                                }
                            })
                        )
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#aeaeb2',
                            fontSize: '14px'
                        }
                    },
                        app.time,
                        React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                    )
                )
            )
        ),

        React.createElement('div', {
            style: {
                padding: '0 16px 20px 16px',
                fontSize: '16px',
                color: '#007aff',
                fontWeight: '400'
            }
        }, 'Show More'),

        // Pickups Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase'
            }
        }, 'Pickups'),

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
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '5px',
                    fontWeight: '400'
                }
            }, 'Today, 25 February'),

            React.createElement('div', {
                style: {
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '16px'
                }
            }, '90'),

            // Weekly Pickups Chart
            React.createElement(
                'div',
                {
                    style: {
                        height: '105px',
                        position: 'relative',
                        marginBottom: '5px'
                    }
                },
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
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, '170'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '5px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                        const heights = [55, 50, 45, 58, 0, 0, 0];
                        const colors = ['#aeaeb2', '#aeaeb2', '#aeaeb2', '#00cec9', '#aeaeb2', '#aeaeb2', '#aeaeb2'];
                        return React.createElement(
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
                                    height: heights[i] + 'px',
                                    background: colors[i],
                                    borderRadius: '3px'
                                }
                            }),
                            React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                        );
                    })
                )
            ),

            // Hourly Pickups Chart - VERY THIN BARS
            React.createElement(
                'div',
                {
                    style: {
                        height: '70px',
                        position: 'relative',
                        marginBottom: '10px',
                        marginTop: '16px'
                    }
                },
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '0', fontSize: '10px', color: '#aeaeb2' } }, '20'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '12px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
                React.createElement(
                    'div',
                    {
                        style: {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '2px',
                            paddingRight: '25px',
                            paddingBottom: '12px'
                        }
                    },
                    Array.from({ length: 24 }).map((_, i) => {
                        const heights = [3, 5, 4, 3, 2, 2, 12, 8, 10, 14, 8, 16, 18, 20, 16, 18, 16, 10, 8, 6, 4, 3, 2, 2];
                        return React.createElement('div', {
                            key: i,
                            style: {
                                flex: 1,
                                height: heights[i] + 'px',
                                background: '#00cec9',
                                borderRadius: '1px',
                                minWidth: '3px'
                            }
                        });
                    })
                )
            ),

            // Time labels
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '10px',
                        color: '#aeaeb2',
                        paddingRight: '25px',
                        marginBottom: '16px'
                    }
                },
                React.createElement('div', null, '12 AM'),
                React.createElement('div', null, '6 AM'),
                React.createElement('div', null, '12 PM'),
                React.createElement('div', null, '6 PM')
            ),

            // First Pickup and Total Pickups info boxes
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: '0.5px solid #e5e5ea'
                    }
                },
                React.createElement(
                    'div',
                    { style: { flex: 1 } },
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '4px',
                            fontWeight: '400'
                        }
                    }, 'First Pickup'),
                    React.createElement('div', {
                        style: {
                            fontSize: '16px',
                            color: '#000',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }
                    },
                        React.createElement('i', { className: 'ph-fill ph-caret-up', style: { fontSize: '12px', color: '#aeaeb2' } }),
                        '12:00 AM'
                    )
                ),
                React.createElement(
                    'div',
                    { style: { flex: 1 } },
                    React.createElement('div', {
                        style: {
                            fontSize: '13px',
                            color: '#aeaeb2',
                            marginBottom: '4px',
                            fontWeight: '400'
                        }
                    }, 'Total Pickups'),
                    React.createElement('div', {
                        style: {
                            fontSize: '16px',
                            color: '#000',
                            fontWeight: '600'
                        }
                    }, '90')
                )
            ),

            // First Used After Pickup section header
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '10px',
                    fontWeight: '400'
                }
            }, 'First Used After Pickup'),

            // Apps list with progress bars
            [
                { icon: 'ph-chat-circle-dots', color: '#25d366', name: 'WhatsApp', count: 9, progress: 90 },
                { icon: 'ph-compass', color: '#0a84ff', name: 'Safari', count: 5, progress: 50 },
                { icon: 'ph-atom', color: '#ff6633', name: 'Claude', count: 4, progress: 40 },
                { icon: 'ph-phone', color: '#30d158', name: 'Phone', count: 4, progress: 40 }
            ].map((app, i, arr) =>
                React.createElement(
                    'div',
                    {
                        key: i,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: i < arr.length - 1 ? '14px' : '0'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: app.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                        React.createElement('div', {
                            style: {
                                height: '4px',
                                background: '#e5e5ea',
                                borderRadius: '2px',
                                position: 'relative',
                                overflow: 'hidden'
                            }
                        },
                            React.createElement('div', {
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: `${app.progress}%`,
                                    background: '#00cec9',
                                    borderRadius: '2px'
                                }
                            })
                        )
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#aeaeb2',
                            fontSize: '14px'
                        }
                    },
                        app.count,
                        React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                    )
                )
            )
        ),

        // Notifications Section
        React.createElement('div', {
            style: {
                padding: '16px 20px 8px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase'
            }
        }, 'Notifications'),

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
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '5px',
                    fontWeight: '400'
                }
            }, 'Today, 25 February'),

            React.createElement('div', {
                style: {
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }
            },
                '172',
                React.createElement('div', {
                    style: {
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#ff453a'
                    }
                })
            ),

            // Weekly Notifications Chart
            React.createElement(
                'div',
                {
                    style: {
                        height: '105px',
                        position: 'relative',
                        marginBottom: '5px'
                    }
                },
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
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#aeaeb2' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '140'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
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
                    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                        const heights = [52, 55, 50, 60, 0, 0, 0];
                        const colors = ['#aeaeb2', '#aeaeb2', '#aeaeb2', '#ff453a', '#aeaeb2', '#aeaeb2', '#aeaeb2'];
                        return React.createElement(
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
                                    height: heights[i] + 'px',
                                    background: colors[i],
                                    borderRadius: '3px'
                                }
                            }),
                            React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, day)
                        );
                    })
                )
            ),

            // Hourly Notifications Chart - VERY THIN BARS
            React.createElement(
                'div',
                {
                    style: {
                        height: '70px',
                        position: 'relative',
                        marginBottom: '10px',
                        marginTop: '16px'
                    }
                },
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '0', fontSize: '10px', color: '#aeaeb2' } }, '30'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2' } }, '15'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '12px', fontSize: '10px', color: '#aeaeb2' } }, '0'),
                React.createElement(
                    'div',
                    {
                        style: {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '2px',
                            paddingRight: '25px',
                            paddingBottom: '12px'
                        }
                    },
                    Array.from({ length: 24 }).map((_, i) => {
                        const heights = [8, 10, 6, 4, 2, 8, 2, 2, 2, 2, 2, 2, 24, 28, 22, 26, 18, 20, 16, 8, 4, 2, 2, 2];
                        return React.createElement('div', {
                            key: i,
                            style: {
                                flex: 1,
                                height: heights[i] + 'px',
                                background: '#ff453a',
                                borderRadius: '1px',
                                minWidth: '3px'
                            }
                        });
                    })
                )
            ),

            // Time labels
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '10px',
                        color: '#aeaeb2',
                        paddingRight: '25px',
                        marginBottom: '16px'
                    }
                },
                React.createElement('div', null, '12 AM'),
                React.createElement('div', null, '6 AM'),
                React.createElement('div', null, '12 PM'),
                React.createElement('div', null, '6 PM')
            ),

            // Apps list with progress bars and red dots
            [
                { icon: 'ph-chat-circle-dots', color: '#25d366', name: 'WhatsApp', count: 91, progress: 95 },
                { icon: 'ph-hash', color: '#611f69', name: 'Slack', count: 22, progress: 25 },
                { icon: 'ph-chat-circle', color: '#30d158', name: 'Messages', count: 12, progress: 15 },
                { icon: 'ph-envelope', color: '#ff0000', name: 'Gmail', count: 10, progress: 12 }
            ].map((app, i, arr) =>
                React.createElement(
                    'div',
                    {
                        key: i,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: i < arr.length - 1 ? '14px' : '10px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: app.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${app.icon}`, style: { fontSize: '20px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '4px' } }, app.name),
                        React.createElement('div', {
                            style: {
                                height: '4px',
                                background: '#e5e5ea',
                                borderRadius: '2px',
                                position: 'relative',
                                overflow: 'visible'
                            }
                        },
                            React.createElement('div', {
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: `${app.progress}%`,
                                    background: '#d1d1d6',
                                    borderRadius: '2px'
                                }
                            }),
                            React.createElement('div', {
                                style: {
                                    position: 'absolute',
                                    left: `${app.progress}%`,
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: '#ff453a'
                                }
                            })
                        )
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#aeaeb2',
                            fontSize: '14px'
                        }
                    },
                        app.count,
                        React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                    )
                )
            )
        ),

        // Show More button
        React.createElement('div', {
            style: {
                padding: '0 28px 20px 28px',
                fontSize: '16px',
                color: '#007aff',
                fontWeight: '400'
            }
        }, 'Show More'),

                // Bottom spacing
                React.createElement('div', {
                    style: {
                        height: '100px'
                    }
                })
            )
    );
}

window.AppActivityScreen = AppActivityScreen;
