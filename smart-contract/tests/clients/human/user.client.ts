import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import {
  AccountInfo,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  MintInfo,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Human } from './human.client'

export class UserClient extends Human { 
  // // @ts-ignore
  // wallet: anchor.Wallet;
  // provider!: anchor.Provider;
  // bankProgram!: anchor.Program<GemBank>;

  constructor(ctx) {
    super(ctx);
  }

  
}
