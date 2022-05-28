import * as anchor from "@project-serum/anchor";

import { 
  Connection,
  SystemProgram, 
  PublicKey, 
  Keypair, 
  LAMPORTS_PER_SOL, 
  Transaction, 
} from '@solana/web3.js';

export class Human {

  program;
  provider;
  connection;
  publicKey; 
  keyPair; 

  constructor(ctx) {
    // wallet
    this.keyPair = anchor.web3.Keypair.generate();
    this.publicKey = this.keyPair.publicKey;

    // context
    this.program = ctx.program;
    this.provider = ctx.provider;
    this.connection = ctx.provider.connection;
  }

  async airdrop (amt) { // amt in Lamports
    console.log('@airdrop')
    let provider = this.provider;

    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(this.publicKey, amt),
      "processed"
    );
  }

  async sendSolana (target, amt) { // amt in Lamports
    let provider = this.provider;

    console.log('@sendSolana')
    // perform main account funding
    await provider.send(
      ( () => {
        const tx = new Transaction();
        tx.add(
          SystemProgram.transfer({
            fromPubkey: this.publicKey,
            toPubkey: target,
            lamports: amt,
          }),
        );
        return tx;
      } )(),
      [ this.keyPair ]
    );
  }

  async getBalance () {
    return this.connection.getBalance(this.publicKey); 
  }

}