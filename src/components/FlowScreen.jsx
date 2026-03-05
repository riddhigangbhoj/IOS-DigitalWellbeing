function FlowScreen() {
    const font = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';

    // Mini phone frame
    const miniPhone = (title, content, highlight) => React.createElement('div', {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexShrink: 0
        }
    },
        // Title label
        React.createElement('div', {
            style: {
                fontSize: '10px',
                fontWeight: '600',
                color: '#1a1a1a',
                fontFamily: font,
                marginBottom: '6px',
                textAlign: 'center',
                background: highlight || '#f2f2f7',
                padding: '3px 10px',
                borderRadius: '10px',
                letterSpacing: '0.3px'
            }
        }, title),
        // Phone body
        React.createElement('div', {
            style: {
                width: '150px',
                height: '260px',
                borderRadius: '18px',
                border: '2px solid #d1d1d6',
                background: 'white',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }
        },
            // Status bar
            React.createElement('div', {
                style: {
                    height: '20px',
                    background: '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                    fontSize: '7px',
                    fontWeight: '600',
                    fontFamily: font,
                    color: '#1a1a1a',
                    borderBottom: '1px solid #ebebeb'
                }
            },
                React.createElement('span', null, '9:41'),
                React.createElement('span', { style: { fontSize: '6px', color: '#8e8e93' } }, '5G')
            ),
            // Content
            React.createElement('div', {
                style: {
                    padding: '6px 8px',
                    overflow: 'hidden',
                    height: 'calc(100% - 20px)'
                }
            }, content)
        )
    );

    // Arrow connector
    const arrow = (direction, labelText) => {
        if (direction === 'down') {
            return React.createElement('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0px',
                    margin: '8px 0'
                }
            },
                labelText ? React.createElement('div', {
                    style: {
                        fontSize: '8px',
                        color: '#8e8e93',
                        fontFamily: font,
                        fontStyle: 'italic',
                        marginBottom: '4px',
                        textAlign: 'center'
                    }
                }, labelText) : null,
                React.createElement('div', {
                    style: { width: '1.5px', height: '20px', background: '#c7c7cc' }
                }),
                React.createElement('div', {
                    style: {
                        width: 0, height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '7px solid #c7c7cc'
                    }
                })
            );
        }
        // right arrow
        return React.createElement('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                margin: '0 6px',
                flexShrink: 0
            }
        },
            labelText ? React.createElement('div', {
                style: {
                    fontSize: '7px',
                    color: '#8e8e93',
                    fontFamily: font,
                    fontStyle: 'italic',
                    textAlign: 'center',
                    maxWidth: '50px',
                    lineHeight: '1.3'
                }
            }, labelText) : null,
            React.createElement('div', {
                style: { display: 'flex', alignItems: 'center' }
            },
                React.createElement('div', {
                    style: { width: '20px', height: '1.5px', background: '#c7c7cc' }
                }),
                React.createElement('div', {
                    style: {
                        width: 0, height: 0,
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent',
                        borderLeft: '7px solid #c7c7cc'
                    }
                })
            )
        );
    };

    // --- Mini screen contents ---

    // 1. Home screen
    const homeContent = React.createElement(React.Fragment, null,
        React.createElement('div', { style: { fontSize: '8px', fontWeight: '700', fontFamily: font, marginBottom: '4px' } }, 'SCREEN TIME'),
        // Mini bar chart
        React.createElement('div', {
            style: { display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px', marginBottom: '4px', padding: '0 2px' }
        },
            ...[40, 30, 50, 25, 35, 15, 10].map((h, i) =>
                React.createElement('div', { key: i, style: { flex: 1, height: h + '%', background: '#c7c7cc', borderRadius: '1px' } })
            )
        ),
        React.createElement('div', {
            style: { border: '1px solid #e5e5ea', borderRadius: '4px', padding: '3px 4px', marginBottom: '4px', fontSize: '6px', fontFamily: font, color: '#8e8e93' }
        }, 'See All Activity >'),
        React.createElement('div', { style: { fontSize: '6px', fontWeight: '600', color: '#8e8e93', fontFamily: font, marginBottom: '3px', letterSpacing: '0.5px' } }, 'INSIGHTS'),
        // Insight card
        React.createElement('div', {
            style: { border: '1px solid #e5e5ea', borderRadius: '6px', padding: '4px 5px', marginBottom: '3px' }
        },
            React.createElement('div', { style: { fontSize: '7px', fontWeight: '600', fontFamily: font, marginBottom: '3px' } }, 'What happened today'),
            React.createElement('div', {
                style: { borderLeft: '2px solid #d4a017', paddingLeft: '4px', marginBottom: '3px' }
            },
                React.createElement('div', { style: { fontSize: '5.5px', fontFamily: font, color: '#6e6e73', marginBottom: '1px' } }, '▲ 50% more phone checks'),
                React.createElement('div', { style: { fontSize: '5px', fontFamily: font, color: '#8e8e93' } }, 'Cause: 3h less sleep')
            ),
            React.createElement('div', { style: { display: 'flex', gap: '2px' } },
                ...['Sounds right', 'Not quite', 'Other'].map((t, i) =>
                    React.createElement('div', { key: i, style: { border: '0.5px solid #d1d1d6', borderRadius: '6px', padding: '1px 3px', fontSize: '4.5px', fontFamily: font, color: '#8e8e93' } }, t)
                )
            ),
            // Dots
            React.createElement('div', { style: { display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '3px' } },
                React.createElement('div', { style: { width: '8px', height: '3px', background: '#007aff', borderRadius: '2px' } }),
                React.createElement('div', { style: { width: '3px', height: '3px', background: '#d1d1d6', borderRadius: '50%' } })
            )
        ),
        React.createElement('div', {
            style: { fontSize: '6px', fontFamily: font, color: '#007aff', textAlign: 'center', textDecoration: 'underline', marginTop: '2px' }
        }, 'View more >')
    );

    // 2. Day view
    const dayContent = React.createElement(React.Fragment, null,
        // Nav bar
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' } },
            React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #d1d1d6', fontSize: '7px', textAlign: 'center', lineHeight: '12px' } }, '<'),
            React.createElement('div', { style: { display: 'flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #d1d1d6' } },
                React.createElement('div', { style: { padding: '1px 6px', fontSize: '6px', fontFamily: font, color: '#8e8e93' } }, 'Week'),
                React.createElement('div', { style: { padding: '1px 6px', fontSize: '6px', fontFamily: font, background: '#007aff', color: 'white' } }, 'Day')
            ),
            React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #007aff', fontSize: '7px', textAlign: 'center', lineHeight: '12px', color: '#007aff', fontStyle: 'italic', fontWeight: '600' } }, 'i')
        ),
        // Sections
        ...[
            { title: 'WHAT HAPPENED TODAY', bar: '#d4a017', text: '▲ Headline insight' },
            { title: 'WHAT IS DIFFERENT TODAY', bar: '#34c759', text: '▼ Headline insight' },
            { title: 'KEY MOMENTS', bar: '#d4a017', text: 'Post-meeting burst' },
            { title: 'WHAT WORKED TODAY', bar: '#34c759', text: 'Phone-free stretch' },
            { title: 'PATTERNS FORMING', bar: '#8e8e93', text: 'Post-meeting pickups' }
        ].map((s, i) =>
            React.createElement('div', {
                key: i,
                style: { border: '1px solid #ebebeb', borderRadius: '4px', padding: '3px 4px', marginBottom: '3px' }
            },
                React.createElement('div', { style: { fontSize: '5px', color: '#8e8e93', fontFamily: font, letterSpacing: '0.3px', marginBottom: '2px' } }, s.title),
                React.createElement('div', {
                    style: { borderLeft: '1.5px solid ' + s.bar, paddingLeft: '3px' }
                },
                    React.createElement('div', { style: { fontSize: '5.5px', fontFamily: font, color: '#1a1a1a' } }, s.text),
                    React.createElement('div', { style: { fontSize: '4.5px', fontFamily: font, color: '#8e8e93' } }, 'Details...')
                )
            )
        )
    );

    // 3. Week view
    const weekContent = React.createElement(React.Fragment, null,
        // Nav bar
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' } },
            React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #d1d1d6', fontSize: '7px', textAlign: 'center', lineHeight: '12px' } }, '<'),
            React.createElement('div', { style: { display: 'flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #d1d1d6' } },
                React.createElement('div', { style: { padding: '1px 6px', fontSize: '6px', fontFamily: font, background: '#007aff', color: 'white' } }, 'Week'),
                React.createElement('div', { style: { padding: '1px 6px', fontSize: '6px', fontFamily: font, color: '#8e8e93' } }, 'Day')
            ),
            React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #007aff', fontSize: '7px', textAlign: 'center', lineHeight: '12px', color: '#007aff', fontStyle: 'italic', fontWeight: '600' } }, 'i')
        ),
        // What happened this week
        React.createElement('div', { style: { border: '1px solid #ebebeb', borderRadius: '4px', padding: '3px 4px', marginBottom: '3px' } },
            React.createElement('div', { style: { fontSize: '5px', color: '#8e8e93', fontFamily: font, letterSpacing: '0.3px', marginBottom: '2px' } }, 'WHAT HAPPENED THIS WEEK'),
            React.createElement('div', { style: { borderLeft: '1.5px solid #d4a017', paddingLeft: '3px' } },
                React.createElement('div', { style: { fontSize: '5.5px', fontFamily: font, color: '#1a1a1a' } }, 'Commute home pattern'),
                React.createElement('div', { style: { fontSize: '4.5px', fontFamily: font, color: '#8e8e93' } }, 'Messages → YouTube')
            )
        ),
        // Pattern formed
        React.createElement('div', { style: { border: '1px solid #ebebeb', borderRadius: '4px', padding: '3px 4px', marginBottom: '3px' } },
            React.createElement('div', { style: { fontSize: '5px', color: '#8e8e93', fontFamily: font, letterSpacing: '0.3px', marginBottom: '1px' } }, 'PATTERN FORMED'),
            React.createElement('div', { style: { fontSize: '7px', fontWeight: '600', fontFamily: font, marginBottom: '1px' } }, '9 - 11 PM'),
            // Mini timeline
            ...['Mon', 'Tue', 'Wed', 'Thu'].map((d, i) =>
                React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '1px' } },
                    React.createElement('div', { style: { width: '3px', height: '3px', borderRadius: '50%', background: '#8e8e93' } }),
                    React.createElement('span', { style: { fontSize: '4.5px', fontFamily: font, color: '#6e6e73' } }, d + ' - Chess → App')
                )
            ),
            React.createElement('div', { style: { fontSize: '4px', color: '#8e8e93', fontFamily: font, textAlign: 'center' } }, '...')
        ),
        // What worked
        React.createElement('div', { style: { border: '1px solid #ebebeb', borderRadius: '4px', padding: '3px 4px', marginBottom: '3px' } },
            React.createElement('div', { style: { fontSize: '5px', color: '#8e8e93', fontFamily: font, letterSpacing: '0.3px', marginBottom: '2px' } }, 'WHAT WORKED THIS WEEK'),
            React.createElement('div', { style: { borderLeft: '1.5px solid #34c759', paddingLeft: '3px' } },
                React.createElement('div', { style: { fontSize: '5.5px', fontFamily: font, color: '#1a1a1a' } }, 'Phone-free until 10:30 AM'),
                React.createElement('div', { style: { fontSize: '4.5px', fontFamily: font, color: '#8e8e93' } }, 'Morning runs → -25% screen time')
            )
        ),
        // Mood stickers link
        React.createElement('div', { style: { fontSize: '5px', fontFamily: font, color: '#007aff', textAlign: 'center', marginTop: '3px' } }, 'View weekly mood stickers →')
    );

    // 4. Info popup
    const infoContent = React.createElement(React.Fragment, null,
        React.createElement('div', { style: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
            React.createElement('div', {
                style: { width: '120px', border: '1px solid #d1d1d6', borderRadius: '10px', padding: '8px', background: 'white' }
            },
                // Gradient bar
                React.createElement('div', { style: { height: '2px', background: 'linear-gradient(90deg, #007aff, #5856d6, #34c759)', borderRadius: '4px', marginBottom: '6px' } }),
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '5px' } },
                    React.createElement('div', { style: { width: '14px', height: '14px', borderRadius: '4px', background: 'linear-gradient(135deg, #007aff, #5856d6)', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                        React.createElement('span', { style: { fontSize: '6px', color: 'white' } }, '!')
                    ),
                    React.createElement('div', null,
                        React.createElement('div', { style: { fontSize: '6.5px', fontWeight: '600', fontFamily: font } }, 'How This Works'),
                        React.createElement('div', { style: { fontSize: '4.5px', color: '#8e8e93', fontFamily: font } }, 'Your privacy, your control')
                    )
                ),
                // Info card
                React.createElement('div', { style: { background: '#f8f8fa', borderRadius: '5px', padding: '5px', marginBottom: '5px' } },
                    React.createElement('div', { style: { display: 'flex', gap: '3px', alignItems: 'center', marginBottom: '3px' } },
                        React.createElement('div', { style: { width: '10px', height: '10px', borderRadius: '3px', background: '#007aff15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5px' } }, 'AI'),
                        React.createElement('div', { style: { fontSize: '5px', fontFamily: font } }, 'On-Device AI')
                    ),
                    React.createElement('div', { style: { height: '0.5px', background: '#e8e8ed', margin: '2px 0 2px 13px' } }),
                    React.createElement('div', { style: { display: 'flex', gap: '3px', alignItems: 'center' } },
                        React.createElement('div', { style: { width: '10px', height: '10px', borderRadius: '3px', background: '#34c75915', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5px' } }, 'L'),
                        React.createElement('div', { style: { fontSize: '5px', fontFamily: font } }, 'Private & Secure')
                    )
                ),
                React.createElement('div', { style: { background: '#007aff', borderRadius: '4px', padding: '3px', textAlign: 'center', marginBottom: '3px' } },
                    React.createElement('span', { style: { fontSize: '5.5px', color: 'white', fontWeight: '600', fontFamily: font } }, 'Got it')
                ),
                React.createElement('div', { style: { border: '0.5px solid #e5e5ea', borderRadius: '4px', padding: '2px', textAlign: 'center', marginBottom: '3px', fontSize: '4.5px', fontFamily: font } }, 'Manage Categories →'),
                React.createElement('div', { style: { background: '#ff3b300d', borderRadius: '4px', padding: '2px', textAlign: 'center', fontSize: '4.5px', fontFamily: font, color: '#ff3b30' } }, 'Stop Tracking')
            )
        )
    );

    // 5. Categories
    const categoriesContent = React.createElement(React.Fragment, null,
        React.createElement('div', { style: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
            React.createElement('div', {
                style: { width: '120px', border: '1px solid #d1d1d6', borderRadius: '10px', padding: '8px', background: 'white' }
            },
                React.createElement('div', { style: { height: '2px', background: 'linear-gradient(90deg, #007aff, #5856d6, #34c759)', borderRadius: '4px', marginBottom: '6px' } }),
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '5px' } },
                    React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '3px', background: '#f2f2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px' } }, '<'),
                    React.createElement('div', { style: { fontSize: '6.5px', fontWeight: '600', fontFamily: font } }, 'Categories')
                ),
                // Toggle rows
                React.createElement('div', { style: { background: '#f8f8fa', borderRadius: '5px', padding: '3px 5px' } },
                    ...['Social Media', 'Entertainment', 'Gaming', 'Productivity', 'Health', 'Communication'].map((cat, i) =>
                        React.createElement('div', {
                            key: i,
                            style: {
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '2.5px 0',
                                borderBottom: i < 5 ? '0.5px solid #ebebeb' : 'none'
                            }
                        },
                            React.createElement('span', { style: { fontSize: '5px', fontFamily: font, color: i === 3 ? '#8e8e93' : '#1a1a1a' } }, cat),
                            React.createElement('div', {
                                style: {
                                    width: '16px', height: '9px', borderRadius: '5px',
                                    background: i === 3 ? '#e9e9eb' : '#34c759',
                                    position: 'relative'
                                }
                            },
                                React.createElement('div', {
                                    style: {
                                        width: '7px', height: '7px', borderRadius: '50%', background: 'white',
                                        position: 'absolute', top: '1px',
                                        left: i === 3 ? '1px' : '8px'
                                    }
                                })
                            )
                        )
                    )
                ),
                React.createElement('div', { style: { fontSize: '4px', color: '#aeaeb2', fontFamily: font, textAlign: 'center', margin: '4px 0 3px' } }, '5 of 6 active'),
                React.createElement('div', { style: { background: '#007aff', borderRadius: '4px', padding: '3px', textAlign: 'center' } },
                    React.createElement('span', { style: { fontSize: '5.5px', color: 'white', fontWeight: '600', fontFamily: font } }, 'Done')
                )
            )
        )
    );

    // 6. Mood stickers
    const moodContent = React.createElement(React.Fragment, null,
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' } },
            React.createElement('div', { style: { width: '12px', height: '12px', borderRadius: '50%', border: '1px solid #d1d1d6', fontSize: '7px', textAlign: 'center', lineHeight: '12px' } }, '<'),
            React.createElement('div', { style: { fontSize: '5.5px', fontWeight: '500', color: '#8e8e93', fontFamily: font, letterSpacing: '0.3px' } }, 'YOUR WEEK IN MOODS')
        ),
        React.createElement('div', {
            style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }
        },
            ...['Commute Scroll', 'Morning Run', 'Evening Chess', 'Balanced'].map((mood, i) =>
                React.createElement('div', {
                    key: i,
                    style: { border: '1px solid #e5e5ea', borderRadius: '6px', overflow: 'hidden' }
                },
                    React.createElement('div', {
                        style: {
                            height: '70px', background: '#f5f5f7',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '18px'
                        }
                    }, [':-|', ':-)', ':-D', ':-o'][i]),
                    React.createElement('div', {
                        style: { padding: '3px 4px', fontSize: '5px', fontFamily: font, color: '#8e8e93' }
                    }, mood)
                )
            )
        )
    );

    // 7. Text feedback popup
    const feedbackContent = React.createElement(React.Fragment, null,
        React.createElement('div', { style: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
            React.createElement('div', {
                style: { width: '120px', border: '1px solid #d1d1d6', borderRadius: '10px', padding: '8px', background: 'white' }
            },
                React.createElement('div', { style: { fontSize: '7px', fontWeight: '600', fontFamily: font, marginBottom: '2px' } }, 'What do you think?'),
                React.createElement('div', { style: { fontSize: '4.5px', color: '#8e8e93', fontFamily: font, marginBottom: '5px' } }, 'Tell us what actually happened'),
                React.createElement('div', {
                    style: { border: '0.5px solid #d1d1d6', borderRadius: '4px', padding: '4px', minHeight: '25px', marginBottom: '5px', fontSize: '4.5px', fontFamily: font, color: '#c7c7cc' }
                }, 'e.g. I was bored...'),
                React.createElement('div', { style: { display: 'flex', gap: '3px', justifyContent: 'flex-end' } },
                    React.createElement('div', { style: { border: '0.5px solid #d1d1d6', borderRadius: '3px', padding: '2px 6px', fontSize: '5px', fontFamily: font, color: '#8e8e93' } }, 'Cancel'),
                    React.createElement('div', { style: { background: '#007aff', borderRadius: '3px', padding: '2px 6px', fontSize: '5px', fontFamily: font, color: 'white', fontWeight: '600' } }, 'Submit')
                )
            )
        )
    );

    return React.createElement('div', {
        style: {
            width: '100%',
            minHeight: '100vh',
            background: '#fafafa',
            padding: '30px 20px 60px',
            fontFamily: font,
            overflowY: 'auto'
        }
    },
        // Title
        React.createElement('div', {
            style: {
                textAlign: 'center',
                marginBottom: '24px'
            }
        },
            React.createElement('div', {
                style: { fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px' }
            }, 'User Flow'),
            React.createElement('div', {
                style: { fontSize: '12px', color: '#8e8e93' }
            }, 'How users navigate through Insights')
        ),

        // === ROW 1: Main flow (Home → Day → Week) ===
        React.createElement('div', {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                overflowX: 'auto',
                padding: '8px 0'
            }
        },
            miniPhone('Home', homeContent),
            arrow('right', 'Tap "View more"'),
            miniPhone('Day View', dayContent),
            arrow('right', 'Switch to Week'),
            miniPhone('Week View', weekContent)
        ),

        // === Down arrow from Day View ===
        React.createElement('div', {
            style: { display: 'flex', justifyContent: 'center', marginBottom: '8px' }
        },
            React.createElement('div', {
                style: { display: 'flex', gap: '160px' }
            },
                // Arrow from Day → Feedback
                React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                    React.createElement('div', { style: { fontSize: '8px', color: '#8e8e93', fontStyle: 'italic', marginBottom: '4px' } }, 'Tap "Something else"'),
                    React.createElement('div', { style: { width: '1.5px', height: '16px', background: '#c7c7cc' } }),
                    React.createElement('div', { style: { width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #c7c7cc' } })
                ),
                // Arrow from Week → Mood stickers
                React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                    React.createElement('div', { style: { fontSize: '8px', color: '#8e8e93', fontStyle: 'italic', marginBottom: '4px' } }, 'Scroll & tap stickers'),
                    React.createElement('div', { style: { width: '1.5px', height: '16px', background: '#c7c7cc' } }),
                    React.createElement('div', { style: { width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #c7c7cc' } })
                )
            )
        ),

        // === ROW 2: Secondary screens ===
        React.createElement('div', {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                overflowX: 'auto',
                padding: '8px 0'
            }
        },
            miniPhone('Text Feedback', feedbackContent, '#e3f2fd'),
            React.createElement('div', { style: { width: '40px' } }),
            miniPhone('Mood Stickers', moodContent, '#e8f5e9')
        ),

        // === Section divider ===
        React.createElement('div', {
            style: { display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0 16px', padding: '0 20px' }
        },
            React.createElement('div', { style: { flex: 1, height: '1px', background: '#d1d1d6' } }),
            React.createElement('div', { style: { fontSize: '10px', color: '#8e8e93', fontWeight: '500' } }, 'Privacy & Settings Flow'),
            React.createElement('div', { style: { flex: 1, height: '1px', background: '#d1d1d6' } })
        ),

        // === ROW 3: Info flow (Tap i → Info → Categories) ===
        React.createElement('div', {
            style: { textAlign: 'center', marginBottom: '8px' }
        },
            React.createElement('div', { style: { fontSize: '8px', color: '#8e8e93', fontStyle: 'italic' } }, 'Tap (i) button from Day or Week view')
        ),
        arrow('down'),
        React.createElement('div', {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowX: 'auto',
                padding: '8px 0'
            }
        },
            miniPhone('Info Popup', infoContent, '#fef3e2'),
            arrow('right', 'Manage Categories'),
            miniPhone('Categories', categoriesContent, '#fef3e2')
        )
    );
}

window.FlowScreen = FlowScreen;
