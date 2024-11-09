export interface DebugEvent<T = any> {
	action: string;
	data: T;
}

export interface NuiMessage<T = unknown> {
	action: string;
	data: T;
}

export type NuiEventHandler<T = any> = (data: T) => void;
