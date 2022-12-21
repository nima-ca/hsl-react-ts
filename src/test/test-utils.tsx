import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ColorProvider } from "../context/ColorContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ColorProvider>{children}</ColorProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
