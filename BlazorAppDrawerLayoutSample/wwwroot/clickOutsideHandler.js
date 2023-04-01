window.clickOutsideHandler = {
    addEventListener: function (element, dotNetObject) {
        window.addEventListener('mousedown', (event) => {
            if (!element.contains(event.target)) {
                dotNetObject.invokeMethodAsync('OnClickOutside');
            }
        });
    }
};