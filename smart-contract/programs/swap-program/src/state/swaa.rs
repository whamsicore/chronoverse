use anchor_lang::prelude::*;
// use anchor_spl::token::{
//     Mint, 
//     TokenAccount, 
//     // CloseAccount, 
//     // SetAuthority, 
//     // Transfer
// };


// Swaps will accept deposits
#[account]
#[derive(Default)] // to help init infer how much space is required
pub struct Swaa {
    pub the_swap_dao: Pubkey,
    pub nft_collection_id: Pubkey,  // the nft mint allowed on this swap (32 bytes)
    pub pool_auth: Pubkey, // the creator of the swap (32 bytes)
    pub fee: u16, // fee for each swap (1 byte)
    pub nft_count: u64,
}