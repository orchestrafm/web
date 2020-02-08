import lodash from 'lodash';

// Copied from https://github.com/jossmac/react-toast-notifications/issues/40#issuecomment-526410103
// Had to make this because calling React Hooks inside of Class Components will cause the app to crash

export function addToast(...args) {
    const add = lodash.get(window, "__react_toast_provider.current.add");

    if (!add) {
        console.error("Toast could not find the current active React window.");
        return
    }

    add(...args);
}
