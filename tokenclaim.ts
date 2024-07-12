import { proof } from "./merkle";
import { contract } from "./contract";

// Claim function
async function claimTokens(proof: any, amount: any) {
  try {
    const tx = await contract.claim(proof, amount);
    console.log("Transaction sent:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt.transactionHash);
  } catch (error) {
    console.error("Error claiming tokens:", error);
  }
}

//proof is

const userAmount = 4321;
// Execute the claim
claimTokens(proof, userAmount);
