
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const TokenSelector = ({ value, onChange }) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
      <SelectValue placeholder="Select token" />
    </SelectTrigger>
    <SelectContent className="bg-gray-800 border-gray-700">
      <SelectItem value="TON" className="text-white">TON</SelectItem>
      <SelectItem value="USDT" className="text-white">USDT</SelectItem>
      <SelectItem value="BTC" className="text-white">BTC</SelectItem>
      <SelectItem value="ETH" className="text-white">ETH</SelectItem>
    </SelectContent>
  </Select>
);

const SwapForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [estimatedReceive, setEstimatedReceive] = useState("0");

  const handleSwap = () => {
    // Here you would typically call your swap function
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
    alert(`Swapped ${amount} ${fromToken} to ${estimatedReceive} ${toToken}`);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // Mock estimation calculation
    setEstimatedReceive((parseFloat(e.target.value) * 0.98).toFixed(2));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <TokenSelector value={fromToken} onChange={setFromToken} />
        <Input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <TokenSelector value={toToken} onChange={setToToken} />
        <Input type="number" placeholder="You will receive" value={estimatedReceive} readOnly className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <Button onClick={handleSwap} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">Swap</Button>
    </div>
  );
};

const LimitOrderForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handlePlaceOrder = () => {
    console.log(`Placing limit order: ${amount} ${fromToken} to ${toToken} at price ${price}`);
    alert(`Limit order placed: ${amount} ${fromToken} to ${toToken} at price ${price}`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <TokenSelector value={fromToken} onChange={setFromToken} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <TokenSelector value={toToken} onChange={setToToken} />
        <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <Button onClick={handlePlaceOrder} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">Place Order</Button>
    </div>
  );
};

const PoolForm = () => {
  const [token1, setToken1] = useState("");
  const [token2, setToken2] = useState("");
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");

  const handleAddLiquidity = () => {
    console.log(`Adding liquidity: ${amount1} ${token1} and ${amount2} ${token2}`);
    alert(`Liquidity added: ${amount1} ${token1} and ${amount2} ${token2}`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <TokenSelector value={token1} onChange={setToken1} />
        <Input type="number" placeholder="Amount" value={amount1} onChange={(e) => setAmount1(e.target.value)} className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <div className="space-y-2">
        <TokenSelector value={token2} onChange={setToken2} />
        <Input type="number" placeholder="Amount" value={amount2} onChange={(e) => setAmount2(e.target.value)} className="bg-gray-800 border-gray-700 text-white" />
      </div>
      <Button onClick={handleAddLiquidity} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">Add Liquidity</Button>
    </div>
  );
};

const StakeForm = () => {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState(30);

  const handleStake = () => {
    console.log(`Staking ${amount} ${token} for ${duration} days`);
    alert(`Staked ${amount} ${token} for ${duration} days`);
  };

  return (
    <div className="space-y-4">
      <TokenSelector value={token} onChange={setToken} />
      <Input type="number" placeholder="Amount to stake" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-800 border-gray-700 text-white" />
      <div className="space-y-2">
        <p className="text-white">Staking duration: {duration} days</p>
        <Slider
          min={1}
          max={365}
          step={1}
          value={[duration]}
          onValueChange={(value) => setDuration(value[0])}
          className="w-full"
        />
      </div>
      <Button onClick={handleStake} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">Stake Tokens</Button>
    </div>
  );
};

const MoreOptions = () => {
  const options = [
    { name: "Governance", description: "Participate in DAO voting" },
    { name: "Farming", description: "Earn rewards by providing liquidity" },
    { name: "Analytics", description: "View detailed market analytics" },
  ];

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <Button key={index} className="w-full bg-gray-700 hover:bg-gray-600 text-white text-left justify-start">
          <div>
            <p className="font-bold">{option.name}</p>
            <p className="text-sm text-gray-300">{option.description}</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

const MarketData = () => (
  <div className="grid grid-cols-3 gap-4 text-center mb-6">
    <div>
      <p className="text-sm text-gray-400">Price</p>
      <p className="font-bold text-white">$1.23</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">24h Volume</p>
      <p className="font-bold text-white">$1,234,567</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">24h Change</p>
      <p className="font-bold text-green-500">+5.67%</p>
    </div>
  </div>
);

export default function DEXExchange() {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">TON DEX Exchange</h1>
          <MarketData />
          <Tabs defaultValue="swap" className="mt-6">
            <TabsList className="grid w-full grid-cols-5 bg-gray-700 mb-4">
              <TabsTrigger value="swap" className="data-[state=active]:bg-gray-600">Swap</TabsTrigger>
              <TabsTrigger value="limit" className="data-[state=active]:bg-gray-600">Limit</TabsTrigger>
              <TabsTrigger value="pool" className="data-[state=active]:bg-gray-600">Pool</TabsTrigger>
              <TabsTrigger value="stake" className="data-[state=active]:bg-gray-600">Stake</TabsTrigger>
              <TabsTrigger value="more" className="data-[state=active]:bg-gray-600">More</TabsTrigger>
            </TabsList>
            <TabsContent value="swap">
              <SwapForm />
            </TabsContent>
            <TabsContent value="limit">
              <LimitOrderForm />
            </TabsContent>
            <TabsContent value="pool">
              <PoolForm />
            </TabsContent>
            <TabsContent value="stake">
              <StakeForm />
            </TabsContent>
            <TabsContent value="more">
              <MoreOptions />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
