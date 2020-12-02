import React, { ComponentType } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "./app/store";

interface Props {
  children: React.ReactElement;
}

const AllTheProviders = ({ children }: Props): React.ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {}
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
