use anchor_lang::prelude::*;
use anchor_spl::token::{
    Mint, 
    TokenAccount, 
    // CloseAccount, 
    // SetAuthority, 
    // Transfer
};

use crate::state::*;

#[derive(Accounts)]
#[instruction(
    the_swap_dao_bump: u8,
    swaa_bump: u8,
    swaa_token_mint_bump: u8,
    swaa_shard_mint_bump: u8,
)]
pub struct InitSwaa<'info> {
    // input
    #[account(mut)]
    pub creator: Signer<'info>,
    // pub nft_collection_id: Account<'info, Mint>,
    /// CHECK: it's fine
    pub nft_collection_id: AccountInfo<'info>,
    #[account(
        seeds = [b"WaaSaa!".as_ref()],
        bump = the_swap_dao_bump, 
    )]
    pub the_swap_dao: Account<'info, TheSwapDao>,

    // init settings
    #[account(
        init, 
        constraint = the_swap_dao.authority == creator.key(), // authentication: swaa must be created by authority of TheSwapDAO PDA account
        seeds = [ 
            b"new swaa!".as_ref(), 
            nft_collection_id.key().as_ref() 
        ],
        bump, 
        payer = creator, 
        space = 8 + std::mem::size_of::<Swaa>()
    )]
    pub swaa: Account<'info, Swaa>,

    // create shard NFT mint
    #[account(
        init, 
        seeds = [
            b"swaa-token".as_ref(), 
            nft_collection_id.key().as_ref()
        ],
        bump, 
        payer = creator, 
        mint::decimals = 9,
        mint::authority = creator,
        mint::freeze_authority = creator,
        // space = 8 + std::mem::size_of::<Swap>()
    )]
    pub swaa_token_mint: Account<'info, Mint>,

    // create shard NFT mint
    #[account(
        init, 
        seeds = [
            b"swaa-shard".as_ref(), 
            nft_collection_id.key().as_ref()
        ],
        bump, 
        payer = creator, 
        mint::decimals = 0,
        mint::authority = creator,
        mint::freeze_authority = creator,
        // space = 8 + std::mem::size_of::<Swap>()
    )]
    pub swaa_shard_mint: Account<'info, Mint>,

    // context
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
    /// CHECK: it's fine
    pub token_program: AccountInfo<'info>,
}