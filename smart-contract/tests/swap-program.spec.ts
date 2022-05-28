import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SwapProgram } from "../target/types/swap_program";
import { assert } from "chai"; 
import { 
  PublicKey, 
  SystemProgram, 
  Transaction, 
  Connection, 
  Commitment,
  LAMPORTS_PER_SOL 
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, 
  Token, 
  createMint, 
  getMint,
  mintTo, 
  getAccount, 
  createAccount,
} from "@solana/spl-token";

import { // custom
  CreatorClient, 
  UserClient, 
  SwaaClient,
  CandyMachineClient,
  NodeWallet,
} from "./clients"

import { createMetadata } from './metaplex'; // custom

describe("Setup", () => {
  // Configure the client to use the local cluster.

  // anchor.setProvider(anchor.Provider.env());

  // const _provider = anchor.Provider.env();
  // const connection = _provider.connection;

  const _provider = anchor.Provider.env();
  const swaa = new SwaaClient(_provider.connection, _provider.wallet as any);
  const nw = new NodeWallet(_provider.connection, _provider.wallet as any);
  
  // const wallet = NodeWallet.local(); // q: what does NodeWallet.local() do?
  // const wallet = _provider.wallet; // both this and above works
  // const options = anchor.Provider.defaultOptions();

  // const provider = new anchor.Provider(connection, wallet, options);
  
  // const nw = new NodeWallet(connection, wallet as any);

  // anchor.setProvider(anchor.Provider.local()); // 
  // anchor.setProvider(provider);

  // const program = anchor.workspace.SwapProgram as Program<SwapProgram>;
  
  // const ctx = {
  //   provider,
  //   program,
  // }

  // // console.log("testing ${ctx}=", ctx);

  // let the = {
  //   creator: new CreatorClient(ctx),
  //   user: [
  //     new UserClient(ctx),
  //   ],
  // }

  // // NFTs
  // // let nftCollTwoPubkey; 
  // let Collection = [
  //   {
  //     publicKey: null, // Collection[0].publicKey
  //   }
  // ]

  let randomWallet: Keypair; //used to test bad transactions with wrong account passed in
  let swaaManager: Keypair;
  let depositor: Keypair;
  let swapper: Keypair;

  before('configures accounts', async () => {
    randomWallet = await nw.createFundedWallet(100 * LAMPORTS_PER_SOL);
    swaaManager = await nw.createFundedWallet(100 * LAMPORTS_PER_SOL);
    depositor = await nw.createFundedWallet(100 * LAMPORTS_PER_SOL);
    swapper = await nw.createFundedWallet(100 * LAMPORTS_PER_SOL);
  });

  it("initializes the swap DAO", async () => {

  });


  // it("initializes creator accounts", async () => {
    
  //   // const airdropAmt = 1 * LAMPORTS_PER_SOL;
  //   // const sendAmt = 0.1 * LAMPORTS_PER_SOL;
    
  //   // await the.creator.airdrop(airdropAmt);
  //   // assert.equal(await the.creator.getBalance(), airdropAmt); 

  //   // await the.creator.sendSolana(the.user[0].publicKey, sendAmt);
  //   // assert.equal(await the.user[0].getBalance(), sendAmt); 

  //   // //  Create NFT collection (zz: actually a single mint, which is a single NFT)
  //   // Collection[0].publicKey = await createMint(
  //   //   provider.connection,
  //   //   the.creator.keyPair, // payer: signer
  //   //   the.creator.publicKey, // authority: PublicKey
  //   //   null, // freeze authority
  //   //   0,
  //   //   // TOKEN_PROGRAM_ID
  //   // );

  //   // Collection[0].mintAcct = await getMint(
  //   //     provider.connection,
  //   //     Collection[0].publicKey,
  //   // );

  //   // give user some NFT
  //   // Depositor.collection[0].publicKey = await createAccount(
  //   //   provider.connection, //   connection: Connection, 
  //   //   the.creator.keyPair, //   payer: Signer, 
  //   //   Collection[0].publicKey, //   mint: PublicKey, 
  //   //   Depositor.mainAcct.publicKey, //   owner: PublicKey
  //   // );
  //   // // console.log("Depositor.collection[0].publicKey:", Depositor.collection[0].publicKey);

  //   // // assert.equal(swaaTokenMint.address, swaa_token_mint_pda)
  //   // // assert.equal(swaaShardMint.address, swaa_shard_mint_pda)

  //   // // console.log("swaaShardMint:", swaaShardMint);
  // });

  // it("initializes TheSwapDAO", async () => {
  //   the.swapDao.settings = await the.creator.initTheSwapDao();
    
  //   assert.ok(the.swapDao.settings.authority == the.creator.publicKey.toString());
  //   assert.ok(the.swapDao.settings.defaultFee == 20);
  // });

  // // it("Minted TSD gov. tokens", async () => {
  // //   // mint gov

  // // });


  it("initializes a Swaa", async () => {
    // Objective:
    // - Create a Swaa under Collection[0].publicKey
    // - Create a new NFT mint with GovToken

    // let test = new PublicKey(Collection[0].publicKey);
    // let candyMachineId = anchor.web3.Keypair.generate(); // temp
    // let swaaSettings = await the.creator.initSwaa(candyMachineId);

    // assert.ok(swaaSettings.authority == the.creator.publicKey.toString());
    // assert.ok(swaaSettings.poolNftId == candyMachineId.publicKey);
    // assert.ok(swaaSettings.fee == 20); // default

    // get Governance token
    // let swaaTokenMint = await getMint(
    //     provider.connection,
    //     swaa_token_mint_pda,
    // );

    // // get NFT Deposit Shards
    // let swaaShardMint = await getMint(
    //     provider.connection,
    //     swaa_shard_mint_pda,
    // );

    // assert.equal(swaaTokenMint.address, swaa_token_mint_pda)
    // assert.equal(swaaShardMint.address, swaa_shard_mint_pda)

    // console.log("swaaShardMint:", swaaShardMint);
    // console.log("swaaTokenMint:", swaaTokenMint);
    // console.log("swaaShardMint.publicKey:", swaaShardMint.publicKey);
  });

  // describe("Deposits", () => {

  //   it("First depositor made an NFT deposit", async () => {
  //     // objective: 
  //     // - A depositor receives an NFT from Collection[0].publicKey. 
  //     // - (assuming they already have money)
  //     // - They send a deposit instruction
  //     // - They receive an NFT (minted by program, deposited in their account)

  //     // Format:
  //     // (
  //     //   connection: Connection, 
  //     //   payer: Signer, 
  //     //   mint: PublicKey, 
  //     //   destination: PublicKey, 
  //     //   authority: PublicKey | Signer, 
  //     //   amount: number | bigint, 
  //     // )

  //     await mintTo(
  //       provider.connection,
  //       the.creator, // payer
  //       Collection[0].publicKey, // mint
  //       Depositor.collection[0].publicKey, // destination
  //       the.creator, // authority
  //       1, // amount
  //     ); // returns txn signature

  //     Depositor.collection[0].acct = await getAccount(
  //       provider.connection, // connection: Connection, 
  //       Depositor.collection[0].publicKey , // address: PublicKey
  //     );

  //     // console.log("Depositor.collection[0].acct.amount", Number(Depositor.collection[0].acct.amount));
  //     assert.ok(Number(Depositor.collection[0].acct.amount) == 1);

  //     // Actually make the deposit
  //     // - Depositor will now make an RPC call. 

  //     const [swaa_pool_pda, swaa_pool_bump] = await PublicKey.findProgramAddress(
  //       [
  //         Buffer.from(anchor.utils.bytes.utf8.encode("swaa-pool")),
  //         Collection[0].publicKeyInBytes,
  //       ], 
  //       program.programId
  //     );

  //     await program.rpc.deposit({
  //         accounts: {
  //           // input
  //           poolAcct: swaa_pool_pda, // swaa collection's PDA
  //           initializer: Depositor.mainAcct, // keypair

  //           // res
  //           depositorMintAcct: Depositor.collection[0].publicKey,
  //           poolMint: 

  //           // misc:
  //           // systemProgram: anchor.web3.SystemProgram.programId, // zz: will need for minting shard
  //           // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
  //           tokenProgram: TOKEN_PROGRAM_ID,
  //         },
  //         signers: [ the.creator ],
  //       }, 
  //     );

  //   });

  //   // it("First depositor makes a withdrawal", async () => {
  //   //   // objective: 
  //   //   // - A depositor receives an NFT from Collection[0].publicKey. 
  //   //   // - (assuming they already have money)
  //   //   // - They send a deposit instruction
  //   //   // - They receive an NFT (minted by program, deposited in their account)


  //   //   // console.log("Deposits have been made.");
  //   // });



  //   describe("Withdrawals", () => {
      




  //     describe("Swaps", () => {
  //       // it("First Swapper made an NFT swap with first pool", async () => {
          

  //       //   // console.log("Deposits have been made.");
  //       // });





  //     }); // describe swaps
  //   }); // describe withdrawals
  // }); // describe deposits
}); // describe deployment
