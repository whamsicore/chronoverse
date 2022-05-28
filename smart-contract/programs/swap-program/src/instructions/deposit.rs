use anchor_lang::prelude::*;
// use std::str::FromStr;
// use metaplex_token_metadata::state::Metadata;
use anchor_spl::token::{
    // self,
    Mint, 
    // Token,
    TokenAccount, 
    // CloseAccount, 
    // SetAuthority, 
    Transfer
};
use crate::state::*;

// Overview: User deposits an NFT into a swap pool
// Token: They get a IOU token, 
// Accounts: whose associate account will accrue governance tokens continuously. 
// Claim: IOU Token holders can claim at any time. Or when the IOU token is burnt it is all retrieved
#[derive(Accounts)]
#[instruction(pool_acct_bump: u8, pool_auth_bump: u8, )]
pub struct Deposit<'info> {
    // pool account where the deposit will go into. 
    // #[account(mut)] // use constraints to find the right swap. Maybe PDA?
    // pub pool_acct: Account<'info, TokenAccount>, 
    
    pub the_swap_dao: Box<Account<'info, TheSwapDao>>,

    // todo: check this
    #[account(mut, has_one = the_swap_dao)]
    pub swaa: Account<'info, Swaa>,

    #[account(mut)]
    pub depositor: Signer<'info>,
    pub depositor_nft_mint: Box<Account<'info, Mint>>, 
    #[account(mut)]
    pub depositor_nft_acct: Account<'info, TokenAccount>, 

    // #[account(mut)] // has to be of the same mint
    
    /// CHECK:
    #[account(seeds = [swaa.key().as_ref()], bump = pool_auth_bump)]
    pub pool_auth: AccountInfo<'info>,

    // // this is where the NFT will go
    #[account(
        init_if_needed, 
        seeds = [
            b"pool_space".as_ref(),
            // swaa.key().as_ref(),
            // depositor_nft_mint.key().as_ref(),
        ],
        bump,
        token::mint = depositor_nft_mint,
        token::authority = pool_auth,
        payer = depositor
    )]
    pub pool_acct: Account<'info, TokenAccount>,


    // misc:
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub token_program: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,

}

impl<'info> Deposit<'info> {
    // pub fn prep_transfer_to_pool(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        
    //     println!("@Deposit handler");

    //     let cpi_accounts = Transfer {
    //         from: self
    //             .depositor_nft_acct
    //             .to_account_info()
    //             .clone(),
    //         to: self.pool_acct.to_account_info().clone(),
    //         authority: self.depositor.to_account_info().clone(),
    //     };
        
    //     CpiContext::new(self.token_program.clone(), cpi_accounts)

    // }

    fn assert_valid_collection(ctx: &Context<Deposit>) -> Result<()> {
        // let bank = &*ctx.accounts.bank;
        // // let mint = &*ctx.accounts.gem_mint;
        
        // // let target_collection = &*ctx.accounts.gem_mint; // this has to be the collection_id of the pool

        // let pool_id = ctx.accounts.swaa.nft_collection_id; // this has to be the collection_id of the pool
        // let remaining_accs = &mut ctx.remaining_accounts.iter();

        // let metadata_info = next_account_info(remaining_accs)?; // from read only
        

        // // verify metadata is legit
        // let metadata = assert_valid_metadata(metadata_info, pool_id)?;

        // // metaplex constraints this to max 5, so won't go crazy on compute
        // // (empirical testing showed there's practically 0 diff between stopping at 0th and 5th creator)
        // for creator in &metadata.data.creators.unwrap() {
        //     // verify creator actually signed off on this nft
        //     if !creator.verified { // this is the candy machine
        //         continue;
        //     }

        //     // we can't use an assert_eq statement, we want to catch this error and continue along to creator testing
        //     if creator != target_collection {
        //         return Err(error!(ErrorCode::NotWhitelisted));
        //     }

        // }

        Ok(())
    }

    // fn assert_valid_metadata(
    //     nft_metadata: &AccountInfo,
    //     nft_mint: &Pubkey,
    // ) -> core::result::Result<Metadata, ProgramError> {
    //     let metadata_program = Pubkey::from_str("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s").unwrap();

    //     // 1 verify the owner of the account is metaplex's metadata program
    //     assert_eq!(nft_metadata.owner, &metadata_program);

    //     // 2 verify the PDA seeds match
    //     let seed = &[
    //         b"metadata".as_ref(),
    //         metadata_program.as_ref(),
    //         nft_mint.as_ref(),
    //     ];

    //     let (metadata_addr, _bump) = Pubkey::find_program_address(seed, &metadata_program);
    //     assert_eq!(metadata_addr, nft_metadata.key());

    //     Metadata::from_account_info(nft_metadata)
    // }
}