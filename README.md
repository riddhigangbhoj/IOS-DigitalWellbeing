# iPhone Prototype Interactive Webpage

An interactive iPhone 13 prototype built with React that supports complex gestures, clickable interfaces, and configurable screens.

## Features

- **iPhone 13 Visual Design**: Accurate bezel, notch, and home indicator
- **Gesture Support**: Swipe, tap, long press, and scroll detection
- **Configurable Screens**: Easy-to-add new screens via configuration
- **Interactive Text Boxes**: Display notes/instructions for each screen
- **Responsive Layout**: Adapts to different screen sizes
- **Modular Architecture**: Clean component separation

## Quick Start

1. Open `index.html` in a modern web browser
2. No build step required - uses React CDN

## Project Structure

```
IOS-digitalwellness/
├── index.html                      # Entry point
├── src/
│   ├── App.jsx                     # Main app component
│   ├── AppContext.jsx              # State management
│   ├── components/
│   │   ├── iPhone.jsx              # Phone shell
│   │   ├── ScreenManager.jsx       # Screen router
│   │   ├── InteractionLayer.jsx    # Gesture detection
│   │   ├── TextBox.jsx             # Instruction boxes
│   │   └── screens/
│   │       ├── BaseScreen.jsx      # Base screen component
│   │       ├── HomeScreen.jsx      # Home screen
│   │       └── SettingsScreen.jsx  # Settings screen
│   ├── config/
│   │   └── screenConfig.js         # Screen configuration
│   ├── utils/
│   │   └── gestures.js             # Gesture utilities
│   └── styles/
│       ├── app.css                 # Main styles
│       ├── iphone.css              # iPhone styles
│       └── textbox.css             # TextBox styles
├── docs/
│   └── plans/
│       ├── 2026-02-27-iphone-prototype-design.md
│       └── 2026-02-27-iphone-prototype-implementation.md
└── README.md
```

## Adding New Screens

### Step 1: Create Screen Component

Create a new file in `src/components/screens/`:

```javascript
function MyNewScreen({ onNavigate, onSwipe }) {
    return (
        <BaseScreen backgroundColor="#000">
            <div>
                {/* Your screen content */}
            </div>
        </BaseScreen>
    );
}

window.MyNewScreen = MyNewScreen;
```

### Step 2: Add to Screen Config

Edit `src/config/screenConfig.js`:

```javascript
const screenConfig = {
    // ... existing screens
    'mynewscreen': {
        leftNotes: 'Instructions for this screen',
        rightNotes: 'Additional notes'
    }
};
```

### Step 3: Update ScreenManager

Edit `src/components/ScreenManager.jsx`, add case in `renderScreen()`:

```javascript
case 'mynewscreen':
    return React.createElement(window.MyNewScreen, screenProps);
```

### Step 4: Add to HTML

Edit `index.html`, add script tag before `App.jsx`:

```html
<script type="text/babel" src="src/components/screens/MyNewScreen.jsx"></script>
```

### Step 5: Navigate to Screen

From any screen component:

```javascript
onNavigate('mynewscreen');
```

## Gesture Callbacks

All screen components receive these callbacks:

- `onNavigate(screenId)` - Navigate to another screen
- `onSwipe(direction)` - Handle swipe gesture ('up', 'down', 'left', 'right')
- `onTap(position)` - Handle tap gesture ({ x, y })
- `onLongPress(position)` - Handle long press ({ x, y })
- `onScroll(delta)` - Handle scroll movement

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Touch events fully supported

## Tech Stack

- React 18 (CDN)
- Babel Standalone
- Vanilla CSS
- Custom gesture detection

## Future Enhancements

- Screen transition animations
- Navigation controls UI
- Interaction recording
- Multi-touch gestures
- Export interaction flows

## License

MIT
