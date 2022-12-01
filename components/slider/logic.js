export * from './helpers.js'
import { validKeyCodes, validKeys, eventOptions, safeClamp, clamp, roundDecimals, } from "./helpers.js";
export function computeValueFromEvent({ dimensions, min, max, evt }) {
    const { left: offsetLeft, width: trackWidth } = dimensions;
    const clientX = "touches" in e ? evt.touches[0].clientX : evt.clientX;
    const left = safeClamp(((clientX - offsetLeft - 16) / trackWidth), { min: 0, max: 1 })
    const value = min + left * (max - min);
    return roundDecimals(value);
}
export function createHandlers({ props, sliderState, }) {
    const clampedChange = (n) => clamp(n, { max: props.max, min: props.min });
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
    function handleMouseChange(evt) {
        const value = computeValueFromEvent({ evt, min: props.min, max: props.max, dimensions: sliderState.dimensions });
        sliderState.thumbEl?.focus();
        if (sliderState.position === value)
            return;
        sliderState.position = value;
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

