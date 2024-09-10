// Add more constants here as needed

export const AppBranding = "Stage";

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const pipelineLogUrl = "http://localhost:8080";

export const API_URL = backendBaseUrl;
export const LOG_URL = pipelineLogUrl;
export const MAX_RESULTS = 10;
export const DEFAULT_TIMEOUT = 5000;

// Debezium color constants
export const BrandColors = {
  green: "#a5c82d",
  lightGreen: "#7fc5a5",
  teal: "#58b2da"
};

// Application color constants
export const AppColors = {
  dark: "#292929",
  darkBlue: "#4f6c87",
  white: "#ffffff"
};

// Application constant strings
export const AppStrings = {
  source: "source",
  destination: "destination",
  pipeline: "pipeline"
};
