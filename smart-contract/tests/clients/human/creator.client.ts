import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import * as anchor from "@project-serum/anchor";
import {
  AccountInfo,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  MintInfo,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Human } from './human.client'
import { encode } from '../utils'

// export class AccountUtils {
//   conn: Connection;

//   constructor(conn: Connection) {
//     this.conn = conn;
//   }

export class CreatorClient extends Human { 

  constructor(ctx) {
    super(ctx);
  }

  // Get the_swap_dao ready. 
  async initTheSwapDao() {
    let program = this.program;

    const [the_swap_dao_pda, the_swap_dao_bump] = await PublicKey.findProgramAddress(
      [encode("WaaSaa!")],
      program.programId
    );

    await program.rpc.initTheSwapDao(
      the_swap_dao_bump, 
      { 
        accounts: {
          creator: this.publicKey,
          theSwapDao: the_swap_dao_pda, // NOTE: camelcase here is converted into snakecase in account definition
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
        signers: [ this.keyPair ],
      }, 
    );

    return await program.account.theSwapDaoSettings.fetch(the_swap_dao_pda);
  }

  async initSwaa(collection_id: Keypair) { // collection_id = candymachine
    let program = this.program;

    let collection_publicKey = collection_id.publicKey;
    
    const [the_swap_dao_pda, the_swap_dao_settings_bump] = await PublicKey.findProgramAddress(
      [encode("WaaSaa!")], 
      program.programId
    );

    const [swaa_settings_pda, swaa_settings_bump] = await PublicKey.findProgramAddress(
      [
        encode("swaa-settings"),
        collection_publicKey.toBytes(),
      ], 
      program.programId
    );

    const [swaa_pool_pda, swaa_pool_bump] = await PublicKey.findProgramAddress(
      [
        encode("swaa-pool"),
        collection_publicKey.toBytes(),
      ], 
      program.programId
    );

    const [swaa_token_mint_pda, swaa_token_mint_bump] = await PublicKey.findProgramAddress(
      [
        encode("swaa-token"),
        collection_publicKey.toBytes(),
      ], 
      program.programId
    );

    // have to use candymachine
    const [swaa_shard_mint_pda, swaa_shard_mint_bump] = await PublicKey.findProgramAddress(
      [
        encode("swaa-shard"),
        collection_publicKey.toBytes(),
      ], 
      program.programId
    );

    await program.rpc.initSwaa(
      the_swap_dao_settings_bump,
      swaa_settings_bump, 
      swaa_pool_bump,
      swaa_token_mint_pda,
      swaa_shard_mint_bump,
      {
        accounts: {
          // input
          creator: this.publicKey,
          nftCollectionId: collection_publicKey, 
          theSwapDao: the_swap_dao_pda,

          // init
          swaa: swaa_settings_pda,
          swaaPool: swaa_pool_pda,
          swaaTokenMint: swaa_token_mint_pda,
          swaaShardMint: swaa_shard_mint_pda,

          // misc:
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
        signers: [ this.keyPair ],
      }, 
    );

    return await program.account.swaaSettings.fetch(swaa_settings_pda);

  }

  
}
