function InsightsDetailScreen({ onNavigate }) {
    const [activeView, setActiveView] = React.useState('day');
    const [expandedInsight1, setExpandedInsight1] = React.useState(false);
    const [expandedInsight2, setExpandedInsight2] = React.useState(false);

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
        activeView === 'day' ? React.createElement(
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
                    onClick: () => setExpandedInsight1(!expandedInsight1),
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: expandedInsight1 ? '14px' : '0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                },
                    'WHAT HAPPENED TODAY',
                    React.createElement('i', {
                        className: 'ph ph-caret-down',
                        style: {
                            fontSize: '16px',
                            color: '#8e8e93',
                            transform: expandedInsight1 ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }
                    })
                ),
                expandedInsight1 && React.createElement(
                    React.Fragment,
                    null,
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
                    onClick: () => setExpandedInsight2(!expandedInsight2),
                    style: {
                        fontSize: '14px',
                        color: '#1a1a1a',
                        fontWeight: '400',
                        marginBottom: expandedInsight2 ? '14px' : '0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                },
                    'WHAT IS DIFFERENT TODAY',
                    React.createElement('i', {
                        className: 'ph ph-caret-down',
                        style: {
                            fontSize: '16px',
                            color: '#8e8e93',
                            transform: expandedInsight2 ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }
                    })
                ),
                expandedInsight2 && React.createElement(
                    React.Fragment,
                    null,
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
                    }, 'Post-meeting burst: 1:10 PM'),
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
                        React.createElement('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                flexWrap: 'wrap'
                            }
                        },
                            React.createElement('i', {
                                className: 'ph-fill ph-instagram-logo',
                                style: { fontSize: '16px', color: '#E4405F' }
                            }),
                            React.createElement('i', {
                                className: 'ph ph-caret-right',
                                style: { fontSize: '12px', color: '#8e8e93' }
                            }),
                            React.createElement('i', {
                                className: 'ph-fill ph-whatsapp-logo',
                                style: { fontSize: '16px', color: '#25D366' }
                            }),
                            React.createElement('i', {
                                className: 'ph ph-caret-right',
                                style: { fontSize: '12px', color: '#8e8e93' }
                            }),
                            React.createElement('i', {
                                className: 'ph-fill ph-reddit-logo',
                                style: { fontSize: '16px', color: '#FF4500' }
                            }),
                            React.createElement('i', {
                                className: 'ph ph-caret-right',
                                style: { fontSize: '12px', color: '#8e8e93' }
                            }),
                            React.createElement('i', {
                                className: 'ph-fill ph-x-logo',
                                style: { fontSize: '16px', color: '#000000' }
                            }),
                            React.createElement('i', {
                                className: 'ph ph-caret-right',
                                style: { fontSize: '12px', color: '#8e8e93' }
                            }),
                            React.createElement('i', {
                                className: 'ph-fill ph-instagram-logo',
                                style: { fontSize: '16px', color: '#E4405F' }
                            })
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
                }, 'PATTERNS FORMING'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #e6dff9',
                        background: '#f8f6ff'
                    }
                }, 'Observed post meeting pickups 3 times this week.')
            )
        ) : React.createElement(
            'div',
            {
                style: {
                    padding: '20px',
                    paddingBottom: '60px',
                    marginTop: '54px'
                }
            },
            // The One Insight section
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
                }, 'THE ONE INSIGHT'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: '1px solid #ffd6e8',
                        background: '#fff5f9'
                    }
                }, 'During your commute home this week, every time you replied in Messages you were in Youtube within 30 seconds, 19 times across 6 days.')
            ),
            // Vulnerable Window section
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
                }, 'VULNERABLE WINDOW: 9-11 PM'),
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
                            marginBottom: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }
                    },
                        React.createElement('span', { style: { color: '#007aff' } }, 'At least 1 hour on'),
                        React.createElement('span', { style: { fontWeight: '600' } }, 'Chess'),
                        React.createElement('span', null, ': 6 of 7 days')
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            flexWrap: 'wrap'
                        }
                    },
                        React.createElement('span', { style: { color: '#007aff' } }, 'Followed by 30+ min of:'),
                        React.createElement('i', {
                            className: 'ph-fill ph-instagram-logo',
                            style: { fontSize: '16px', color: '#E4405F' }
                        }),
                        React.createElement('span', null, '(3 days),'),
                        React.createElement('i', {
                            className: 'ph-fill ph-reddit-logo',
                            style: { fontSize: '16px', color: '#FF4500' }
                        }),
                        React.createElement('span', null, '(2 days),'),
                        React.createElement('i', {
                            className: 'ph-fill ph-youtube-logo',
                            style: { fontSize: '16px', color: '#FF0000' }
                        }),
                        React.createElement('span', null, '(1 day)')
                    )
                )
            )
        )
    );
}

window.InsightsDetailScreen = InsightsDetailScreen;
