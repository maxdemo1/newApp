import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";

export const useTypedDispatch = () => useDispatch<appDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
