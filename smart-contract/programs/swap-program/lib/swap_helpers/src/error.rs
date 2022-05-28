//! Module provide program defined errors

use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    // 6000
    #[msg("Some string variable is longer than allowed")]
    StringIsTooLong,
    // 6001
    #[msg("TestError")]
    TestError,
    // 6002
    #[msg("The deposit NFT is not of the same mint!")]
    InvalidDeposit,
    // 6003
    // 6004
    // 6005
    // 6006
    // 6007
    // 6008
    // 6009
    // 6010
}
