import { BrowserRouter as Router } from "react-router-dom";
import "@patternfly/react-core/dist/styles/base.css";
import { AppLayout } from "./appLayout/AppLayout";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;
