function HomeScreen({ onNavigate, onSwipe }) {
    const { useEffect } = React;

    useEffect(() => {
        console.log('HomeScreen mounted');
    }, []);

    const handleAppClick = () => {
        onNavigate('settings');
    };

    return (
        <BaseScreen backgroundColor="#000">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '20px',
                paddingTop: '60px'
            }}>
                <div style={{
                    fontSize: '12px',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '40px',
                    opacity: 0.6
                }}>
                    9:41
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px',
                    padding: '20px'
                }}>
                    {/* App Icons */}
                    {['Settings', 'Photos', 'Camera', 'Messages',
                      'Safari', 'Mail', 'Music', 'Maps'].map((app, index) => (
                        <div
                            key={app}
                            onClick={app === 'Settings' ? handleAppClick : undefined}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '13px',
                                background: `linear-gradient(135deg, ${
                                    ['#007AFF', '#34C759', '#5856D6', '#FF9500',
                                     '#00C7BE', '#FF3B30', '#FF2D55', '#5AC8FA'][index]
                                } 0%, ${
                                    ['#0051D5', '#248A3D', '#3634A3', '#C93400',
                                     '#00857E', '#C20E02', '#C20031', '#1E96CC'][index]
                                } 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                color: '#fff',
                                cursor: app === 'Settings' ? 'pointer' : 'default',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                            }}
                            onMouseDown={(e) => {
                                e.currentTarget.style.transform = 'scale(0.95)';
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {app === 'Settings' ? '⚙️' :
                             app === 'Photos' ? '🖼️' :
                             app === 'Camera' ? '📷' :
                             app === 'Messages' ? '💬' :
                             app === 'Safari' ? '🧭' :
                             app === 'Mail' ? '✉️' :
                             app === 'Music' ? '🎵' :
                             app === 'Maps' ? '🗺️' : ''}
                        </div>
                    ))}
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '20px',
                    right: '20px',
                    height: '90px',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '0 20px'
                }}>
                    {/* Dock */}
                    {['☎️', '📧', '🌐', '🎵'].map(icon => (
                        <div
                            key={icon}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '13px',
                                background: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px'
                            }}
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </BaseScreen>
    );
}

window.HomeScreen = HomeScreen;
