# Contract Design

AgriStack Pool follows the three-part Soroban guide:

1. Struct + impl: `contract/src/lib.rs`
2. Storage: `contract/src/storage.rs`
3. Errors + types: `contract/src/errors.rs` and `contract/src/types.rs`

## Domain API

- `open_input_pool`: open a input pool.
- `contribute_input_fund`: transfer XLM SAC into contract escrow.
- `confirm_supplier_ready`: admin/verifier records score and status.
- `release_supplier_payment`: transfer approved funds out of contract escrow.

Storage TTL is extended for both instance and persistent keys.
