
import { useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

export default function WalletConnect() {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    const providerOptions = {};
    const web3Modal = new Web3Modal({ cacheProvider: true, providerOptions });
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  };

  return (
    <div className="text-center my-4">
      {account ? (
        <p>👛 Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button onClick={connectWallet} className="bg-[#b32e2e] text-white px-4 py-2 rounded-xl shadow-lg">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
