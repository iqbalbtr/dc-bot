export type CallbackType<T, X> = (err: string, result?: T | null, custom?: X) => void;

export type StatusFetching = "Getting.." | "Finalize" | "success"