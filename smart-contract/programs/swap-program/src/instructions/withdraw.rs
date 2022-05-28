use anchor_lang::prelude::*;
use anchor_spl::token::{
    Mint, 
    TokenAccount, 
    // CloseAccount, 
    // SetAuthority, 
    Transfer
};

#[derive(Accounts)]
pub struct Withdraw<'info> {
    // input
    // -> swaa_shard nfts to be switched. 
    #[account(mut)] // use constraints to find the right swap. Maybe PDA?
    pub pool_acct: Account<'info, TokenAccount>, 

    #[account(mut)]
    pub owner: Signer<'info>,

    pub pool_nft_id: Account<'info, Mint>, // used to confirm they are of the same mint?

    // shard mint? 

    // misc:
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub token_program: AccountInfo<'info>,
}

impl<'info> Withdraw<'info> {
    // pub fn prep_transfer_to_pool(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        
    //     println!("@Deposit handler");

    //     let cpi_accounts = Transfer {
    //         from: self
    //             .depositor_nft_acct
    //             .to_account_info()
    //             .clone(),
    //         to: self.pool_acct.to_account_info().clone(),
    //         authority: self.initializer.to_account_info().clone(),
    //     };
        
    //     CpiContext::new(self.token_program.clone(), cpi_accounts)

    // }
}