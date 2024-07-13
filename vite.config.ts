import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_REACT_URL": JSON.stringify(process.env.VITE_REACT_URL),
    "process.env.STRIPE_PUBLIC_KEY": JSON.stringify(
      process.env.STRIPE_PUBLIC_KEY
    ),
  },
});
