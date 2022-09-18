import { validKeyCodes, validKeys, eventOptions, clamp, roundDecimals, } from "./helpers.js";
export function createHandlers({ props, sliderState, }) {
    const clampedChange = (n) => clamp(n, { max: props.max, min: props.min });
    function getCoordinates(e) {
        const { left: offsetLeft, width: trackWidth } = sliderState.dimensions;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        let left = Math.min(Math.max((clientX - offsetLeft - 16) / trackWidth, 0), 1) || 0;
        const value = props.min + left * (props.max - props.min);
        return { value };
    }
    const getThumbPosition = () => ((sliderState.position - props.min) / (props.max - props.min)) * 100;
    const getThumbTransform = () => (getThumbPosition() / 100) * sliderState.dimensions.width;
    const getShiftedChange = (n) => {
        const r = 1.0 / sliderState.step;
        return Math.floor(n * r) / r;
    };
    function handleKeyDown(e) {
        const key = e.key;
        if (!validKeyCodes.includes(key))
            return;
        e.preventDefault();
        if ([validKeys.left, validKeys.right, validKeys.up, validKeys.down].includes(key)) {
            const direction = [validKeys.right, validKeys.up].includes(key) ? 1 : -1;
            sliderState.position = clampedChange(sliderState.val + direction * sliderState.step);
        }
        else if (key === validKeys.home) {
            sliderState.position = props.min;
        }
        else if (key === validKeys.end) {
            sliderState.position = props.max;
        }
        else {
            const direction = key === validKeys.pageup ? 1 : -1;
            const minStepMultiplier = 2;
            const maxStepMultiplier = 50;
            sliderState.position = clampedChange(sliderState.val +
                direction *
                    sliderState.step *
                    Math.max(minStepMultiplier, Math.min(maxStepMultiplier, Math.ceil((props.max - props.min) / 10 / sliderState.step))));
        }
    }
    function handleFocus(e) { }
    function handleBlur(e) { }
    function handleMouseDown(e) {
        sliderState.sliderPressed = true;
        if ("touches" in e) {
            window.addEventListener("touchmove", handleMouseChange, eventOptions);
            window.addEventListener("touchend", handleMouseUp, { once: true });
        }
        else {
            window.addEventListener("mousemove", handleMouseChange, eventOptions);
            window.addEventListener("mouseup", handleMouseUp, { once: true });
        }
        e.stopPropagation();
        e.preventDefault();
    }
    // we don't return this function, it's called via mouseDown's addEventListener
    function handleMouseUp() {
        sliderState.sliderPressed = false;
        window.removeEventListener("touchmove", handleMouseChange);
        window.removeEventListener("mousemove", handleMouseChange);
    }
    function handleClick(e) {
        handleMouseChange(e);
    }
    function handleMouseChange(e) {
        const { value } = getCoordinates(e);
        const n = roundDecimals(value);
        sliderState.thumbEl?.focus();
        if (sliderState.position === n)
            return;
        sliderState.position = n;
    }
    return {
        handleKeyDown,
        handleFocus,
        handleBlur,
        handleMouseDown,
        handleClick,
        getThumbPosition,
        getThumbTransform,
        getShiftedChange,
    };
}
