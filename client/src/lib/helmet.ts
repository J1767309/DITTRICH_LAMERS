import * as helmetModule from "react-helmet-async";

type HelmetRuntime = {
  Helmet: typeof helmetModule.Helmet;
  HelmetProvider: typeof helmetModule.HelmetProvider;
};

const runtime = helmetModule as unknown as HelmetRuntime & {
  default?: HelmetRuntime;
};
const helmet = runtime.default ?? runtime;

export const Helmet = helmet.Helmet;
export const HelmetProvider = helmet.HelmetProvider;
