function WireframeScreen() {
    const [currentView, setCurrentView] = React.useState('home');
    const [homeSlide, setHomeSlide] = React.useState(0);
    const [detailView, setDetailView] = React.useState('day');
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
    const [showTextPopup, setShowTextPopup] = React.useState(false);

    const box = (opts) => React.createElement('div', {
        style: {
            border: '1.5px solid #000',
            borderRadius: opts.r || '8px',
            padding: opts.p || '10px',
            marginBottom: opts.mb || '10px',
            background: opts.bg || 'transparent',
            display: opts.flex ? 'flex' : 'block',
            alignItems: opts.flex ? 'center' : undefined,
            justifyContent: opts.between ? 'space-between' : undefined,
            gap: opts.gap || undefined,
            ...opts.style
        }
    }, opts.children);

    const label = (text, opts = {}) => React.createElement('span', {
        style: {
            fontSize: opts.size || '12px',
            fontWeight: opts.bold ? '600' : '400',
            color: '#000',
            fontFamily: 'monospace',
            ...opts.style
        }
    }, text);

    // Toggle wireframe component
    const wireToggle = (isOn, onClick) => React.createElement('div', {
        onClick: onClick,
        style: {
            width: '36px',
            height: '20px',
            borderRadius: '10px',
            border: '1.5px solid #000',
            background: isOn ? '#000' : 'transparent',
            position: 'relative',
            cursor: 'pointer',
            flexShrink: 0
        }
    },
        React.createElement('div', {
            style: {
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: isOn ? 'white' : '#000',
                position: 'absolute',
                top: '2px',
                left: isOn ? '18px' : '2px',
                transition: 'left 0.2s'
            }
        })
    );

    // Info popup overlay (shared between day and week)
    const renderInfoPopup = () => showInfoPopup && React.createElement('div', {
        onClick: () => { setShowInfoPopup(false); setInfoPopupScreen('main'); },
        style: {
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.3)',
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
                border: '1.5px solid #000',
                borderRadius: '12px',
                padding: '0',
                width: '100%',
                maxWidth: '280px',
                overflow: 'hidden'
            }
        },
            // Main screen
            infoPopupScreen === 'main' ? React.createElement(React.Fragment, null,
                // Top bar
                React.createElement('div', {
                    style: { height: '3px', background: '#000' }
                }),
                React.createElement('div', { style: { padding: '16px' } },
                    // Header
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }
                    },
                        React.createElement('div', {
                            style: {
                                width: '24px', height: '24px', borderRadius: '6px',
                                border: '1.5px solid #000', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: '12px', fontFamily: 'monospace', flexShrink: 0
                            }
                        }, '!'),
                        label('How This Works', { bold: true, size: '13px' })
                    ),
                    label('Your privacy, your control', { size: '9px', style: { display: 'block', color: '#666', marginBottom: '12px', marginLeft: '32px' } }),

                    // Info rows in card
                    React.createElement('div', {
                        style: { border: '1px solid #ccc', borderRadius: '8px', padding: '10px', marginBottom: '12px' }
                    },
                        // Row 1
                        React.createElement('div', {
                            style: { display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }
                        },
                            React.createElement('div', {
                                style: { width: '20px', height: '20px', border: '1px solid #000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0 }
                            }, 'AI'),
                            React.createElement('div', { style: { flex: 1 } },
                                label('On-Device AI', { bold: true, size: '10px', style: { display: 'block', marginBottom: '2px' } }),
                                label('Patterns analyzed locally on your device.', { size: '9px', style: { color: '#555', lineHeight: '1.4' } })
                            )
                        ),
                        // Divider
                        React.createElement('div', { style: { height: '1px', background: '#ddd', marginLeft: '28px', marginBottom: '10px' } }),
                        // Row 2
                        React.createElement('div', {
                            style: { display: 'flex', gap: '8px', alignItems: 'flex-start' }
                        },
                            React.createElement('div', {
                                style: { width: '20px', height: '20px', border: '1px solid #000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }
                            }, 'L'),
                            React.createElement('div', { style: { flex: 1 } },
                                label('Private & Secure', { bold: true, size: '10px', style: { display: 'block', marginBottom: '2px' } }),
                                label('Data never leaves your phone. No servers.', { size: '9px', style: { color: '#555', lineHeight: '1.4' } })
                            )
                        )
                    ),

                    // Got it button
                    React.createElement('div', {
                        onClick: () => { setShowInfoPopup(false); setInfoPopupScreen('main'); },
                        style: {
                            border: '1.5px solid #000', borderRadius: '8px', padding: '8px',
                            textAlign: 'center', cursor: 'pointer', background: '#000',
                            marginBottom: '8px'
                        }
                    }, label('Got it', { bold: true, size: '11px', style: { color: 'white' } })),

                    // Manage categories button
                    React.createElement('div', {
                        onClick: () => setInfoPopupScreen('categories'),
                        style: {
                            border: '1.5px solid #000', borderRadius: '8px', padding: '8px',
                            textAlign: 'center', cursor: 'pointer', marginBottom: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                        }
                    },
                        label('=', { size: '11px', style: { fontWeight: '700' } }),
                        label('Manage Tracking Categories', { size: '10px' }),
                        label('>', { size: '10px', style: { color: '#999' } })
                    ),

                    // Stop tracking button
                    React.createElement('div', {
                        onClick: () => setTrackingEnabled(!trackingEnabled),
                        style: {
                            border: '1.5px dashed ' + (trackingEnabled ? '#000' : '#666'),
                            borderRadius: '8px', padding: '8px',
                            textAlign: 'center', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                        }
                    },
                        label(trackingEnabled ? '||' : '>', { size: '10px', bold: true }),
                        label(trackingEnabled ? 'Stop Tracking Insights' : 'Resume Tracking Insights', { size: '10px' })
                    )
                )
            )
            // Categories screen
            : React.createElement(React.Fragment, null,
                React.createElement('div', {
                    style: { height: '3px', background: '#000' }
                }),
                React.createElement('div', { style: { padding: '16px' } },
                    // Header with back
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }
                    },
                        React.createElement('div', {
                            onClick: () => setInfoPopupScreen('main'),
                            style: {
                                width: '22px', height: '22px', border: '1.5px solid #000',
                                borderRadius: '6px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', cursor: 'pointer', fontSize: '11px', fontFamily: 'monospace', flexShrink: 0
                            }
                        }, '<'),
                        label('Tracking Categories', { bold: true, size: '12px' })
                    ),
                    label('Choose what Insights can analyze', { size: '9px', style: { display: 'block', color: '#666', marginBottom: '10px', marginLeft: '30px' } }),

                    // Category toggles
                    React.createElement('div', {
                        style: { border: '1px solid #ccc', borderRadius: '8px', padding: '4px 10px', marginBottom: '10px' }
                    },
                        ...[
                            { key: 'socialMedia', label: 'Social Media', icon: 'SM', desc: 'Instagram, TikTok, Twitter' },
                            { key: 'entertainment', label: 'Entertainment', icon: 'EN', desc: 'YouTube, Netflix, Spotify' },
                            { key: 'gaming', label: 'Gaming', icon: 'GM', desc: 'Chess, game apps' },
                            { key: 'productivity', label: 'Productivity', icon: 'PR', desc: 'Mail, Calendar, Notes' },
                            { key: 'health', label: 'Health & Fitness', icon: 'HF', desc: 'Health, workout apps' },
                            { key: 'communication', label: 'Communication', icon: 'CM', desc: 'Messages, FaceTime' }
                        ].map((cat, idx) =>
                            React.createElement('div', {
                                key: cat.key,
                                style: {
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '8px 0',
                                    borderBottom: idx < 5 ? '1px solid #eee' : 'none'
                                }
                            },
                                React.createElement('div', {
                                    style: {
                                        width: '22px', height: '22px', border: '1px solid #000',
                                        borderRadius: '4px', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', fontSize: '7px', fontFamily: 'monospace',
                                        fontWeight: '600', flexShrink: 0
                                    }
                                }, cat.icon),
                                React.createElement('div', { style: { flex: 1, minWidth: 0 } },
                                    label(cat.label, { bold: true, size: '10px', style: { display: 'block', color: categoryToggles[cat.key] ? '#000' : '#999' } }),
                                    label(cat.desc, { size: '8px', style: { color: '#888' } })
                                ),
                                wireToggle(categoryToggles[cat.key], () => setCategoryToggles(prev => ({ ...prev, [cat.key]: !prev[cat.key] })))
                            )
                        )
                    ),

                    // Active count
                    label(Object.values(categoryToggles).filter(Boolean).length + ' of 6 categories active', {
                        size: '9px', style: { display: 'block', textAlign: 'center', color: '#888', marginBottom: '10px' }
                    }),

                    // Done button
                    React.createElement('div', {
                        onClick: () => setInfoPopupScreen('main'),
                        style: {
                            border: '1.5px solid #000', borderRadius: '8px', padding: '8px',
                            textAlign: 'center', cursor: 'pointer', background: '#000'
                        }
                    }, label('Done', { bold: true, size: '11px', style: { color: 'white' } }))
                )
            )
        )
    );

    // Text feedback popup
    const renderTextPopup = () => showTextPopup && React.createElement('div', {
        onClick: () => setShowTextPopup(false),
        style: {
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.3)',
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
                border: '1.5px solid #000',
                borderRadius: '12px',
                padding: '16px',
                width: '100%',
                maxWidth: '280px'
            }
        },
            label('What do you think?', { bold: true, size: '12px', style: { display: 'block', marginBottom: '4px' } }),
            label('Tell us what actually happened', { size: '9px', style: { display: 'block', color: '#666', marginBottom: '10px' } }),
            // Textarea placeholder
            React.createElement('div', {
                style: {
                    border: '1px solid #000', borderRadius: '6px',
                    padding: '8px', minHeight: '50px', marginBottom: '10px',
                    fontSize: '9px', fontFamily: 'monospace', color: '#999'
                }
            }, 'e.g. I was bored, not tired...'),
            React.createElement('div', {
                style: { display: 'flex', gap: '6px', justifyContent: 'flex-end' }
            },
                React.createElement('div', {
                    onClick: () => setShowTextPopup(false),
                    style: { border: '1px solid #000', borderRadius: '6px', padding: '5px 12px', fontSize: '10px', fontFamily: 'monospace', cursor: 'pointer' }
                }, 'Cancel'),
                React.createElement('div', {
                    onClick: () => setShowTextPopup(false),
                    style: { border: '1.5px solid #000', borderRadius: '6px', padding: '5px 12px', fontSize: '10px', fontFamily: 'monospace', cursor: 'pointer', background: '#000', color: 'white' }
                }, 'Submit')
            )
        )
    );

    // Memoji moods wireframe
    const renderMemojiMoods = () => React.createElement('div', {
        style: {
            background: 'white',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            padding: '16px',
            fontFamily: 'monospace',
            boxSizing: 'border-box'
        }
    },
        // Header
        React.createElement('div', {
            style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }
        },
            React.createElement('div', {
                onClick: () => setShowMemojiMoods(false),
                style: {
                    width: '24px', height: '24px', border: '1.5px solid #000',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', cursor: 'pointer', fontSize: '13px', fontFamily: 'monospace'
                }
            }, '<'),
            label('YOUR WEEK IN MOODS', { bold: true, size: '10px', style: { letterSpacing: '0.5px', color: '#666' } })
        ),
        // 2x2 grid
        React.createElement('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px'
            }
        },
            ...['Commute Scroll', 'Morning Run', 'Evening Chess', 'Balanced'].map((mood, i) =>
                React.createElement('div', {
                    key: i,
                    style: {
                        border: '1.5px solid #000',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }
                },
                    // Image placeholder
                    React.createElement('div', {
                        style: {
                            height: '90px',
                            background: '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid #ddd'
                        }
                    },
                        React.createElement('div', {
                            style: { fontSize: '24px' }
                        }, [':-|', ':-)', ':-D', ':-o'][i])
                    ),
                    // Label
                    React.createElement('div', {
                        style: { padding: '6px 8px' }
                    },
                        label(mood, { size: '10px', style: { color: '#555' } })
                    )
                )
            )
        )
    );

    // Info button component
    const infoButton = React.createElement('div', {
        onClick: () => setShowInfoPopup(true),
        style: {
            width: '24px', height: '24px', border: '1.5px solid #000',
            borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', fontSize: '13px',
            fontFamily: 'serif', fontWeight: '600'
        }
    }, 'i');

    // Home view wireframe
    if (currentView === 'home') {
        return React.createElement('div', {
            style: {
                background: 'white',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                padding: '16px',
                fontFamily: 'monospace',
                boxSizing: 'border-box'
            }
        },
            // Status bar placeholder
            React.createElement('div', {
                style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }
            },
                label('9:41', { bold: true, size: '13px' }),
                label('signal  battery', { size: '11px' })
            ),

            // Screen Time header
            label('SCREEN TIME', { bold: true, size: '15px', style: { display: 'block', marginBottom: '12px' } }),

            // Bar chart wireframe
            box({
                mb: '12px', p: '12px', children: React.createElement(React.Fragment, null,
                    label('Weekly Usage Chart', { size: '11px', style: { display: 'block', marginBottom: '8px', color: '#666' } }),
                    React.createElement('div', {
                        style: { display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px', marginBottom: '6px' }
                    },
                        ...[40, 35, 45, 30, 20, 10, 5].map((h, i) =>
                            React.createElement('div', {
                                key: i,
                                style: {
                                    flex: 1,
                                    height: h + '%',
                                    background: '#000',
                                    borderRadius: '2px'
                                }
                            })
                        )
                    ),
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'space-between' }
                    },
                        ...['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) =>
                            React.createElement('span', {
                                key: i,
                                style: { fontSize: '10px', fontFamily: 'monospace', flex: 1, textAlign: 'center' }
                            }, d)
                        )
                    )
                )
            }),

            // See All Activity
            box({
                flex: true, between: true, mb: '12px', p: '10px',
                children: React.createElement(React.Fragment, null,
                    label('See All App & Website Activity', { size: '11px' }),
                    label('>', { bold: true, size: '12px' })
                )
            }),

            // INSIGHTS section
            label('INSIGHTS', { bold: true, size: '11px', style: { display: 'block', marginBottom: '8px', color: '#666', letterSpacing: '1px' } }),

            // Insight card - Slide 1: What happened today
            homeSlide === 0 ? box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }
                    },
                        label('What happened today', { bold: true, size: '13px' }),
                        React.createElement('span', {
                            onClick: () => setCurrentView('detail'),
                            style: { fontSize: '11px', fontFamily: 'monospace', textDecoration: 'underline', cursor: 'pointer' }
                        }, 'View more >')
                    ),
                    // Left bar + content
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #000', paddingLeft: '10px', marginBottom: '10px' }
                    },
                        label('▲ [Headline insight text]', { bold: true, size: '11px', style: { display: 'block', marginBottom: '5px' } }),
                        label('Cause: _______________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:    _______________', { size: '10px', style: { display: 'block', color: '#555' } })
                    ),
                    // Feedback buttons
                    React.createElement('div', {
                        style: { display: 'flex', gap: '6px' }
                    },
                        ...['Sounds right', 'Not quite', 'Something else'].map((t, i) =>
                            React.createElement('div', {
                                key: i,
                                onClick: t === 'Something else' ? () => setShowTextPopup(true) : undefined,
                                style: {
                                    border: '1px solid #000',
                                    borderRadius: '12px',
                                    padding: '3px 8px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    cursor: t === 'Something else' ? 'pointer' : undefined
                                }
                            }, t)
                        )
                    ),
                    // Dots
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '8px' }
                    },
                        React.createElement('div', {
                            onClick: () => setHomeSlide(0),
                            style: { width: '16px', height: '6px', background: '#000', borderRadius: '3px', cursor: 'pointer' }
                        }),
                        React.createElement('div', {
                            onClick: () => setHomeSlide(1),
                            style: { width: '6px', height: '6px', background: '#ccc', borderRadius: '50%', cursor: 'pointer' }
                        })
                    )
                )
            }) :

            // Insight card - Slide 2: What is different today
            box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }
                    },
                        label('What is different today', { bold: true, size: '13px' }),
                        React.createElement('span', {
                            onClick: () => setCurrentView('detail'),
                            style: { fontSize: '11px', fontFamily: 'monospace', textDecoration: 'underline', cursor: 'pointer' }
                        }, 'View more >')
                    ),
                    // Left bar + content
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #666', paddingLeft: '10px', marginBottom: '10px' }
                    },
                        label('▼ [Headline insight text]', { bold: true, size: '11px', style: { display: 'block', marginBottom: '5px' } }),
                        label('Cause: _______________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:    _______________', { size: '10px', style: { display: 'block', color: '#555' } })
                    ),
                    // Feedback buttons
                    React.createElement('div', {
                        style: { display: 'flex', gap: '6px' }
                    },
                        ...['Sounds right', 'Not quite', 'Something else'].map((t, i) =>
                            React.createElement('div', {
                                key: i,
                                onClick: t === 'Something else' ? () => setShowTextPopup(true) : undefined,
                                style: {
                                    border: '1px solid #000',
                                    borderRadius: '12px',
                                    padding: '3px 8px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    cursor: t === 'Something else' ? 'pointer' : undefined
                                }
                            }, t)
                        )
                    ),
                    // Dots
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '8px' }
                    },
                        React.createElement('div', {
                            onClick: () => setHomeSlide(0),
                            style: { width: '6px', height: '6px', background: '#ccc', borderRadius: '50%', cursor: 'pointer' }
                        }),
                        React.createElement('div', {
                            onClick: () => setHomeSlide(1),
                            style: { width: '16px', height: '6px', background: '#000', borderRadius: '3px', cursor: 'pointer' }
                        })
                    )
                )
            }),

            // Limit Usage section
            label('LIMIT USAGE', { bold: true, size: '11px', style: { display: 'block', marginBottom: '8px', color: '#666', letterSpacing: '1px' } }),
            ...['Downtime', 'App Limits', 'Always Allowed'].map((item, i) =>
                box({
                    key: i, flex: true, between: true, mb: '8px', p: '10px',
                    children: React.createElement(React.Fragment, null,
                        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                            React.createElement('div', { style: { width: '18px', height: '18px', background: '#e0e0e0', borderRadius: '4px' } }),
                            label(item, { size: '11px' })
                        ),
                        label('>', { size: '11px' })
                    )
                })
            ),

            // Text feedback popup
            renderTextPopup()
        );
    }

    // Detail view - Day
    if (currentView === 'detail' && detailView === 'day') {
        return React.createElement('div', {
            style: {
                background: 'white',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                padding: '16px',
                fontFamily: 'monospace',
                boxSizing: 'border-box',
                position: 'relative'
            }
        },
            // Status bar
            React.createElement('div', {
                style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }
            },
                label('9:41', { bold: true, size: '13px' }),
                label('signal  battery', { size: '11px' })
            ),

            // Back + toggle + info button
            React.createElement('div', {
                style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }
            },
                React.createElement('div', {
                    onClick: () => setCurrentView('home'),
                    style: { width: '24px', height: '24px', border: '1.5px solid #000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '13px' }
                }, '<'),
                React.createElement('div', {
                    style: { display: 'flex', border: '1.5px solid #000', borderRadius: '12px', overflow: 'hidden' }
                },
                    React.createElement('div', {
                        onClick: () => setDetailView('week'),
                        style: { padding: '4px 14px', fontSize: '11px', fontFamily: 'monospace', cursor: 'pointer' }
                    }, 'Week'),
                    React.createElement('div', {
                        style: { padding: '4px 14px', fontSize: '11px', fontFamily: 'monospace', background: '#000', color: 'white' }
                    }, 'Day')
                ),
                infoButton
            ),

            // Collapsible section 1
            box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }
                    },
                        label('WHAT HAPPENED TODAY', { size: '10px', style: { letterSpacing: '0.5px', color: '#666' } }),
                        label('v', { size: '11px' })
                    ),
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #000', paddingLeft: '10px', marginBottom: '10px' }
                    },
                        label('▲ [Headline]', { bold: true, size: '11px', style: { display: 'block', marginBottom: '4px' } }),
                        label('Cause:   ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Pattern: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:     ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                    ),
                    React.createElement('div', {
                        style: { display: 'flex', gap: '6px' }
                    },
                        ...['Sounds right', 'Not quite', 'Other'].map((t, i) =>
                            React.createElement('div', {
                                key: i,
                                style: { border: '1px solid #000', borderRadius: '12px', padding: '3px 8px', fontSize: '9px', fontFamily: 'monospace' }
                            }, t)
                        )
                    )
                )
            }),

            // Collapsible section 2
            box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    React.createElement('div', {
                        style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }
                    },
                        label('WHAT IS DIFFERENT TODAY', { size: '10px', style: { letterSpacing: '0.5px', color: '#666' } }),
                        label('v', { size: '11px' })
                    ),
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #666', paddingLeft: '10px', marginBottom: '10px' }
                    },
                        label('▼ [Headline]', { bold: true, size: '11px', style: { display: 'block', marginBottom: '4px' } }),
                        label('Cause:   ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Predict: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:     ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                    ),
                    React.createElement('div', {
                        style: { display: 'flex', gap: '6px' }
                    },
                        ...['Sounds right', 'Not quite', 'Other'].map((t, i) =>
                            React.createElement('div', {
                                key: i,
                                style: { border: '1px solid #000', borderRadius: '12px', padding: '3px 8px', fontSize: '9px', fontFamily: 'monospace' }
                            }, t)
                        )
                    )
                )
            }),

            // Key Moments
            box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    label('KEY MOMENTS', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #000', paddingLeft: '10px' }
                    },
                        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
                            label('[Event name]', { bold: true, size: '11px' }),
                            label('[Time]', { size: '10px', style: { color: '#666' } })
                        ),
                        label('Volume:   ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Duration: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Pattern:  [app] → [app]', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Result:   ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:      ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                    )
                )
            }),

            // What Worked
            box({
                mb: '10px', p: '12px',
                children: React.createElement(React.Fragment, null,
                    label('WHAT WORKED TODAY', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #666', paddingLeft: '10px' }
                    },
                        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
                            label('[Success metric]', { bold: true, size: '11px' }),
                            label('[Time range]', { size: '10px', style: { color: '#666' } })
                        ),
                        label('Situation: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Result:    ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Felt like: ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                    )
                )
            }),

            // Patterns
            box({
                p: '12px',
                children: React.createElement(React.Fragment, null,
                    label('PATTERNS FORMING', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                    React.createElement('div', {
                        style: { borderLeft: '2.5px solid #999', paddingLeft: '10px' }
                    },
                        label('[Pattern name]', { bold: true, size: '11px', style: { display: 'block', marginBottom: '4px' } }),
                        label('Freq:  ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Trend: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:   ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                    )
                )
            }),

            // Info popup
            renderInfoPopup(),
            renderTextPopup()
        );
    }

    // Detail view - Week
    // Show memoji moods if toggled
    if (showMemojiMoods) {
        return React.createElement('div', {
            style: {
                background: 'white',
                width: '100%',
                height: '100%',
                position: 'relative'
            }
        },
            renderMemojiMoods()
        );
    }

    return React.createElement('div', {
        style: {
            background: 'white',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            padding: '16px',
            fontFamily: 'monospace',
            boxSizing: 'border-box',
            position: 'relative'
        }
    },
        // Status bar
        React.createElement('div', {
            style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }
        },
            label('9:41', { bold: true, size: '13px' }),
            label('signal  battery', { size: '11px' })
        ),

        // Back + toggle + info button
        React.createElement('div', {
            style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }
        },
            React.createElement('div', {
                onClick: () => setCurrentView('home'),
                style: { width: '24px', height: '24px', border: '1.5px solid #000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '13px' }
            }, '<'),
            React.createElement('div', {
                style: { display: 'flex', border: '1.5px solid #000', borderRadius: '12px', overflow: 'hidden' }
            },
                React.createElement('div', {
                    style: { padding: '4px 14px', fontSize: '11px', fontFamily: 'monospace', background: '#000', color: 'white' }
                }, 'Week'),
                React.createElement('div', {
                    onClick: () => setDetailView('day'),
                    style: { padding: '4px 14px', fontSize: '11px', fontFamily: 'monospace', cursor: 'pointer' }
                }, 'Day')
            ),
            infoButton
        ),

        // What happened this week
        box({
            mb: '10px', p: '12px',
            children: React.createElement(React.Fragment, null,
                label('WHAT HAPPENED THIS WEEK', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                React.createElement('div', {
                    style: { borderLeft: '2.5px solid #000', paddingLeft: '10px' }
                },
                    label('When:    ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                    label('Pattern: [app] → [app]', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                    label('Freq:    ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                    label('Why:     ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                )
            )
        }),

        // Pattern formed this week
        box({
            mb: '10px', p: '12px',
            children: React.createElement(React.Fragment, null,
                label('PATTERN FORMED THIS WEEK', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                label('[Time range]', { bold: true, size: '12px', style: { display: 'block', marginBottom: '4px' } }),
                label('[X] of 7 evenings followed this', { size: '10px', style: { display: 'block', marginBottom: '8px', color: '#555' } }),
                // Quote block
                React.createElement('div', {
                    style: { borderLeft: '2.5px solid #000', paddingLeft: '10px', marginBottom: '10px', fontStyle: 'italic' }
                },
                    label('[Emotional insight text]', { size: '10px', style: { color: '#555' } })
                ),
                // Timeline
                ...['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i, arr) =>
                    React.createElement('div', {
                        key: i,
                        style: { display: 'flex', alignItems: 'flex-start', marginBottom: '0px' }
                    },
                        // Timeline dot + line
                        React.createElement('div', {
                            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '14px', marginRight: '8px', flexShrink: 0 }
                        },
                            React.createElement('div', {
                                style: {
                                    width: '6px', height: '6px', borderRadius: '50%',
                                    background: i === 6 ? '#666' : '#000',
                                    marginTop: '4px', flexShrink: 0
                                }
                            }),
                            i < arr.length - 1 ? React.createElement('div', {
                                style: { width: '1px', height: '16px', background: '#ccc' }
                            }) : null
                        ),
                        // Day content
                        React.createElement('div', {
                            style: { flex: 1, paddingBottom: '2px' }
                        },
                            label(day, { bold: true, size: '10px', style: { display: 'block', marginBottom: '1px' } }),
                            i < 6 ?
                                label('[time] [app] → [app]', { size: '9px', style: { color: '#555' } }) :
                                label('[No screen time]', { size: '9px', style: { color: '#666' } })
                        )
                    )
                )
            )
        }),

        // What worked this week
        box({
            mb: '10px', p: '12px',
            children: React.createElement(React.Fragment, null,
                label('WHAT WORKED THIS WEEK', { size: '10px', style: { display: 'block', letterSpacing: '0.5px', color: '#666', marginBottom: '8px' } }),
                React.createElement('div', {
                    style: { borderLeft: '2.5px solid #666', paddingLeft: '10px' }
                },
                    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
                        label('[Success metric]', { bold: true, size: '11px' }),
                        label('([X]/7 d)', { size: '10px', style: { color: '#666' } })
                    ),
                    label('Situation: ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                    label('Result:    ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                    label('Felt like: ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
                )
            )
        }),

        // View weekly mood stickers link
        React.createElement('div', {
            onClick: () => setShowMemojiMoods(true),
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '10px',
                marginBottom: '20px',
                cursor: 'pointer'
            }
        },
            label('View weekly mood stickers', { size: '10px', style: { textDecoration: 'underline', color: '#555' } }),
            label('>', { size: '10px', style: { color: '#555' } })
        ),

        // Info popup
        renderInfoPopup(),
        renderTextPopup()
    );
}

window.WireframeScreen = WireframeScreen;
