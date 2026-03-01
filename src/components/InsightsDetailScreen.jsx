function InsightsDetailScreen({ onNavigate }) {
    const [activeView, setActiveView] = React.useState('day');

    return React.createElement(
        'div',
        {
            style: {
                background: '#f2f2f7',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                position: 'relative'
            }
        },
        // Status Bar (to match positioning)
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
                        borderRadius: '2px',
                        width: '18px',
                        height: '10px',
                        display: 'inline-block'
                    }
                })
            )
        ),
        // Back button and Week/Day toggle container
        React.createElement('div', {
            style: {
                position: 'absolute',
                top: '54px',
                left: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 10
            }
        },
            // Circular back button
            React.createElement('button', {
                onClick: () => onNavigate('home'),
                style: {
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'white',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }
            },
                React.createElement('i', {
                    className: 'ph ph-caret-left',
                    style: {
                        fontSize: '18px',
                        color: '#1a1a1a'
                    }
                })
            ),
            // Week/Day toggle
            React.createElement('div', {
                style: {
                    background: '#e5e5ea',
                    borderRadius: '14px',
                    padding: '2px',
                    display: 'flex',
                    gap: '2px',
                    flex: 1,
                    maxWidth: '210px',
                    margin: '0 auto'
                }
            },
                React.createElement('button', {
                    onClick: () => setActiveView('week'),
                    style: {
                        flex: 1,
                        padding: '6px 17px',
                        borderRadius: '12px',
                        border: 'none',
                        background: activeView === 'week' ? 'white' : 'transparent',
                        color: '#1a1a1a',
                        fontSize: '11px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        boxShadow: activeView === 'week' ? '0 2px 4px rgba(0,0,0,0.08)' : 'none'
                    }
                }, 'Week'),
                React.createElement('button', {
                    onClick: () => setActiveView('day'),
                    style: {
                        flex: 1,
                        padding: '6px 17px',
                        borderRadius: '12px',
                        border: 'none',
                        background: activeView === 'day' ? 'white' : 'transparent',
                        color: '#1a1a1a',
                        fontSize: '11px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        boxShadow: activeView === 'day' ? '0 2px 4px rgba(0,0,0,0.08)' : 'none'
                    }
                }, 'Day')
            ),
            // Empty div for spacing
            React.createElement('div', { style: { width: '32px' } })
        ),
        // Content area with insights
        React.createElement(
            'div',
            {
                style: {
                    padding: '20px',
                    paddingBottom: '60px',
                    marginTop: '54px'
                }
            },
            // Insight 1 - What happened today
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'WHAT HAPPENED TODAY'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        marginBottom: '10px',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #ffd700',
                        background: '#fffbf0'
                    }
                },
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '5px'
                        }
                    },
                        React.createElement('i', {
                            className: 'ph-fill ph-trend-up',
                            style: {
                                fontSize: '14px',
                                color: '#ff453a',
                                marginTop: '2px'
                            }
                        }),
                        React.createElement('div', null,
                            'More 50% phone checks this afternoon',
                            React.createElement('br'),
                            'due to 3h less sleep than usual last night'
                        )
                    )
                ),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#8e8e93',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'Repeated 6 times in 2 months'),
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap'
                        }
                    },
                    ['Sounds right', 'Not quite', 'Something else'].map((label, i) =>
                        React.createElement(
                            'button',
                            {
                                key: i,
                                style: {
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    border: '1px solid #d1d1d6',
                                    background: 'transparent',
                                    color: '#8e8e93',
                                    fontSize: '11px',
                                    fontWeight: '400',
                                    cursor: 'pointer',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                                }
                            },
                            label
                        )
                    )
                )
            ),
            // Insight 2 - What is different today
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'WHAT IS DIFFERENT TODAY'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        marginBottom: '10px',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #ffd700',
                        background: '#fffbf0'
                    }
                },
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '5px'
                        }
                    },
                        React.createElement('i', {
                            className: 'ph-fill ph-barbell',
                            style: {
                                fontSize: '14px',
                                color: '#ff9f0a',
                                marginTop: '2px'
                            }
                        }),
                        React.createElement('div', null,
                            'Gym day = 25% less evening screen time',
                            React.createElement('br'),
                            'No 9-11 PM spike tonight'
                        )
                    )
                ),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#8e8e93',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'Predicted from 6 weeks of evening data'),
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap'
                        }
                    },
                    ['Sounds right', 'Not quite', 'Something else'].map((label, i) =>
                        React.createElement(
                            'button',
                            {
                                key: i,
                                style: {
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    border: '1px solid #d1d1d6',
                                    background: 'transparent',
                                    color: '#8e8e93',
                                    fontSize: '11px',
                                    fontWeight: '400',
                                    cursor: 'pointer',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                                }
                            },
                            label
                        )
                    )
                )
            ),
            // Key Moments section
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'KEY MOMENTS'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #c4e1ff',
                        background: '#f5faff'
                    }
                },
                    React.createElement('div', {
                        style: {
                            fontWeight: '600',
                            marginBottom: '8px'
                        }
                    }, 'Post-meeting burst - 1:10 PM'),
                    React.createElement('div', {
                        style: {
                            marginBottom: '4px',
                            display: 'flex'
                        }
                    },
                        React.createElement('span', { style: { color: '#007aff', minWidth: '70px', flexShrink: 0 } }, 'Volume:'),
                        React.createElement('span', null, '6 pickups in 15 minutes')
                    ),
                    React.createElement('div', {
                        style: {
                            marginBottom: '4px',
                            display: 'flex'
                        }
                    },
                        React.createElement('span', { style: { color: '#007aff', minWidth: '70px', flexShrink: 0 } }, 'Duration:'),
                        React.createElement('span', null, 'All under 25 seconds')
                    ),
                    React.createElement('div', {
                        style: {
                            marginBottom: '4px',
                            display: 'flex'
                        }
                    },
                        React.createElement('span', { style: { color: '#007aff', minWidth: '70px', flexShrink: 0 } }, 'Pattern:'),
                        React.createElement('span', null,
                            'Instagram → lock screen → Reddit → Twitter → back to Instagram'
                        )
                    )
                ),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#8e8e93',
                        lineHeight: '1.5',
                        fontWeight: '400',
                        marginTop: '10px'
                    }
                }, 'Result: highest-velocity window today')
            ),
            // What worked today section
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'WHAT WORKED TODAY'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #c8e6c9',
                        background: '#f1f8f4'
                    }
                },
                    React.createElement('div', {
                        style: {
                            fontWeight: '600',
                            marginBottom: '4px'
                        }
                    }, 'Biggest phone-free stretch: 11 AM – 1 PM'),
                    React.createElement('div', {
                        style: {
                            display: 'flex'
                        }
                    },
                        React.createElement('span', { style: { color: '#34c759', minWidth: '70px', flexShrink: 0 } }, 'Situation:'),
                        React.createElement('span', null, 'Meetings + focus mode')
                    )
                )
            ),
            // Patterns forming section
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: '14px'
                    }
                }, 'PATTERNS FORMING')
            )
        )
    );
}

window.InsightsDetailScreen = InsightsDetailScreen;
