
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ConnectWalletButton = ({ isConnected, onConnect }) => (
  <Button 
    onClick={onConnect} 
    className="w-full mb-4"
    variant={isConnected ? "outline" : "default"}
  >
    {isConnected ? "Wallet Connected" : "Connect Wallet"}
  </Button>
);

const TokenSelector = ({ value, onChange }) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select token" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="TON">TON</SelectItem>
      <SelectItem value="USDT">USDT</SelectItem>
      <SelectItem value="BTC">BTC</SelectItem>
      <SelectItem value="ETH">ETH</SelectItem>
    </SelectContent>
  </Select>
);

const SwapForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <TokenSelector value={fromToken} onChange={setFromToken} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="space-y-2">
        <TokenSelector value={toToken} onChange={setToToken} />
        <Input type="number" placeholder="You will receive" readOnly />
      </div>
      <Button className="w-full">Swap</Button>
    </div>
  );
};

const LimitOrderForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <TokenSelector value={fromToken} onChange={setFromToken} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="space-y-2">
        <TokenSelector value={toToken} onChange={setToToken} />
        <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <Button className="w-full">Place Order</Button>
    </div>
  );
};

const MarketData = () => (
  <div className="grid grid-cols-3 gap-4 text-center">
    <div>
      <p className="text-sm text-muted-foreground">Price</p>
      <p className="font-bold">$1.23</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">24h Volume</p>
      <p className="font-bold">$1,234,567</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">24h Change</p>
      <p className="font-bold text-green-500">+5.67%</p>
    </div>
  </div>
);

export default function DEXExchange() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    // Here you would typically implement the actual wallet connection logic
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">TON DEX Exchange</CardTitle>
        </CardHeader>
        <CardContent>
          <ConnectWalletButton 
            isConnected={isWalletConnected} 
            onConnect={handleConnectWallet} 
          />
          <MarketData />
          <Tabs defaultValue="swap" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="swap">Swap</TabsTrigger>
              <TabsTrigger value="limit">Limit Order</TabsTrigger>
            </TabsList>
            <TabsContent value="swap">
              <SwapForm />
            </TabsContent>
            <TabsContent value="limit">
              <LimitOrderForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
