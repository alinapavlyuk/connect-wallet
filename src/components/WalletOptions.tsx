import { useState } from "react";
import { useConnect } from "wagmi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type Wallet, wallets } from "@/constants/wallets";
import { Button } from "./ui/button";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const [failedWallet, setFailedWallet] = useState<Wallet>();

  const findConnector = (connectorId: string) => {
    return connectors.find((c) => c.id === connectorId);
  };

  const tryToConnect = (wallet: Wallet) => {
    const connector = findConnector(wallet.id);
    if (connector) {
      connect({ connector });
    } else {
      setFailedWallet(wallet);
    }
  };

  const modal = failedWallet && (
    <Dialog
      open={!!failedWallet}
      onOpenChange={(isOpen) =>
        isOpen ? undefined : setFailedWallet(undefined)
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Oops!</DialogTitle>
          <DialogDescription>
            Unfortunately {failedWallet.name} is not available in your
            environment. Please try another wallet or check your extensions.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button asChild>
            <a
              href={failedWallet.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Install {failedWallet.name}
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Connect wallet</CardTitle>
          <CardDescription>Choose your preferred wallet</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              onClick={() => tryToConnect(wallet)}
              className={`w-full ${findConnector(wallet.id) ? "" : "opacity-70"}`}
            >
              <img
                src={wallet.icon}
                alt={`${wallet.name} icon`}
                className="w-6 object-contain"
              />
              {wallet.name}
            </Button>
          ))}
        </CardContent>
      </Card>
      {modal}
    </>
  );
}
