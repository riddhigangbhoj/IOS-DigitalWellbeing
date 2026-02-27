function InteractionLayer({ children, onSwipe, onTap, onLongPress, onScroll }) {
    const { useEffect, useRef } = React;
    const gestureHandlerRef = useRef(null);

    useEffect(() => {
        gestureHandlerRef.current = window.GestureDetector.createHandler();
    }, []);

    const handleTouchStart = (e) => {
        if (!gestureHandlerRef.current) return;

        gestureHandlerRef.current.handleTouchStart(e, {
            onLongPress: (pos) => {
                if (onLongPress) onLongPress(pos);
            }
        });
    };

    const handleTouchMove = (e) => {
        if (!gestureHandlerRef.current) return;

        gestureHandlerRef.current.handleTouchMove(e, {
            onScroll: (delta) => {
                if (onScroll) onScroll(delta);
            }
        });
    };

    const handleTouchEnd = (e) => {
        if (!gestureHandlerRef.current) return;

        gestureHandlerRef.current.handleTouchEnd(e, {
            onTap: (pos) => {
                if (onTap) onTap(pos);
            },
            onSwipe: (direction) => {
                if (onSwipe) onSwipe(direction);
            }
        });
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                touchAction: 'none'
            }}
        >
            {children}
        </div>
    );
}

window.InteractionLayer = InteractionLayer;
