import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Layout } from "./__framework/Layout";

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./__framework/mocks/browser");
    worker.start();
  }
};

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  );
});
