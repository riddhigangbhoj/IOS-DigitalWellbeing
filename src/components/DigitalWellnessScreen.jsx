function DigitalWellnessScreen({ onNavigate, isSolution }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const totalSlides = 2;
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [homeFeedback1, setHomeFeedback1] = React.useState(null);
    const [homeFeedback2, setHomeFeedback2] = React.useState(null);
    const [showHomeTextPopup, setShowHomeTextPopup] = React.useState(null);
    const [homeFeedbackText, setHomeFeedbackText] = React.useState('');

    const handleHomeFeedback = (section, type) => {
        if (type === 'something') {
            setShowHomeTextPopup(section);
            setHomeFeedbackText('');
            return;
        }
        if (section === 1) setHomeFeedback1(type);
        else setHomeFeedback2(type);
    };

    const submitHomeTextFeedback = () => {
        if (showHomeTextPopup === 1) setHomeFeedback1('something');
        else setHomeFeedback2('something');
        setShowHomeTextPopup(null);
        setHomeFeedbackText('');
    };

    const renderHomeFeedbackButtons = (section) => {
        const selected = section === 1 ? homeFeedback1 : homeFeedback2;
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
                    onClick: () => handleHomeFeedback(section, btn.type),
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

    const handleStart = (clientX) => {
        setTouchStart(clientX);
        setIsDragging(true);
    };

    const handleMove = (clientX) => {
        if (isDragging) {
            setTouchEnd(clientX);
        }
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (touchStart - touchEnd > 75) {
            // Swiped left
            if (currentSlide < totalSlides - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
        if (touchStart - touchEnd < -75) {
            // Swiped right
            if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            }
        }
    };

    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseDown = (e) => {
        handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientX);
    };

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
                        borderRadius: '11px',
                        padding: '1px 5px',
                        fontSize: '12px',
                        fontWeight: '600'
                    }
                }, '4')
            )
        ),

        // Back Button
        React.createElement(
            'div',
            { style: { padding: '8px 20px 6px 20px' } },
            React.createElement(
                'button',
                {
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
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
                    }
                },
                React.createElement('i', { className: 'ph-bold ph-caret-left', style: { fontSize: '13px', color: '#000' } })
            )
        ),

        // All Devices
        React.createElement('div', {
            style: {
                padding: '0 20px 8px 20px',
                fontSize: '20px',
                fontWeight: '700',
                color: '#aeaeb2',
                letterSpacing: '0.3px'
            }
        }, 'All Devices'),

        // Daily Average Card
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
            // Daily Average label
            React.createElement('div', {
                style: {
                    fontSize: '13px',
                    color: '#aeaeb2',
                    marginBottom: '5px',
                    fontWeight: '400'
                }
            }, 'Daily Average'),

            // Time and percentage
            React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' } },
                React.createElement('div', {
                    style: {
                        fontSize: '28px',
                        fontWeight: '600',
                        lineHeight: '1',
                        letterSpacing: '0.1px'
                    }
                }, '24h 44m'),
                React.createElement('div', {
                    style: {
                        fontSize: '13px',
                        color: '#aeaeb2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontWeight: '400',
                        whiteSpace: 'nowrap'
                    }
                },
                    React.createElement('i', { className: 'ph ph-arrow-down', style: { fontSize: '12px' } }),
                    '7% from last week'
                )
            ),

            // Chart with grid
            React.createElement(
                'div',
                {
                    style: {
                        height: '105px',
                        position: 'relative',
                        marginBottom: '5px'
                    }
                },
                // Grid lines
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

                // Y-axis labels
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '-4px', fontSize: '10px', color: '#00cec9', fontWeight: '400' } }, 'avg'),
                React.createElement('div', { style: { position: 'absolute', right: '0', top: '48%', transform: 'translateY(-50%)', fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, '14h'),
                React.createElement('div', { style: { position: 'absolute', right: '0', bottom: '15px', fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, '0'),

                // Bars container
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
                                    gap: '4px'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    width: '100%',
                                    height: i < 4 ? (i === 3 ? '38px' : '62px') : '0px',
                                    background: '#00cec9',
                                    borderRadius: '3px'
                                }
                            }),
                            React.createElement('div', { style: { fontSize: '10px', color: '#aeaeb2', fontWeight: '400' } }, day)
                        )
                    )
                )
            ),

            // See All button
            React.createElement(
                'div',
                {
                    onClick: () => onNavigate('activity'),
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '11px 0 0 0',
                        borderTop: '0.5px solid #e5e5ea',
                        cursor: 'pointer'
                    }
                },
                React.createElement('div', { style: { fontSize: '16px', color: '#000', fontWeight: '400' } }, 'See All App & Website Activity'),
                React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
            )
        ),

        // Updated timestamp - outside the card
        React.createElement('div', {
            style: {
                fontSize: '12px',
                color: '#aeaeb2',
                padding: '2px 20px 18px 20px',
                fontWeight: '400'
            }
        }, 'Updated today at 5:24 PM'),

        // Solution Block (only for solution2)
        isSolution ? React.createElement(React.Fragment, null,
            React.createElement(
                'div',
                {
                    onClick: () => onNavigate('insights-detail'),
                    style: {
                        margin: '0 16px 14px 16px',
                        background: 'white',
                        borderRadius: '11px',
                        padding: '12px 14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }
                },
                React.createElement('div', {
                    style: {
                        width: '44px', height: '44px', borderRadius: '10px',
                        overflow: 'hidden', flexShrink: 0
                    }
                },
                    React.createElement('img', {
                        src: 'src/assets/mood-tired.jpg',
                        style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
                    })
                ),
                React.createElement('span', {
                    style: { fontSize: '14px', color: '#1a1a1a', fontWeight: '400', flex: 1 }
                }, 'Want to know why?'),
React.createElement('i', {
                    className: 'ph ph-caret-right',
                    style: { fontSize: '14px', color: '#c7c7cc' }
                })
            ),
        ) : null,

        // Limit Usage
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Limit Usage'),

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
                { icon: 'ph-moon', color: '#5e5ce6', title: 'Downtime', subtitle: 'Off until schedule' },
                { icon: 'ph-hourglass', color: '#ff9f0a', title: 'App Limits', subtitle: 'Set time limits for apps' },
                { icon: 'ph-check', color: '#30d158', title: 'Always Allowed', subtitle: 'Choose apps to allow at all times' },
                { icon: 'ph-ruler', color: '#0a84ff', title: 'Screen Distance', subtitle: 'Reduce eye strain' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '7px 12px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '54px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '21px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, item.title),
                        React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                )
            )
        ),

        // Communication
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Communication'),

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
                { icon: 'ph-chat-circle-dots', color: '#30d158', title: 'Communication Limits', subtitle: 'Set limits for calling and messaging' },
                { icon: 'ph-shield-check', color: '#0a84ff', title: 'Communication Safety', subtitle: 'Protect from sensitive content' }
            ].map((item, index, arr) =>
                React.createElement(
                    'div',
                    {
                        key: index,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '7px 12px',
                            borderBottom: index < arr.length - 1 ? '0.5px solid #e5e5ea' : 'none',
                            minHeight: '54px'
                        }
                    },
                    React.createElement('div', {
                        style: {
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }
                    }, React.createElement('i', { className: `ph-fill ${item.icon}`, style: { fontSize: '21px', color: 'white' } })),
                    React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, item.title),
                        React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, item.subtitle)
                    ),
                    React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
                )
            )
        ),

        // Restrictions
        React.createElement('div', {
            style: {
                padding: '0 20px 7px 20px',
                fontSize: '13px',
                fontWeight: '400',
                color: '#6e6e73',
                textTransform: 'uppercase',
                letterSpacing: '-0.08px'
            }
        }, 'Restrictions'),

        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 14px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '7px 12px',
                    minHeight: '54px'
                }
            },
            React.createElement('div', {
                style: {
                    width: '46px',
                    height: '46px',
                    borderRadius: '11px',
                    background: '#ff453a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }
            }, React.createElement('i', { className: 'ph-fill ph-prohibit', style: { fontSize: '21px', color: 'white' } })),
            React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', { style: { fontSize: '16px', marginBottom: '1px', color: '#000', fontWeight: '400' } }, 'Content & Privacy Restrictions'),
                React.createElement('div', { style: { fontSize: '12px', color: '#aeaeb2', fontWeight: '400' } }, 'Manage content, apps and settings')
            ),
            React.createElement('i', { className: 'ph ph-caret-right', style: { fontSize: '14px', color: '#c7c7cc' } })
        ),

        // Lock Settings
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#007aff', marginBottom: '3px', fontWeight: '400' } }, 'Lock Screen Time Settings'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Use a passcode to secure Screen Time settings.')
        ),

        // Share Across Devices
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' } },
                React.createElement('div', { style: { fontSize: '16px', color: '#000', fontWeight: '400' } }, 'Share Across Devices'),
                React.createElement('div', {
                    style: {
                        width: '51px',
                        height: '31px',
                        borderRadius: '15.5px',
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
                            boxShadow: '0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06)'
                        }
                    })
                )
            ),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'You can enable this on any device signed in to iCloud to sync your Screen Time settings.')
        ),

        // Family
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 9px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#007aff', marginBottom: '3px', fontWeight: '400' } }, 'Set Up Screen Time for Family'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Set up Family Sharing to use Screen Time with your family\'s devices.')
        ),

        // Turn Off
        React.createElement(
            'div',
            {
                style: {
                    margin: '0 16px 40px 16px',
                    background: 'white',
                    borderRadius: '11px',
                    padding: '12px 12px'
                }
            },
            React.createElement('div', { style: { fontSize: '16px', color: '#ff3b30', marginBottom: '3px', fontWeight: '400' } }, 'Turn Off App & Website Activity'),
            React.createElement('div', { style: { fontSize: '12px', color: '#86868b', lineHeight: '1.3', fontWeight: '400' } }, 'Turning off App & Website Activity disables real-time reporting, Downtime, App Limits and Always Allowed.')
        ),
        // Text feedback popup overlay
        showHomeTextPopup && React.createElement('div', {
            onClick: () => setShowHomeTextPopup(null),
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
                    value: homeFeedbackText,
                    onChange: (e) => setHomeFeedbackText(e.target.value),
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
                        onClick: () => setShowHomeTextPopup(null),
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
                        onClick: submitHomeTextFeedback,
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

window.DigitalWellnessScreen = DigitalWellnessScreen;
