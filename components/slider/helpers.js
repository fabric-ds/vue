export const useDimensions = () => {
    let observer;
    // we use boundingClient because other observer attributes don't calculate X offset in a useful way
    const useOnResize = (updateDimensions) => (entries) => {
        const { left, width: w } = entries[0].target.getBoundingClientRect();
        updateDimensions({ left, width: w - 24 }); // so the thumb can't run off the track to the right
    };
    const mountedHook = (sliderLineEl, updateDimensions) => {
        updateDimensions(sliderLineEl.getBoundingClientRect());
        observer = new ResizeObserver(useOnResize(updateDimensions));
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
export function roundDecimals(n, decimals = 2) {
    const rounding = decimals ? Math.pow(10, decimals) : 1;
    return Math.round(n * rounding) / rounding;
}
const isNumber = (e) => Number.isFinite(parseFloat(e));
export const clamp = (v, { min, max }) => (isNumber(v) ? Math.min(Math.max(Number(v), min), max) : min);

