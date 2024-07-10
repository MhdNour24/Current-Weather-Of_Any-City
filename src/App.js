import "./App.css";
// pages
import WeatherPage from "./pages/WeatherPage";
// providers
import { DateTimeProvider } from "./contexts/DateTimeContext";
import { LatAndLongProvider } from "./contexts/LatAndLongContext";
import { SeeTempProvider } from "./contexts/SeeTempContext";

function App() {
  return (
    <div className="App">
      <SeeTempProvider>
        <LatAndLongProvider>
          <DateTimeProvider>
              <WeatherPage></WeatherPage>
          </DateTimeProvider>
        </LatAndLongProvider>
      </SeeTempProvider>
    </div>
  );
}
export default App;
