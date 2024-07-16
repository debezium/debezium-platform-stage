export const getNodeScaleTranslation = (element, nodeScale, scaleNode) => {
    if (!scaleNode) {
        return { translateX: 0, translateY: 0 };
    }
    const bounds = element.getBounds();
    const translateX = bounds.width / 2 - (bounds.width / 2) * nodeScale;
    const translateY = bounds.height / 2 - (bounds.height / 2) * nodeScale;
    return { translateX, translateY };
};
//# sourceMappingURL=getNodeScaleTranslation.js.map