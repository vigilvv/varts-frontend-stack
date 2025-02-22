import { GlobalStyles } from "./styles/GlobalStyles";
import { Text } from "./ui/common/Text";
import { Layout } from "./ui/Layout";

function App() {
  return (
    <Layout>
      <Text $fontColor="blue" $fontSizeInPx={20}>
        VARTS will change the world
      </Text>
      <GlobalStyles />
    </Layout>
  );
}

export default App;
