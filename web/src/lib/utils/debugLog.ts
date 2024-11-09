const DEBUG = true;

export function debugLog(enabled: boolean, ...args: any[]) {
	if (DEBUG && enabled) console.log(...args);
}
