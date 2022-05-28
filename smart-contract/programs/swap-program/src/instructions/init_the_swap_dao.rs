use anchor_lang::prelude::*;
// use anchor_spl::token::{
//     Mint, 
//     TokenAccount, 
//     // CloseAccount, 
//     // SetAuthority, 
//     // Transfer
// };

use crate::state::*;

#[derive(Accounts)]
#[instruction(the_swap_dao_settings_bump: u8)]
pub struct InitTheSwapDao<'info> {
    #[account(mut)]
    pub creator: Signer<'info>,
    // pub mint: Account<'info, Mint>,
    #[account(
        init,
        seeds = [b"WaaSaa!".as_ref()],
        bump,
        payer = creator,
        space = 32+8+8,
    )]
    pub the_swap_dao: Account<'info, TheSwapDao>,
    // pub the_swap_dao_settings: Account<'info, TheSwapDaoSettings>, // this should be a PDA, for linking

    // misc
    pub system_program: Program<'info, System>,
    /// CHECK: Not reading or writing to this.
    pub token_program: AccountInfo<'info>,
}

impl<'info> InitTheSwapDao<'info> {
    
    // todo:
    // pub fn assert_first_init(ctx: &Context<InitTheSwapDao>) -> Result<()> {
    //     // let bank = &*ctx.accounts.bank;
    //     // let mint = &*ctx.accounts.gem_mint;
        
    //     // let target_collection = &*ctx.accounts.gem_mint; // this has to be the collection_id of the pool

    //     let seed = &[
    //         b"WaaSaa!".as_ref(),
    //         ctx.program_id,
    //     ];

    //     // check of pre-existing account has been set
    //     let (the_swap_dao_pda, _bump) = Pubkey::find_program_address(seed, ctx.program_id)

    //     if 


    //     Ok(())
    // }
}


