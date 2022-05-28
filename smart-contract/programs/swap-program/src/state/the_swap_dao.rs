use anchor_lang::prelude::*;
// use anchor_spl::token::{
//     Mint, 
//     TokenAccount, 
//     // CloseAccount, 
//     // SetAuthority, 
//     // Transfer
// };

// will own all the swaps created.
#[account]
#[derive(Default)] // to help init infer how much space is required
pub struct TheSwapDao {
    pub authority: Pubkey, // the creator of the swap (32 bytes)
    pub default_fee: u16,   // default fee
    pub swaa_count: u32, 
}