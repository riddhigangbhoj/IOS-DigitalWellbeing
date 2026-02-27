const GestureDetector = (() => {
    const SWIPE_THRESHOLD = 50; // minimum distance for swipe
    const SWIPE_MAX_DURATION = 300; // maximum duration for swipe
    const TAP_MAX_DURATION = 200; // maximum duration for tap
    const TAP_MAX_MOVEMENT = 10; // maximum movement for tap
    const LONG_PRESS_DURATION = 500; // minimum duration for long press

    class GestureHandler {
        constructor() {
            this.touchStart = null;
            this.touchEnd = null;
            this.startTime = null;
            this.longPressTimer = null;
        }

        handleTouchStart(event, callbacks) {
            const touch = event.touches[0];
            this.touchStart = { x: touch.clientX, y: touch.clientY };
            this.startTime = Date.now();

            // Set long press timer
            this.longPressTimer = setTimeout(() => {
                if (callbacks.onLongPress && this.touchStart) {
                    const movement = this.calculateMovement(this.touchStart, {
                        x: touch.clientX,
                        y: touch.clientY
                    });
                    if (movement < TAP_MAX_MOVEMENT) {
                        callbacks.onLongPress(this.touchStart);
                    }
                }
            }, LONG_PRESS_DURATION);
        }

        handleTouchMove(event, callbacks) {
            if (!this.touchStart) return;

            const touch = event.touches[0];
            const currentPos = { x: touch.clientX, y: touch.clientY };

            // Clear long press timer on movement
            if (this.longPressTimer) {
                clearTimeout(this.longPressTimer);
                this.longPressTimer = null;
            }

            // Handle scroll if callback exists
            if (callbacks.onScroll) {
                const deltaY = currentPos.y - this.touchStart.y;
                callbacks.onScroll(deltaY);
            }
        }

        handleTouchEnd(event, callbacks) {
            if (!this.touchStart) return;

            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;

            const touch = event.changedTouches[0];
            this.touchEnd = { x: touch.clientX, y: touch.clientY };
            const duration = Date.now() - this.startTime;

            const movement = this.calculateMovement(this.touchStart, this.touchEnd);

            // Detect tap
            if (duration < TAP_MAX_DURATION && movement < TAP_MAX_MOVEMENT) {
                if (callbacks.onTap) {
                    callbacks.onTap(this.touchEnd);
                }
            }
            // Detect swipe
            else if (duration < SWIPE_MAX_DURATION && movement > SWIPE_THRESHOLD) {
                const direction = this.calculateDirection(this.touchStart, this.touchEnd);
                if (callbacks.onSwipe) {
                    callbacks.onSwipe(direction);
                }
            }

            this.reset();
        }

        calculateMovement(start, end) {
            const dx = end.x - start.x;
            const dy = end.y - start.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        calculateDirection(start, end) {
            const dx = end.x - start.x;
            const dy = end.y - start.y;

            if (Math.abs(dx) > Math.abs(dy)) {
                return dx > 0 ? 'right' : 'left';
            } else {
                return dy > 0 ? 'down' : 'up';
            }
        }

        reset() {
            this.touchStart = null;
            this.touchEnd = null;
            this.startTime = null;
        }
    }

    return {
        createHandler: () => new GestureHandler()
    };
})();

// Make available globally for Babel modules
window.GestureDetector = GestureDetector;
