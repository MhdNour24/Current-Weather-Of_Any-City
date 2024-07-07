import "./App.css";
// pages
import WeatherPage from "./pages/WeatherPage";

// providers
import { TempProvider } from "./contexts/TempContext";
import { DateTimeProvider } from "./contexts/DateTimeContext";
import { LatAndLongProvider } from "./contexts/LatAndLongContext";
import { SeeTempProvider } from "./contexts/SeeTempContext";

function App() {
  return (
    <div className="App">
      <SeeTempProvider>
        <LatAndLongProvider>
          <DateTimeProvider>
            <TempProvider>
              <WeatherPage></WeatherPage>
            </TempProvider>
          </DateTimeProvider>
        </LatAndLongProvider>
      </SeeTempProvider>
    </div>
  );
}
export default App;
