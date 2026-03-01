function InsightsDetailScreen({ onNavigate }) {
    const [activeView, setActiveView] = React.useState('day');
    const [expandedInsight1, setExpandedInsight1] = React.useState(false);
    const [expandedInsight2, setExpandedInsight2] = React.useState(false);
    const [feedback1, setFeedback1] = React.useState(null);
    const [feedback2, setFeedback2] = React.useState(null);
    const [showTextPopup, setShowTextPopup] = React.useState(null);
    const [feedbackText, setFeedbackText] = React.useState('');

    const handleFeedback = (section, type) => {
        if (type === 'something') {
            setShowTextPopup(section);
            setFeedbackText('');
            return;
        }
        if (section === 1) setFeedback1(type);
        else setFeedback2(type);
    };

    const submitTextFeedback = () => {
        if (showTextPopup === 1) setFeedback1('something');
        else setFeedback2('something');
        setShowTextPopup(null);
        setFeedbackText('');
    };

    const renderFeedbackButtons = (section) => {
        const selected = section === 1 ? feedback1 : feedback2;
        const buttons = [
            { label: 'Sounds right', type: 'right', activeBg: '#e8f5e9', activeColor: '#34c759', activeBorder: '#c8e6c9' },
            { label: 'Not quite', type: 'not-quite', activeBg: '#ffeaea', activeColor: '#ff453a', activeBorder: '#ffcdd2' },
            { label: 'Something else', type: 'something', activeBg: '#e3f2fd', activeColor: '#007aff', activeBorder: '#bbdefb' }
        ];
        return React.createElement('div', {
            style: { display: 'flex', gap: '6px', flexWrap: 'wrap' }
        },
            buttons.map((btn, i) => {
                const isActive = selected === btn.type;
                return React.createElement('button', {
                    key: i,
                    onClick: () => handleFeedback(section, btn.type),
                    style: {
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: '1px solid ' + (isActive ? btn.activeBorder : '#d1d1d6'),
                        background: isActive ? btn.activeBg : 'transparent',
                        color: isActive ? btn.activeColor : '#8e8e93',
                        fontSize: '11px',
                        fontWeight: isActive ? '500' : '400',
                        cursor: 'pointer',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        transition: 'all 0.2s ease'
                    }
                }, btn.label);
            })
        );
    };

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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: expandedInsight1 ? '14px' : '0',
                        letterSpacing: '0.5px',
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
                            lineHeight: '1.6',
                            fontWeight: '400',
                            marginBottom: '12px',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1px solid #ffd700',
                            background: '#fffbf0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                        }
                    },
                        React.createElement('div', {
                            style: {
                                fontWeight: '400',
                                color: '#1a1a1a',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }
                        },
                            React.createElement('i', {
                                className: 'ph-fill ph-trend-up',
                                style: { fontSize: '14px', color: '#ff453a' }
                            }),
                            '50% more phone checks this afternoon'
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Cause:'),
                            React.createElement('span', { style: { color: '#6e6e73' } }, '3h less sleep than usual')
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Pattern:'),
                            React.createElement('span', { style: { color: '#6e6e73' } }, 'Repeated 6 times in 2 months')
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Why:'),
                            React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Low energy → phone becomes the easy dopamine hit')
                        )
                    ),
                    renderFeedbackButtons(1)
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: expandedInsight2 ? '14px' : '0',
                        letterSpacing: '0.5px',
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
                            lineHeight: '1.6',
                            fontWeight: '400',
                            marginBottom: '12px',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: '1px solid #c8e6c9',
                            background: '#f1f8f4',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                        }
                    },
                        React.createElement('div', {
                            style: {
                                fontWeight: '400',
                                color: '#1a1a1a',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }
                        },
                            React.createElement('i', {
                                className: 'ph-fill ph-trend-down',
                                style: { fontSize: '14px', color: '#34c759' }
                            }),
                            '25% less screen time'
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Cause:'),
                            React.createElement('span', { style: { color: '#6e6e73' } }, 'Gym day detected')
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Predict:'),
                            React.createElement('span', { style: { color: '#6e6e73' } }, 'No 9-11 PM spike tonight (6 weeks of data)')
                        ),
                        React.createElement('div', {
                            style: { display: 'flex' }
                        },
                            React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Why:'),
                            React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Exercise kills the restlessness that triggers scrolling')
                        )
                    ),
                    renderFeedbackButtons(2)
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '14px',
                        letterSpacing: '0.5px'
                    }
                }, 'KEY MOMENTS'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #ffd700',
                        background: '#fffbf0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }
                },
                    React.createElement('div', {
                        style: {
                            fontWeight: '400',
                            color: '#1a1a1a',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }
                    },
                        React.createElement('span', null, 'Post-meeting burst'),
                        React.createElement('span', { style: { color: '#6e6e73', fontSize: '12px' } }, '1:10 PM')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Volume:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, '6 pickups in 15m')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Duration:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'All under 25s')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Pattern:'),
                        React.createElement('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                flexWrap: 'wrap'
                            }
                        },
                            React.createElement('i', { className: 'ph-fill ph-instagram-logo', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                            React.createElement('i', { className: 'ph-fill ph-whatsapp-logo', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                            React.createElement('i', { className: 'ph-fill ph-reddit-logo', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                            React.createElement('i', { className: 'ph-fill ph-x-logo', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                            React.createElement('i', { className: 'ph-fill ph-instagram-logo', style: { fontSize: '14px', color: '#8e8e93' } })
                        )
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Result:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'Highest-velocity window today')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Why:'),
                        React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Mental fatigue after focus → brain seeks quick relief')
                    )
                )
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '14px',
                        letterSpacing: '0.5px'
                    }
                }, 'WHAT WORKED TODAY'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #c8e6c9',
                        background: '#f1f8f4',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }
                },
                    React.createElement('div', {
                        style: {
                            fontWeight: '400',
                            color: '#1a1a1a',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }
                    },
                        React.createElement('span', null, 'Biggest phone-free stretch'),
                        React.createElement('span', { style: { color: '#6e6e73', fontSize: '12px' } }, '11 AM – 1 PM')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Situation:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'Meetings + focus mode')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Result:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, '2h with zero pickups')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Felt like:'),
                        React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Deep focus, no urge to check')
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '14px',
                        letterSpacing: '0.5px'
                    }
                }, 'PATTERNS FORMING'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #d5dae0',
                        background: '#f5f7f9',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }
                },
                    React.createElement('div', {
                        style: {
                            fontWeight: '400',
                            color: '#1a1a1a'
                        }
                    }, 'Post-meeting phone pickups'),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#7c8a96', minWidth: '70px', flexShrink: 0 } }, 'Freq:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, '3 times this week')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#7c8a96', minWidth: '70px', flexShrink: 0 } }, 'Trend:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'Increasing since last week')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#7c8a96', minWidth: '70px', flexShrink: 0 } }, 'Why:'),
                        React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Meetings drain focus → phone fills the gap')
                    )
                )
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '14px',
                        letterSpacing: '0.5px'
                    }
                }, 'WHAT HAPPENED THIS WEEK'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#1a1a1a',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #ffd700',
                        background: '#fffbf0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }
                },
                    // When
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'When:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'Commute home')
                    ),
                    // Pattern
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Pattern:'),
                        React.createElement('div', {
                            style: { display: 'flex', alignItems: 'center', gap: '5px', color: '#6e6e73' }
                        },
                            React.createElement('i', { className: 'ph-fill ph-chat-circle-dots', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', null, 'Messages'),
                            React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                            React.createElement('i', { className: 'ph-fill ph-youtube-logo', style: { fontSize: '14px', color: '#8e8e93' } }),
                            React.createElement('span', null, 'YouTube within 30s')
                        )
                    ),
                    // Frequency
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Freq:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, '19 times across 6 days')
                    ),
                    React.createElement('div', {
                        style: { display: 'flex' }
                    },
                        React.createElement('span', { style: { color: '#d4a017', minWidth: '70px', flexShrink: 0 } }, 'Why:'),
                        React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Replying keeps you in phone mode, YouTube becomes the easy next step')
                    )
                )
            ),
            // Ripple Effect section
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '4px',
                        letterSpacing: '0.5px'
                    }
                }, 'PATTERN FORMED THIS WEEK'),
                React.createElement('div', {
                    style: {
                        fontSize: '15px',
                        color: '#1a1a1a',
                        fontWeight: '600',
                        marginBottom: '6px'
                    }
                }, '9 - 11 PM'),
                React.createElement('div', {
                    style: {
                        fontSize: '12px',
                        color: '#8e8e93',
                        marginBottom: '14px'
                    }
                }, '6 of 7 evenings followed this pattern'),
                React.createElement('div', {
                    style: {
                        fontSize: '12px',
                        color: '#6e6e73',
                        fontStyle: 'italic',
                        marginBottom: '14px',
                        padding: '8px 10px',
                        background: '#f9f9f9',
                        borderRadius: '6px',
                        borderLeft: '2px solid #d4a017'
                    }
                }, 'After intense focus, your brain craves passive content as a reward'),
                // Day entries
                React.createElement('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0px'
                    }
                },
                    [
                        { day: 'Mon', chess: '1h 20m', app: 'instagram', appTime: '33m' },
                        { day: 'Tue', chess: '1h 5m', app: 'reddit', appTime: '42m' },
                        { day: 'Wed', chess: '1h 15m', app: 'instagram', appTime: '38m' },
                        { day: 'Thu', chess: '1h 25m', app: 'youtube', appTime: '35m' },
                        { day: 'Fri', chess: '1h 10m', app: 'instagram', appTime: '30m' },
                        { day: 'Sat', chess: '1h 18m', app: 'reddit', appTime: '36m' },
                        { day: 'Sun', chess: null, app: null, appTime: null }
                    ].map((entry, i, arr) =>
                        React.createElement('div', {
                            key: i,
                            style: {
                                display: 'flex',
                                alignItems: 'stretch',
                                minHeight: entry.chess ? '52px' : '40px'
                            }
                        },
                            // Timeline column (dot + line)
                            React.createElement('div', {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '16px',
                                    marginRight: '10px',
                                    flexShrink: 0
                                }
                            },
                                React.createElement('div', {
                                    style: {
                                        width: '7px',
                                        height: '7px',
                                        borderRadius: '50%',
                                        background: entry.chess ? '#8e8e93' : '#708238',
                                        marginTop: '6px',
                                        flexShrink: 0
                                    }
                                }),
                                i < arr.length - 1 ? React.createElement('div', {
                                    style: {
                                        width: '1px',
                                        flex: 1,
                                        background: '#e5e5ea'
                                    }
                                }) : null
                            ),
                            // Content column
                            React.createElement('div', {
                                style: {
                                    flex: 1,
                                    paddingBottom: i < arr.length - 1 ? '8px' : '0'
                                }
                            },
                                // Day label
                                React.createElement('div', {
                                    style: {
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: entry.chess ? '#1a1a1a' : '#708238',
                                        marginBottom: '2px'
                                    }
                                }, entry.day),
                                // Content
                                entry.chess ? React.createElement(React.Fragment, null,
                                    React.createElement('div', {
                                        style: {
                                            fontSize: '12px',
                                            color: '#6e6e73',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }
                                    },
                                        React.createElement('span', null, entry.chess + ' Chess'),
                                        React.createElement('span', { style: { color: '#c7c7cc' } }, '→'),
                                        React.createElement('i', {
                                            className: 'ph-fill ph-' + entry.app + '-logo',
                                            style: { fontSize: '13px', color: '#8e8e93' }
                                        }),
                                        React.createElement('span', null, entry.appTime)
                                    )
                                ) : React.createElement('div', {
                                    style: {
                                        fontSize: '12px',
                                        color: '#708238'
                                    }
                                }, 'No evening screen time')
                            )
                        )
                    )
                )
            ),
            // What Worked This Week section
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
                        fontSize: '11px',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginBottom: '10px',
                        letterSpacing: '0.5px'
                    }
                }, 'WHAT WORKED THIS WEEK'),
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
                            fontWeight: '400',
                            marginBottom: '4px',
                            color: '#1a1a1a',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }
                    },
                        React.createElement('span', null, 'Phone-free until 10:30 AM'),
                        React.createElement('span', { style: { color: '#6e6e73', fontSize: '12px' } }, '(4/7 d)')
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            marginBottom: '4px'
                        }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Situation:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, 'Morning runs')
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex'
                        }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Result:'),
                        React.createElement('span', { style: { color: '#6e6e73' } }, '-25% screen time')
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            marginBottom: '4px'
                        }
                    },
                        React.createElement('span', { style: { color: '#708238', minWidth: '70px', flexShrink: 0 } }, 'Felt like:'),
                        React.createElement('span', { style: { color: '#6e6e73', fontStyle: 'italic' } }, 'Calm mornings, started the day on your terms')
                    )
                )
            )
        ),
        // Text feedback popup overlay
        showTextPopup && React.createElement('div', {
            onClick: () => setShowTextPopup(null),
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                padding: '20px'
            }
        },
            React.createElement('div', {
                onClick: (e) => e.stopPropagation(),
                style: {
                    background: 'white',
                    borderRadius: '14px',
                    padding: '20px',
                    width: '100%',
                    maxWidth: '300px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }
            },
                React.createElement('div', {
                    style: {
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        marginBottom: '4px'
                    }
                }, 'What do you think?'),
                React.createElement('div', {
                    style: {
                        fontSize: '12px',
                        color: '#8e8e93',
                        marginBottom: '12px'
                    }
                }, 'Tell us what actually happened'),
                React.createElement('textarea', {
                    value: feedbackText,
                    onChange: (e) => setFeedbackText(e.target.value),
                    placeholder: 'e.g. I was bored, not tired...',
                    style: {
                        width: '100%',
                        minHeight: '80px',
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #d1d1d6',
                        fontSize: '13px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        resize: 'none',
                        outline: 'none',
                        boxSizing: 'border-box',
                        marginBottom: '12px'
                    }
                }),
                React.createElement('div', {
                    style: { display: 'flex', gap: '8px', justifyContent: 'flex-end' }
                },
                    React.createElement('button', {
                        onClick: () => setShowTextPopup(null),
                        style: {
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid #d1d1d6',
                            background: 'transparent',
                            color: '#8e8e93',
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                        }
                    }, 'Cancel'),
                    React.createElement('button', {
                        onClick: submitTextFeedback,
                        style: {
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#007aff',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                        }
                    }, 'Submit')
                )
            )
        )
    );
}

window.InsightsDetailScreen = InsightsDetailScreen;
