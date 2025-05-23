document.addEventListener('DOMContentLoaded', function () {
    // Function to get element coordinates
    function getElementCoordinates(id) {
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            return {
                id: id,
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY,
                width: rect.width,
                height: rect.height,
                right: rect.right + window.scrollX,
                bottom: rect.bottom + window.scrollY
            };
        }
        return null;
    }

    // Get coordinates for all three elements
    const buttonIds = ['KILB', 'KALM', 'KPLO'];
    const coordinates = {};

    buttonIds.forEach(id => {
        coordinates[id] = getElementCoordinates(id);
        console.log(`${id} coordinates:`, coordinates[id]);
    });

    // Optional: Show coordinates on page
    const coordDisplay = document.createElement('div');
    coordDisplay.style.position = 'fixed';
    coordDisplay.style.top = '10px';
    coordDisplay.style.right = '10px';
    coordDisplay.style.background = 'rgba(255,255,255,0.8)';
    coordDisplay.style.padding = '10px';
    coordDisplay.style.border = '1px solid #ccc';
    coordDisplay.style.zIndex = '1000';

    coordDisplay.innerHTML = '<h3>Button Coordinates</h3>' +
        Object.entries(coordinates).map(([id, coords]) =>
            `<p><strong>${id}:</strong> X: ${coords.x.toFixed(0)}px, Y: ${coords.y.toFixed(0)}px, 
            Width: ${coords.width.toFixed(0)}px, Height: ${coords.height.toFixed(0)}px</p>`
        ).join('');

    document.body.appendChild(coordDisplay);
});