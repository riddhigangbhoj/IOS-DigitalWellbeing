# iPhone Prototype Interactive Webpage - Design Document

**Date:** 2026-02-27
**Author:** Design session with user

## Overview

An interactive iPhone 13 prototype webpage that displays a clickable iPhone screen with two minimal text boxes on each side. The infrastructure will support adding different screens and interactions later, with the user providing specific screen content and click behaviors as needed.

## Requirements

- iPhone 13 style visual design (with notch)
- Clickable/interactive screen supporting complex interactions (swipes, scrolling, form inputs)
- Two text boxes (one on each side) displaying notes/instructions for the current screen
- Responsive design that adapts to different screen sizes
- Modular code structure for easy extension
- Minimal UI initially, but structured to easily add navigation controls later

## Technology Stack

- **Framework:** React (using CDN + Babel standalone for no-build-step prototyping)
- **Styling:** Component-scoped CSS
- **State Management:** React Context + hooks
- **Gesture Handling:** Custom touch event detection logic

## Architecture

### Component Hierarchy

```
App (Main container)
├── TextBox (Left notes)
├── iPhone (Phone shell)
│   └── ScreenManager (Screen router)
│       └── InteractionLayer (Gesture detection)
│           └── [Active Screen Component]
└── TextBox (Right notes)
```

### Core Components

**App Component:**
- Root component managing overall layout
- Provides AppContext to all children
- Renders iPhone component flanked by two TextBox components
- Handles responsive layout

**iPhone Component:**
- Renders physical iPhone 13 appearance
  - Black bezel with rounded corners
  - Notch at top center
  - Home indicator bar at bottom
  - Dimensions: 390x844 logical pixels (scaled for display)
- Purely presentational, no business logic
- Contains ScreenManager as children

**ScreenManager Component:**
- Acts as screen router
- Receives `currentScreen` ID from AppContext
- Renders appropriate Screen component based on config
- Handles screen transition logic
- Can support animations in the future

**BaseScreen Component:**
- Base component that all screens can extend/use
- Receives standard props:
  - `onNavigate(screenId)` - Navigate to another screen
  - `onSwipe(direction)` - Handle swipe gestures
  - `onScroll(delta)` - Handle scroll events
  - `onTap(position)` - Handle tap events
  - `onLongPress(position)` - Handle long press
  - `setNotes(left, right)` - Update text box content

**Screen Components:**
- Individual screen implementations (HomeScreen, SettingsScreen, etc.)
- User will define these later with specific content
- Each screen can render any React components (buttons, lists, forms, etc.)
- Each screen handles its own interaction logic

**TextBox Component:**
- Displays notes/instructions for current screen
- Props: `title`, `content`, `position` (left/right)
- Fixed positioning on viewport sides
- Responsive sizing and styling
- Minimal, clean aesthetic

**InteractionLayer Component:**
- Wraps screen content
- Captures touch/mouse events
- Detects gestures and passes to active screen
- Doesn't interfere with standard click events
- Manages z-index for proper event targeting

## State Management

### AppContext

Provides global state via React Context:

```javascript
{
  currentScreen: 'home',           // Current screen ID
  screenHistory: ['home'],         // Navigation history
  leftNotes: 'Instructions...',    // Left text box content
  rightNotes: 'Notes...',          // Right text box content
  screenConfig: {...}              // Screen configuration map
}
```

### Actions

- `navigateToScreen(screenId)` - Navigate to a screen, update history
- `goBack()` - Navigate to previous screen
- `updateNotes(left, right)` - Update text box content
- `registerScreen(id, config)` - Add new screen to config

### Screen Configuration

Centralized in `screenConfig.js`:

```javascript
export const screenConfig = {
  'home': {
    component: HomeScreen,
    leftNotes: 'Swipe up to open apps',
    rightNotes: 'Tap icons to launch apps'
  },
  'settings': {
    component: SettingsScreen,
    leftNotes: 'Scroll to see all options',
    rightNotes: 'Toggle switches to change settings'
  }
  // More screens added here as needed
}
```

## Data Flow

1. User interacts with screen (tap, swipe, etc.)
2. InteractionLayer detects gesture
3. Gesture passed to active Screen component via props
4. Screen handles interaction (e.g., calls `onNavigate('settings')`)
5. AppContext updates `currentScreen` and `screenHistory`
6. ScreenManager re-renders with new screen component
7. New screen's notes automatically populate TextBox components

## Interaction System

### Gesture Detection

**Touch Event Tracking:**
- Track `touchstart`, `touchmove`, `touchend` events
- Record start position, end position, timestamps
- Calculate distance, direction, velocity, duration

**Gesture Types:**

1. **Swipe**
   - Minimum distance: 50px
   - Maximum duration: 300ms
   - Directions: up, down, left, right
   - Use case: Navigation, dismiss actions

2. **Scroll**
   - Vertical movement within scrollable container
   - Continuous tracking of scroll delta
   - Use case: Lists, long content

3. **Tap**
   - Touch duration < 200ms
   - Minimal movement (< 10px)
   - Use case: Buttons, links, selections

4. **Long Press**
   - Touch duration > 500ms
   - Minimal movement (< 10px)
   - Use case: Context menus, special actions

### Event Propagation

- InteractionLayer wraps screen content in a div
- Gestures detected at container level
- Events passed as callbacks to Screen component
- Screen decides how to handle each gesture
- Standard onClick handlers work normally for buttons/links

### Extensibility

- Easy to add new gesture types (pinch, rotate, multi-touch)
- Configurable thresholds for all gesture detection
- Screens can register custom gesture handlers
- Gesture detection logic isolated in utility module

## File Structure

```
/IOS-digitalwellness/
├── docs/
│   └── plans/
│       └── 2026-02-27-iphone-prototype-design.md
├── index.html                 # Entry point
├── src/
│   ├── App.jsx               # Main app component
│   ├── AppContext.jsx        # Context provider
│   ├── components/
│   │   ├── iPhone.jsx        # Phone shell
│   │   ├── ScreenManager.jsx # Screen router
│   │   ├── InteractionLayer.jsx # Gesture detection
│   │   ├── TextBox.jsx       # Instruction boxes
│   │   └── screens/
│   │       ├── BaseScreen.jsx    # Base screen component
│   │       ├── HomeScreen.jsx    # Example home screen
│   │       └── SettingsScreen.jsx # Example settings screen
│   ├── config/
│   │   └── screenConfig.js   # Screen configuration
│   ├── utils/
│   │   └── gestures.js       # Gesture detection utilities
│   └── styles/
│       ├── app.css
│       ├── iphone.css
│       └── textbox.css
```

## iPhone 13 Visual Specifications

- **Screen dimensions:** 390x844 logical pixels (scaled for display)
- **Aspect ratio:** 19.5:9
- **Notch:** Centered at top, ~210px wide, ~30px tall
- **Corner radius:** 40px for outer bezel, 35px for screen
- **Colors:**
  - Bezel: #1c1c1e (dark gray/black)
  - Screen: #000000 (black when off)
- **Home indicator:** White bar at bottom, centered, 134px wide, 5px tall
- **Buttons:** Volume on left side, power on right (visual only, non-functional)

## Responsive Behavior

- iPhone scales proportionally to fit viewport
- Maintains aspect ratio at all sizes
- TextBoxes stack below iPhone on small screens (< 1024px width)
- Maximum iPhone height: 90vh
- Centered layout with appropriate margins

## Future Extensibility

The infrastructure is designed to easily support:

- Navigation controls (back/forward buttons, screen selector)
- Timeline or history panel
- Screen preview thumbnails
- Animation transitions between screens
- Recording user interaction flows
- Exporting interaction data
- Multi-touch gestures
- Haptic feedback simulation

## Implementation Notes

- Start with React CDN + Babel standalone for rapid development
- Can migrate to Create React App or Vite later if needed
- Keep components modular and well-documented
- Use clear prop interfaces for all components
- Separate concerns: UI, state, gestures, configuration
