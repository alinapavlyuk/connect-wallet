import { useAccount, useDisconnect, useEnsName } from "wagmi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

export function Account() {
  const { address, chain, connector } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Your wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Wallet</p>
          <p className="font-medium">
            {connector ? connector.name : "Undefined"}
          </p>
        </div>

        <Separator />

        <div>
          <p className="text-sm text-muted-foreground mb-1">Address</p>
          <p className="font-medium">
            {address && ensName ? `${ensName} (${address})` : address}
          </p>
        </div>

        <Separator />

        <div>
          <p className="text-sm text-muted-foreground mb-1">Network</p>
          <p className="font-medium">{chain ? chain.name : "Undefined"}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </CardFooter>
    </Card>
  );
}
