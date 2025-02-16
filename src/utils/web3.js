import { ethers } from "ethers";

let provider;
if (typeof window !== "undefined") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
}

export const getAccount = async () => {
    if (!provider) return null;
    const accounts = await provider.send("eth_requestAccounts", []);
    return accounts[0]; // Return first connected wallet
};

