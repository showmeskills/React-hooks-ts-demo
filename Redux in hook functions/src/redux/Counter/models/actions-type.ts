export enum ActionsTypes {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface CounterPayload{
    payload:number;
}

interface Increment_Counter extends CounterPayload{
    type: typeof ActionsTypes.INCREMENT_COUNTER
}

interface Decrement_Counter extends CounterPayload{
    type: typeof ActionsTypes.DECREMENT_COUNTER
}

export type CounterActionTypes = Increment_Counter | Decrement_Counter;