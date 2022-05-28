use anchor_lang::prelude::*;
use anchor_spl::token;

use swap_helpers::{error::ErrorCode};
// use anchor_spl::token::TokenAccount;
use instructions::*;
pub mod instructions;
pub mod state;
// use spl_token::instruction::AuthorityType;

declare_id!("D5a8ju8qVFo6sVL2ShKZ5Bf4HQySmLX76RQ1TTaKgyRH");

// This program will handle everything
#[program]
pub mod swap_program {
    use super::*;

    // Constructor. Init the main DAO
    pub fn init_the_swap_dao(
        ctx: Context<InitTheSwapDao>, 
        _the_swap_dao_bump: u8
    ) -> Result<()> {
        let the_swap_dao_settings = &mut ctx.accounts.the_swap_dao; // initialize the controlling Swap DAO

        // todo: check if initialized
        the_swap_dao_settings.authority = ctx.accounts.creator.key();
        let default_fee = (0.02 * u16::pow(10, 3) as f32) as u16;
        the_swap_dao_settings.default_fee = default_fee; // 0.02 solana = 20  milli-solana

        Ok(())
    }

    // todo: add update_the_swap_dao endpoint, for making updates

    pub fn init_swaa(
        ctx: Context<InitSwaa>, 
        _the_swap_dao_bump: u8,
        _swaa_bump: u8,
        _swaa_token_mint_bump: u8,
        _swaa_shard_mint_bump: u8,
    ) -> Result<()> {
        // -> initialize a single swap
        // -> Create. Init a new Swap

        let swaa = &mut ctx.accounts.swaa;
        // todo: logic for 
        // // create signer of pool actions
        // #[account(
        //     init, 
        //     seeds = [swaa.key().as_ref(), b"pool_auth".as_ref()], 
        //     bump,
        //     payer = creator, 
        // )]
        // pub pool_auth: AccountInfo<'info>,



        // if not set
        // swaa_settings.authority = ctx.accounts.creator.key();
        // swaa_settings.pool_nft_id = ctx.accounts.nft_collection_id.key();
        // swaa_settings.fee = ctx.accounts.the_swap_dao_settings.default_fee;
        // nft_mint: Pubkey,  // the nft mint allowed on this swap (32 bytes)
        // authority: Pubkey, // the creator of the swap (32 bytes)
        // fee: u8, 

        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, _pool_acct_bump: u8) -> Result<()> {
        // -> Input NFT
        // -> Verify NFT by asserting it's from the same collection
        // -> Take NFT and generate pool-shard(s). (Create it first) 
        
        println!("@Deposit entry");

        
        // ctx.accounts.verify();
        
        // get from metadata
        // let depositor_nft_id =  

        // // check token metadata
        // if depositor_nft_id != pool_nft_id {
        //     return Err(error!(ErrorCode::InvalidDeposit));
        // }

        // // actual transfer
        // token::transfer(
        //     ctx.accounts.prep_transfer_to_pool(),
        //     1,
        // )?;

        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>) -> Result<()> {
        // -> Input shard(s) accts
        // - Verify shards and owner
        // -> Input NFT choice from pool
        // - Verify input NFT choice from pool, that it belongs to pool
        // -> Burn shards 
        // -> Transfer out NFT from pool
        // -> Todo: make payment. 
        
        println!("@Deposit entry");

        let pool_nft_id = ctx.accounts.pool_nft_id.key();
        
        // get from metadata
        // let depositor_nft_id =  

        // // check token metadata
        // if depositor_nft_id != pool_nft_id {
        //     return Err(error!(ErrorCode::InvalidDeposit));
        // }

        // // actual transfer
        // token::transfer(
        //     ctx.accounts.prep_transfer_to_pool(),
        //     1,
        // )?;

        Ok(())
    }

    // pub fn exec_swap(ctx: Context<ExecSwap>, give: Pubkey, take: Pubkey) -> Result<()> {
    //     // -> Input pool_id
    //     // -> Input unknown number of accounts. Must be even number. First half must belong to user, the other half belong to the swap. 
    //     // -> Verify deposits are of the same collection. 
    //     // -> Make the swap. 
    //     // -> Rewards
    //     // - Distribute fees to all shards
    //     // - Generate token rewards to all shards. 

    //     Ok(())
    // }
}