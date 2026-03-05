function InsightsDetailScreen({ onNavigate, onViewChange }) {
    const [expandedInsight1, setExpandedInsight1] = React.useState(false);
    const [expandedInsight2, setExpandedInsight2] = React.useState(false);
    const [feedback1, setFeedback1] = React.useState(null);
    const [feedback2, setFeedback2] = React.useState(null);
    const [showTextPopup, setShowTextPopup] = React.useState(null);
    const [feedbackText, setFeedbackText] = React.useState('');
    const [showInfoPopup, setShowInfoPopup] = React.useState(false);
    const [infoPopupScreen, setInfoPopupScreen] = React.useState('main');
    const [trackingEnabled, setTrackingEnabled] = React.useState(true);
    const [categoryToggles, setCategoryToggles] = React.useState({
        socialMedia: true,
        entertainment: true,
        gaming: true,
        productivity: false,
        health: true,
        communication: true
    });
    const [showMemojiMoods, setShowMemojiMoods] = React.useState(false);

    // Notify parent about view (always 'day' now since combined)
    React.useEffect(() => {
        if (onViewChange) onViewChange('day');
    }, []);

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
        // Status Bar
        React.createElement('div', {
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
                    style: { background: '#c7c7cc', borderRadius: '2px', width: '18px', height: '10px', display: 'inline-block' }
                })
            )
        ),
        // Top bar: back + title + info
        !showMemojiMoods && React.createElement('div', {
            style: {
                padding: '6px 20px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }
        },
            React.createElement('button', {
                onClick: () => onNavigate('home'),
                style: {
                    width: '32px', height: '32px', borderRadius: '50%', background: 'white',
                    border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }
            },
                React.createElement('i', { className: 'ph ph-caret-left', style: { fontSize: '18px', color: '#1a1a1a' } })
            ),
            React.createElement('span', {
                style: { fontSize: '15px', fontWeight: '600', color: '#1a1a1a' }
            }, 'Insights'),
            React.createElement('button', {
                onClick: () => setShowInfoPopup(true),
                style: {
                    width: '32px', height: '32px', borderRadius: '50%', background: 'white',
                    border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    fontSize: '15px', fontWeight: '600', color: '#007aff',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", serif'
                }
            }, 'i')
        ),

        // === SCROLLABLE CONTENT ===
        !showMemojiMoods && React.createElement('div', {
            style: { padding: '0 20px 60px' }
        },

            // ── TODAY SECTION ──
            React.createElement('div', {
                style: {
                    fontSize: '11px', color: '#8e8e93', fontWeight: '500',
                    letterSpacing: '0.5px', marginBottom: '10px'
                }
            }, 'TODAY'),

            // Insight 1 — What happened (with memoji)
            React.createElement('div', {
                style: {
                    background: 'white', borderRadius: '12px', padding: '14px',
                    marginBottom: '10px'
                }
            },
                React.createElement('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }
                },
                    // Sleepy memoji thumbnail
                    React.createElement('div', {
                        style: {
                            width: '44px', height: '44px', borderRadius: '10px',
                            overflow: 'hidden', flexShrink: 0
                        }
                    },
                        React.createElement('img', {
                            src: 'src/assets/mood-sleepy.jpg',
                            style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
                        })
                    ),
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }
                    },
                        React.createElement('i', { className: 'ph-fill ph-trend-up', style: { fontSize: '14px', color: '#ff453a', flexShrink: 0 } }),
                        React.createElement('span', { style: { fontSize: '13px', fontWeight: '400', color: '#1a1a1a' } },
                            '50% more phone checks due to 3h less sleep'
                        )
                    )
                ),
                renderFeedbackButtons(1)
            ),

            // What worked — compact
            React.createElement('div', {
                style: {
                    background: 'white', borderRadius: '12px', padding: '14px',
                    marginBottom: '20px'
                }
            },
                React.createElement('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }
                },
                    React.createElement('i', { className: 'ph-fill ph-check-circle', style: { fontSize: '14px', color: '#34c759' } }),
                    React.createElement('span', { style: { fontSize: '13px', fontWeight: '500', color: '#1a1a1a' } }, '2h phone-free stretch')
                ),
                React.createElement('div', { style: { fontSize: '12px', color: '#6e6e73' } },
                    '11 AM – 1 PM · Meetings + focus mode'
                )
            ),

            // ── THIS WEEK SECTION ──
            React.createElement('div', {
                style: {
                    fontSize: '11px', color: '#8e8e93', fontWeight: '500',
                    letterSpacing: '0.5px', marginBottom: '10px'
                }
            }, 'THIS WEEK'),

            // 9-11 PM Post-Chess pattern — bar graph
            React.createElement('div', {
                style: {
                    background: 'white', borderRadius: '12px', padding: '14px',
                    marginBottom: '10px'
                }
            },
                // Title
                React.createElement('div', {
                    style: { fontSize: '13px', fontWeight: '500', color: '#1a1a1a', marginBottom: '3px' }
                }, 'Commute scrolling'),
                // Subtitle with clock icon
                React.createElement('div', {
                    style: { display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }
                },
                    React.createElement('i', { className: 'ph-fill ph-train-simple', style: { fontSize: '13px', color: '#5856d6' } }),
                    React.createElement('span', { style: { fontSize: '12px', color: '#8e8e93' } }, '7–9 AM'),
                    React.createElement('span', { style: { fontSize: '10px', color: '#c7c7cc' } }, '·'),
                    React.createElement('span', { style: { fontSize: '11px', color: '#8e8e93' } }, '6/7 mornings')
                ),
                // Bar chart with Y axis
                React.createElement('div', {
                    style: {
                        display: 'flex', position: 'relative',
                        marginBottom: '4px'
                    }
                },
                    // Y-axis labels
                    React.createElement('div', {
                        style: {
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            height: '80px', paddingRight: '6px', width: '28px', flexShrink: 0
                        }
                    },
                        React.createElement('span', { style: { fontSize: '9px', color: '#aeaeb2', textAlign: 'right', lineHeight: '1' } }, '90m'),
                        React.createElement('span', { style: { fontSize: '9px', color: '#aeaeb2', textAlign: 'right', lineHeight: '1' } }, '60m'),
                        React.createElement('span', { style: { fontSize: '9px', color: '#aeaeb2', textAlign: 'right', lineHeight: '1' } }, '30m'),
                        React.createElement('span', { style: { fontSize: '9px', color: '#aeaeb2', textAlign: 'right', lineHeight: '1' } }, '0')
                    ),
                    // Bars area
                    React.createElement('div', {
                        style: {
                            flex: 1, position: 'relative',
                            borderLeft: '1px solid #e5e5ea',
                            height: '80px'
                        }
                    },
                        // Horizontal grid lines
                        React.createElement('div', { style: { position: 'absolute', left: 0, right: 0, top: '0%', height: '1px', background: '#f0f0f0' } }),
                        React.createElement('div', { style: { position: 'absolute', left: 0, right: 0, top: '33.3%', height: '1px', background: '#f0f0f0' } }),
                        React.createElement('div', { style: { position: 'absolute', left: 0, right: 0, top: '66.6%', height: '1px', background: '#f0f0f0' } }),
                        React.createElement('div', { style: { position: 'absolute', left: 0, right: 0, bottom: '0', height: '1px', background: '#f0f0f0' } }),
                        // Bars container — absolutely positioned at bottom
                        React.createElement('div', {
                            style: {
                                position: 'absolute', bottom: 0, left: '4px', right: '4px',
                                height: '100%', display: 'flex', alignItems: 'flex-end', gap: '4px'
                            }
                        },
                            [
                                { day: 'M', music: 50, social: 30 },
                                { day: 'T', music: 25, social: 40 },
                                { day: 'W', music: 35, social: 40 },
                                { day: 'T', music: 55, social: 30 },
                                { day: 'F', music: 20, social: 50 },
                                { day: 'S', music: 40, social: 38 },
                                { day: 'S', music: 0, social: 0 }
                            ].map((entry, i) => {
                                var totalMins = entry.music + entry.social;
                                var musicH = Math.round((entry.music / 90) * 80);
                                var socialH = Math.round((entry.social / 90) * 80);
                                return React.createElement('div', {
                                    key: i,
                                    style: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }
                                },
                                    // Stacked bar
                                    React.createElement('div', {
                                        style: {
                                            width: '20px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'stretch',
                                            borderRadius: '3px 3px 1px 1px',
                                            overflow: 'hidden'
                                        }
                                    },
                                        // Social media (top portion) - pink/red
                                        React.createElement('div', {
                                            style: {
                                                height: socialH + 'px',
                                                background: totalMins > 0 ? '#FF6B6B' : 'transparent'
                                            }
                                        }),
                                        // Music (bottom portion) - teal
                                        React.createElement('div', {
                                            style: {
                                                height: musicH + 'px',
                                                background: totalMins > 0 ? '#34C8B0' : 'transparent'
                                            }
                                        })
                                    )
                                );
                            })
                        )
                    )
                ),
                // Day labels row
                React.createElement('div', {
                    style: { display: 'flex', marginLeft: '35px', marginTop: '4px', marginBottom: '0px' }
                },
                    [
                        { day: 'M', has: true }, { day: 'T', has: true }, { day: 'W', has: true },
                        { day: 'T', has: true }, { day: 'F', has: true }, { day: 'S', has: true },
                        { day: 'S', has: false }
                    ].map((d, i) =>
                        React.createElement('span', {
                            key: i,
                            style: {
                                flex: 1, textAlign: 'center', fontSize: '9px',
                                color: d.has ? '#8e8e93' : '#34c759',
                                fontWeight: d.has ? '400' : '600'
                            }
                        }, d.day)
                    )
                ),
                // Legend
                React.createElement('div', {
                    style: { display: 'flex', gap: '12px', marginTop: '8px', marginLeft: '35px' }
                },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                        React.createElement('div', { style: { width: '8px', height: '8px', borderRadius: '2px', background: '#34C8B0' } }),
                        React.createElement('span', { style: { fontSize: '9px', color: '#8e8e93' } }, 'Music')
                    ),
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                        React.createElement('div', { style: { width: '8px', height: '8px', borderRadius: '2px', background: '#FF6B6B' } }),
                        React.createElement('span', { style: { fontSize: '9px', color: '#8e8e93' } }, 'Social Media')
                    )
                ),
                // Why explanation
                React.createElement('div', {
                    style: {
                        fontSize: '12px', color: '#6e6e73', fontStyle: 'italic',
                        marginTop: '8px'
                    }
                }, 'During commute downtime, music and social media fill the gap')
            ),

            // Week in scenes — chess image
            React.createElement('div', {
                style: {
                    background: 'white', borderRadius: '12px', overflow: 'hidden',
                    marginBottom: '10px'
                }
            },
                React.createElement('img', {
                    src: 'src/assets/mood-commute-wide.png',
                    style: { width: '100%', height: 'auto', display: 'block' }
                }),
                React.createElement('div', {
                    style: { padding: '10px 14px' }
                },
                    React.createElement('div', {
                        style: { fontSize: '13px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' }
                    }, 'Memoji of the week'),
                    React.createElement('div', {
                        style: { fontSize: '11px', color: '#8e8e93' }
                    }, 'Morning commute · 6 days this week')
                )
            ),

        ),

        // Memoji moods overlay
        showMemojiMoods && React.createElement('div', {
            style: { background: '#f2f2f7' }
        },
            React.createElement('div', {
                style: { padding: '10px 20px 16px', display: 'flex', alignItems: 'center', gap: '10px' }
            },
                React.createElement('button', {
                    onClick: () => setShowMemojiMoods(false),
                    style: {
                        width: '32px', height: '32px', borderRadius: '50%', background: 'white',
                        border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }
                },
                    React.createElement('i', { className: 'ph ph-caret-left', style: { fontSize: '16px', color: '#1a1a1a' } })
                ),
                React.createElement('span', {
                    style: {
                        fontSize: '11px', fontWeight: '500', color: '#8e8e93',
                        letterSpacing: '0.5px', textTransform: 'uppercase'
                    }
                }, 'Your Week in Moods')
            ),
            React.createElement('div', {
                style: {
                    padding: '0 20px 20px', display: 'grid',
                    gridTemplateColumns: '1fr 1fr', gap: '12px'
                }
            },
                // Card 1
                React.createElement('div', {
                    style: { background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }
                },
                    React.createElement('img', { src: 'src/assets/mood-commute.png', style: { width: '100%', height: 'auto', display: 'block' } }),
                    React.createElement('div', { style: { padding: '8px 10px' } },
                        React.createElement('div', { style: { fontSize: '11px', fontWeight: '400', color: '#8e8e93' } }, 'Commute Scroll')
                    )
                ),
                // Card 2
                React.createElement('div', {
                    style: { background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }
                },
                    React.createElement('img', { src: 'src/assets/mood-running.png', style: { width: '100%', height: 'auto', display: 'block' } }),
                    React.createElement('div', { style: { padding: '8px 10px' } },
                        React.createElement('div', { style: { fontSize: '11px', fontWeight: '400', color: '#8e8e93' } }, 'Morning Run')
                    )
                ),
                // Card 3
                React.createElement('div', {
                    style: { background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }
                },
                    React.createElement('img', { src: 'src/assets/mood-chess.png', style: { width: '100%', height: 'auto', display: 'block' } }),
                    React.createElement('div', { style: { padding: '8px 10px' } },
                        React.createElement('div', { style: { fontSize: '11px', fontWeight: '400', color: '#8e8e93' } }, 'Evening Chess')
                    )
                ),
                // Card 4
                React.createElement('div', {
                    style: { background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }
                },
                    React.createElement('img', { src: 'src/assets/mood-meditation.png', style: { width: '100%', height: 'auto', display: 'block' } }),
                    React.createElement('div', { style: { padding: '8px 10px' } },
                        React.createElement('div', { style: { fontSize: '11px', fontWeight: '400', color: '#8e8e93' } }, 'Balanced')
                    )
                )
            )
        ),

        // Info popup overlay
        showInfoPopup && React.createElement('div', {
            onClick: () => { setShowInfoPopup(false); setInfoPopupScreen('main'); },
            style: {
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', zIndex: 100, padding: '20px'
            }
        },
            React.createElement('div', {
                onClick: (e) => e.stopPropagation(),
                style: {
                    background: 'white', borderRadius: '20px', padding: '0',
                    width: '100%', maxWidth: '300px', boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                    overflow: 'hidden', maxHeight: 'calc(100% - 40px)', overflowY: 'auto'
                }
            },
                infoPopupScreen === 'main' ? React.createElement(React.Fragment, null,
                    React.createElement('div', { style: { padding: '20px 22px 22px' } },
                        React.createElement('div', {
                            style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }
                        },
                            React.createElement('div', {
                                style: {
                                    width: '32px', height: '32px', borderRadius: '10px',
                                    background: '#5856d6',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                }
                            },
                                React.createElement('i', { className: 'ph-fill ph-shield-check', style: { fontSize: '16px', color: 'white' } })
                            ),
                            React.createElement('div', null,
                                React.createElement('div', { style: { fontSize: '15px', fontWeight: '600', color: '#1a1a1a' } }, 'How This Works'),
                                React.createElement('div', { style: { fontSize: '11px', color: '#8e8e93' } }, 'Your privacy, your control')
                            )
                        ),
                        React.createElement('div', {
                            style: { background: '#f8f8fa', borderRadius: '12px', padding: '14px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }
                        },
                            React.createElement('div', { style: { display: 'flex', gap: '10px', alignItems: 'flex-start' } },
                                React.createElement('div', {
                                    style: { width: '26px', height: '26px', borderRadius: '7px', background: '#f2f2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
                                }, React.createElement('i', { className: 'ph-fill ph-cpu', style: { fontSize: '13px', color: '#8e8e93' } })),
                                React.createElement('div', { style: { flex: 1 } },
                                    React.createElement('div', { style: { fontSize: '12.5px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' } }, 'On-Device AI'),
                                    React.createElement('div', { style: { fontSize: '11px', color: '#8e8e93', lineHeight: '1.45' } }, 'Patterns analyzed locally on your device.')
                                )
                            ),
                            React.createElement('div', { style: { height: '1px', background: '#e8e8ed', marginLeft: '36px' } }),
                            React.createElement('div', { style: { display: 'flex', gap: '10px', alignItems: 'flex-start' } },
                                React.createElement('div', {
                                    style: { width: '26px', height: '26px', borderRadius: '7px', background: '#f2f2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
                                }, React.createElement('i', { className: 'ph-fill ph-lock', style: { fontSize: '13px', color: '#8e8e93' } })),
                                React.createElement('div', { style: { flex: 1 } },
                                    React.createElement('div', { style: { fontSize: '12.5px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' } }, 'Private & Secure'),
                                    React.createElement('div', { style: { fontSize: '11px', color: '#8e8e93', lineHeight: '1.45' } }, 'Your data never leaves your phone.')
                                )
                            )
                        ),
                        React.createElement('button', {
                            onClick: () => { setShowInfoPopup(false); setInfoPopupScreen('main'); },
                            style: {
                                width: '100%', padding: '11px', borderRadius: '12px', border: 'none',
                                background: '#f2f2f7', color: '#1a1a1a', fontSize: '13px', fontWeight: '500', cursor: 'pointer'
                            }
                        }, 'Got it'),
                        React.createElement('button', {
                            onClick: () => setInfoPopupScreen('categories'),
                            style: {
                                width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #e5e5ea',
                                background: 'white', color: '#1a1a1a', fontSize: '13px', fontWeight: '500',
                                cursor: 'pointer', marginTop: '8px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', gap: '6px'
                            }
                        },
                            React.createElement('i', { className: 'ph ph-sliders-horizontal', style: { fontSize: '14px', color: '#8e8e93' } }),
                            'Manage Tracking Categories',
                            React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '11px', color: '#c7c7cc', marginLeft: '2px' } })
                        ),
                        React.createElement('button', {
                            onClick: () => setTrackingEnabled(!trackingEnabled),
                            style: {
                                width: '100%', padding: '10px', borderRadius: '12px', border: 'none',
                                background: trackingEnabled ? '#ff3b300d' : '#34c7590d',
                                color: trackingEnabled ? '#ff3b30' : '#34c759',
                                fontSize: '13px', fontWeight: '500', cursor: 'pointer', marginTop: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                            }
                        },
                            React.createElement('i', { className: trackingEnabled ? 'ph ph-pause' : 'ph ph-play', style: { fontSize: '14px' } }),
                            trackingEnabled ? 'Stop Tracking Insights' : 'Resume Tracking Insights'
                        )
                    )
                )
                : React.createElement(React.Fragment, null,
                    React.createElement('div', { style: { padding: '18px 22px 22px' } },
                        React.createElement('div', {
                            style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }
                        },
                            React.createElement('button', {
                                onClick: () => setInfoPopupScreen('main'),
                                style: {
                                    width: '28px', height: '28px', borderRadius: '8px', background: '#f2f2f7',
                                    border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', flexShrink: 0
                                }
                            }, React.createElement('i', { className: 'ph ph-caret-left', style: { fontSize: '13px', color: '#1a1a1a' } })),
                            React.createElement('span', {
                                style: { fontSize: '15px', fontWeight: '600', color: '#1a1a1a' }
                            }, 'Tracking Categories')
                        ),
                        React.createElement('div', {
                            style: { fontSize: '11px', color: '#8e8e93', lineHeight: '1.5', marginBottom: '14px', marginLeft: '38px' }
                        }, 'Choose what Insights can analyze'),
                        React.createElement('div', {
                            style: { background: '#f8f8fa', borderRadius: '12px', padding: '4px 12px', marginBottom: '16px' }
                        },
                            ...[
                                { key: 'socialMedia', label: 'Social Media', icon: 'ph-chats-circle', iconColor: '#007aff', desc: 'Instagram, TikTok, Twitter' },
                                { key: 'entertainment', label: 'Entertainment', icon: 'ph-play-circle', iconColor: '#ff9500', desc: 'YouTube, Netflix, Spotify' },
                                { key: 'gaming', label: 'Gaming', icon: 'ph-game-controller', iconColor: '#af52de', desc: 'Chess, game apps' },
                                { key: 'productivity', label: 'Productivity', icon: 'ph-briefcase', iconColor: '#34c759', desc: 'Mail, Calendar, Notes' },
                                { key: 'health', label: 'Health & Fitness', icon: 'ph-heart', iconColor: '#ff2d55', desc: 'Health, workout apps' },
                                { key: 'communication', label: 'Communication', icon: 'ph-chat-dots', iconColor: '#5856d6', desc: 'Messages, FaceTime, calls' }
                            ].map((cat, idx) =>
                                React.createElement('div', {
                                    key: cat.key,
                                    style: {
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        padding: '10px 0', borderBottom: idx < 5 ? '1px solid #ebebf0' : 'none'
                                    }
                                },
                                    React.createElement('div', {
                                        style: {
                                            width: '28px', height: '28px', borderRadius: '8px', background: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                        }
                                    }, React.createElement('i', { className: 'ph-fill ' + cat.icon, style: { fontSize: '14px', color: cat.iconColor } })),
                                    React.createElement('div', { style: { flex: 1, minWidth: 0 } },
                                        React.createElement('div', {
                                            style: { fontSize: '12.5px', fontWeight: '500', color: categoryToggles[cat.key] ? '#1a1a1a' : '#8e8e93', transition: 'color 0.2s' }
                                        }, cat.label),
                                        React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2' } }, cat.desc)
                                    ),
                                    React.createElement('div', {
                                        onClick: () => setCategoryToggles(prev => ({ ...prev, [cat.key]: !prev[cat.key] })),
                                        style: {
                                            width: '44px', height: '26px', borderRadius: '13px',
                                            background: categoryToggles[cat.key] ? '#34c759' : '#e9e9eb',
                                            position: 'relative', cursor: 'pointer', transition: 'background 0.25s ease', flexShrink: 0
                                        }
                                    },
                                        React.createElement('div', {
                                            style: {
                                                width: '22px', height: '22px', borderRadius: '11px', background: 'white',
                                                position: 'absolute', top: '2px',
                                                left: categoryToggles[cat.key] ? '20px' : '2px',
                                                transition: 'left 0.25s ease', boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
                                            }
                                        })
                                    )
                                )
                            )
                        ),
                        React.createElement('div', {
                            style: { textAlign: 'center', fontSize: '11px', color: '#aeaeb2', marginBottom: '12px' }
                        }, Object.values(categoryToggles).filter(Boolean).length + ' of 6 categories active'),
                        React.createElement('button', {
                            onClick: () => setInfoPopupScreen('main'),
                            style: {
                                width: '100%', padding: '11px', borderRadius: '12px', border: 'none',
                                background: '#1a1a1a', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
                            }
                        }, 'Done')
                    )
                )
            )
        ),

        // Text feedback popup
        showTextPopup && React.createElement('div', {
            onClick: () => setShowTextPopup(null),
            style: {
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', zIndex: 100, padding: '20px'
            }
        },
            React.createElement('div', {
                onClick: (e) => e.stopPropagation(),
                style: {
                    background: 'white', borderRadius: '14px', padding: '20px',
                    width: '100%', maxWidth: '300px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }
            },
                React.createElement('div', { style: { fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' } }, 'What do you think?'),
                React.createElement('div', { style: { fontSize: '12px', color: '#8e8e93', marginBottom: '12px' } }, 'Tell us what actually happened'),
                React.createElement('textarea', {
                    value: feedbackText,
                    onChange: (e) => setFeedbackText(e.target.value),
                    placeholder: 'e.g. I was bored, not tired...',
                    style: {
                        width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px',
                        border: '1px solid #d1d1d6', fontSize: '13px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                        resize: 'none', outline: 'none', boxSizing: 'border-box', marginBottom: '12px'
                    }
                }),
                React.createElement('div', { style: { display: 'flex', gap: '8px', justifyContent: 'flex-end' } },
                    React.createElement('button', {
                        onClick: () => setShowTextPopup(null),
                        style: {
                            padding: '8px 16px', borderRadius: '8px', border: '1px solid #d1d1d6',
                            background: 'transparent', color: '#8e8e93', fontSize: '13px', fontWeight: '500', cursor: 'pointer'
                        }
                    }, 'Cancel'),
                    React.createElement('button', {
                        onClick: submitTextFeedback,
                        style: {
                            padding: '8px 16px', borderRadius: '8px', border: 'none',
                            background: '#007aff', color: 'white', fontSize: '13px', fontWeight: '500', cursor: 'pointer'
                        }
                    }, 'Submit')
                )
            )
        )
    );
}

window.InsightsDetailScreen = InsightsDetailScreen;
