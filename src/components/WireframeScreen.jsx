function WireframeScreen() {
    const [currentView, setCurrentView] = React.useState('home');
    const [homeSlide, setHomeSlide] = React.useState(0);
    const [detailView, setDetailView] = React.useState('day');

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
                                style: {
                                    border: '1px solid #000',
                                    borderRadius: '12px',
                                    padding: '3px 8px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace'
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
                                style: {
                                    border: '1px solid #000',
                                    borderRadius: '12px',
                                    padding: '3px 8px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace'
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
            )
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
                boxSizing: 'border-box'
            }
        },
            // Status bar
            React.createElement('div', {
                style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }
            },
                label('9:41', { bold: true, size: '13px' }),
                label('signal  battery', { size: '11px' })
            ),

            // Back + toggle
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
                React.createElement('div', { style: { width: '24px' } })
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
                        label('Volume:  ___________', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Pattern: [app] → [app]', { size: '10px', style: { display: 'block', marginBottom: '3px', color: '#555' } }),
                        label('Why:     ___________', { size: '10px', style: { display: 'block', color: '#555', fontStyle: 'italic' } })
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
            })
        );
    }

    // Detail view - Week
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
        // Status bar
        React.createElement('div', {
            style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }
        },
            label('9:41', { bold: true, size: '13px' }),
            label('signal  battery', { size: '11px' })
        ),

        // Back + toggle
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
            React.createElement('div', { style: { width: '24px' } })
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
            p: '12px',
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
        })
    );
}

window.WireframeScreen = WireframeScreen;
