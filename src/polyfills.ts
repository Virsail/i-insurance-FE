import 'zone.js/dist/zone';  // Included with Angular CLI.
import 'core-js/features/reflect';





(window as any).global = window;
(window as any).process = {};
(window as any).process = window;
(window as any).process.browser = true;
(window as any).process.version = '';
(window as any).process.versions = {node: false};
(window as any).process.nextTick = (() => {
    const canSetImmediate = typeof window !== 'undefined'
        && (window as any).setImmediate;
    const canPost = typeof window !== 'undefined'
        && window.postMessage && window.addEventListener;
    if (canSetImmediate) {
        return (f) => {
            return (window as any).setImmediate(f);
        };
    }
    if (canPost) {
        const queue = [];
        window.addEventListener('message', (ev) => {
            const source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    const fn = queue.shift();
                    fn();
                }
            }
        }, true);
        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }
    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();
(window as any).global.Buffer = (window as any).global.Buffer || require('buffer').Buffer;