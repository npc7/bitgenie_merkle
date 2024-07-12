import { contract } from "./contract";

// update claimed amount
async function updateClaimed(user: any) {
  try {
    const tx = await contract.updateClaimed(user, false);
    console.log("Transaction sent:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt.transactionHash);
  } catch (error) {
    console.error("Error updating claimed amount:", error);
  }
}

const user = "0xB470E9535A385DDAf81185a3164ec208c3492c47";
updateClaimed(user);
