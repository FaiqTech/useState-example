import CartCounter from "./components/cartCounter/CartCounter";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator";
import ColorToggle from "./components/colorToggle/ColorToggle";
import FavoriteToggle from "./components/favoriteToggle/FavoriteToggle";
import PasswordToggle from "./components/passwordToggle/PasswordToggle";
import ShowHide from "./components/showHide/ShowHide";
import TextPanelToggle from "./components/textPanelToggle/TextPanelToggle";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

const App = () => {
  return (
    <>
      <CartCounter />
      <ColorToggle />
      <FavoriteToggle />
      <PasswordGenerator />
      <PasswordToggle />
      <ShowHide />
      <TextPanelToggle />
      <ThemeToggle />
    </>
  );
};

export default App;
