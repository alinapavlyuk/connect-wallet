import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi.config";
import { Button } from "./components/ui/button";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Connect wallet</Button>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
