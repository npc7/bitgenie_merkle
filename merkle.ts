import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

const tree = StandardMerkleTree.load(
  JSON.parse(fs.readFileSync("tree.json", "utf8"))
);

export const root = tree.root;

// (3)
console.log("Openzeppelin Merkle Root:", tree.root);
// (4)

const leaf = ["0xB470E9535A385DDAf81185a3164ec208c3492c47", "4321"];

export const proof = tree.getProof(leaf);
// const proof = [
//   "0xaa251285b79511cd0d7e8d56a69b8da3facd97076bdc2091aaa08c254774792f",
//   "0xd88f51eb0d5c2c9b91ee1c6243f5badeb3bd99d618bb14fcfbfed5d7418f444a",
//   "0x49a9170947f8b2a1ad33bfdfa423fd7523cc82f39c3df45aa087a9c90b777c7c",
//   "0xeff341ff56d5598155812980fec45ebf1247aad4994cbc7f912096644737ad31",
//   "0xfae4888874ac3c85dc8ad7b280cd6a68ad82e9eefb8ca2f5c3a25964b34e8183",
//   "0x962c42786f49441bd66f312909450aa965467058137e8ff5823177233d9fe71b",
//   "0x6576009294ac2745ca4dd7505444ba7957a6f4419a16966d2f053b4a61190fe1",
//   "0xd6c925e6cec0b9c75012b3c63b880899775aaf838263871a4b65940dd2cc0649",
//   "0xa200de3e8fc3e8a7c0e65bf7520658d1bf937da184b2771fc5aa530c197cb4cf",
// ];
console.log("Proof for 0x:", proof);
console.log("Verify proof:", tree.verify(leaf, proof)); // 应为 true
