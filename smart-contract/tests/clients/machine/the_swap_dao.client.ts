import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import {
  AccountInfo,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  MintInfo,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

export class SwaaClient { 
  // // @ts-ignore
  // wallet: anchor.Wallet;
  // provider!: anchor.Provider;
  // bankProgram!: anchor.Program<GemBank>;

  // constructor(
  //   conn: Connection,
  //   // @ts-ignore
  //   wallet: anchor.Wallet,
  //   idl?: Idl,
  //   programId?: PublicKey
  // ) {
  //   super(conn);
  //   this.wallet = wallet;
  //   this.setProvider();
  //   this.setBankProgram(idl, programId);
  // }

  // async initSwaa(
  //   swaa: Keypair,
  //   swaaManager: PublicKey | Keypair,
  //   payer: PublicKey | Keypair
  // ) {
  //   const signers = [bank];
  //   if (isKp(bankManager)) signers.push(<Keypair>bankManager);

  //   console.log('starting bank at', bank.publicKey.toBase58());
    
  //   const txSig = await this.bankProgram.rpc.initSwaa({
  //     accounts: {
  //       bank: bank.publicKey,
  //       bankManager: isKp(bankManager)
  //         ? (<Keypair>bankManager).publicKey
  //         : bankManager,
  //       payer: isKp(payer) ? (<Keypair>payer).publicKey : payer,
  //       systemProgram: SystemProgram.programId,
  //     },
  //     signers,
  //   });

  //   return { txSig };
  // }

}
