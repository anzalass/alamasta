"use client";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const WrappedProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WrappedProvider;
