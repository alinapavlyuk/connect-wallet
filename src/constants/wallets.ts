export interface Wallet {
  name: string;
  icon: string;
  id: string;
  link: string;
}

export const wallets: Wallet[] = [
  {
    name: "Phantom",
    icon: "icons/phantom-icon.svg",
    id: "app.phantom",
    link: "https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
  },
  {
    name: "MetaMask",
    icon: "icons/metamask-icon.svg",
    id: "io.metamask",
    link: "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
  },
];
