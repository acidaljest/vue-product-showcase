import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light", // soporte para tema claro/oscuro
    themes: {
      light: {
        colors: {
          primary: "#D85A30",
          secondary: "#2C2C2A",
          background: "#F4EFE6",
          surface: "#FFFFFF",
          "on-background": "#2C2C2A",
          "on-surface": "#2C2C2A",
          "on-primary": "#FFFFFF",
          "on-secondary": "#FFFFFF",
        },
      },
    },
  },
});