import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { ColorModeScript, ColorModeProvider } from "@kobalte/core";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Suspense>
              <ColorModeScript />
              <ColorModeProvider>
                <Nav />
                {props.children}
              </ColorModeProvider>
            </Suspense>
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
