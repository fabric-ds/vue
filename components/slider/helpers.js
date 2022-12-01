export const useDimensions = (updateDimensions) => {
    let observer;
    const handleUpdate = (el) => {
        const { left, width: w } = el.getBoundingClientRect();
        updateDimensions({ left, width: w - 24 }); // -24 so the thumb can't run off the track to the right
    };
    // we use boundingClient because other observer attributes don't calculate X offset in a useful way
    const onResize = (entries) => handleUpdate(entries[0].target);
    const mountedHook = (sliderLineEl) => {
        handleUpdate(sliderLineEl);
        observer = new ResizeObserver(onResize);
        observer.observe(sliderLineEl);
    };
    const unmountedHook = () => {
        observer.disconnect();
    };
    return { mountedHook, unmountedHook };
};
export const validKeys = Object.freeze({
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    pageup: "PageUp",
    pagedown: "PageDown",
});
export const validKeyCodes = Object.values(validKeys);
export const eventOptions = { passive: true };
const rounding = Math.pow(10, 2);
export const roundDecimals = (n) => Math.round(n * rounding) / rounding;
const isNumber = (e) => Number.isFinite(parseFloat(e));
// we call safeClamp internally when we know we don't have to check isNumber
export const safeClamp = (v, { min, max }) => Math.min(Math.max(Number(v), min), max)
export const clamp = (v, { min, max }) => (isNumber(v) ? safeClamp(v, { min, max }) : min);

