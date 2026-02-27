function SettingsScreen({ onNavigate, onScroll }) {
    const { useState } = React;

    const [scrollPosition, setScrollPosition] = useState(0);
    const [wifiEnabled, setWifiEnabled] = useState(true);
    const [bluetoothEnabled, setBluetoothEnabled] = useState(false);

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop);
    };

    const handleBack = () => {
        onNavigate('home');
    };

    return (
        <BaseScreen backgroundColor="#000">
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    background: '#1c1c1e',
                    padding: '50px 20px 10px 20px',
                    borderBottom: '1px solid #2c2c2e'
                }}>
                    <button
                        onClick={handleBack}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#007AFF',
                            fontSize: '17px',
                            cursor: 'pointer',
                            padding: '5px 0',
                            marginBottom: '10px'
                        }}
                    >
                        ← Back
                    </button>
                    <h1 style={{
                        color: '#fff',
                        fontSize: '34px',
                        fontWeight: '700',
                        margin: '0'
                    }}>
                        Settings
                    </h1>
                </div>

                {/* Scrollable Content */}
                <div
                    onScroll={handleScroll}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        background: '#000',
                        padding: '20px'
                    }}
                >
                    {/* Profile Section */}
                    <div style={{
                        background: '#1c1c1e',
                        borderRadius: '10px',
                        padding: '15px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px'
                        }}>
                            👤
                        </div>
                        <div>
                            <div style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>
                                User Name
                            </div>
                            <div style={{ color: '#999', fontSize: '14px' }}>
                                Apple ID, iCloud, Media & Purchases
                            </div>
                        </div>
                    </div>

                    {/* Settings Items */}
                    <div style={{
                        background: '#1c1c1e',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        overflow: 'hidden'
                    }}>
                        {[
                            { icon: '✈️', label: 'Airplane Mode', toggle: false },
                            { icon: '📶', label: 'Wi-Fi', toggle: wifiEnabled, onToggle: setWifiEnabled },
                            { icon: '🔵', label: 'Bluetooth', toggle: bluetoothEnabled, onToggle: setBluetoothEnabled },
                        ].map((item, index, arr) => (
                            <div
                                key={item.label}
                                style={{
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: index < arr.length - 1 ? '1px solid #2c2c2e' : 'none'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                                    <span style={{ color: '#fff', fontSize: '17px' }}>{item.label}</span>
                                </div>
                                {item.onToggle !== undefined && (
                                    <div
                                        onClick={() => item.onToggle(!item.toggle)}
                                        style={{
                                            width: '51px',
                                            height: '31px',
                                            borderRadius: '16px',
                                            background: item.toggle ? '#34C759' : '#39393d',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s'
                                        }}
                                    >
                                        <div style={{
                                            width: '27px',
                                            height: '27px',
                                            borderRadius: '50%',
                                            background: '#fff',
                                            position: 'absolute',
                                            top: '2px',
                                            left: item.toggle ? '22px' : '2px',
                                            transition: 'left 0.3s',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* More sections */}
                    <div style={{
                        background: '#1c1c1e',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        overflow: 'hidden'
                    }}>
                        {[
                            { icon: '🔔', label: 'Notifications' },
                            { icon: '🔊', label: 'Sounds & Haptics' },
                            { icon: '🌙', label: 'Focus' },
                            { icon: '⏱️', label: 'Screen Time' },
                        ].map((item, index, arr) => (
                            <div
                                key={item.label}
                                style={{
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: index < arr.length - 1 ? '1px solid #2c2c2e' : 'none'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                                    <span style={{ color: '#fff', fontSize: '17px' }}>{item.label}</span>
                                </div>
                                <span style={{ color: '#999', fontSize: '17px' }}>›</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BaseScreen>
    );
}

window.SettingsScreen = SettingsScreen;
