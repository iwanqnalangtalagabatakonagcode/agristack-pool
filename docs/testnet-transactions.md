# Testnet Transaction Verification

Test date: 2026-06-05

## Summary

AgriStack Pool was deployed and tested on Stellar testnet with the local Stellar CLI identity `alice`.

## Deployment

- Contract ID: `CBZDDYAJU3A3ULMGSPWS4B7SQH2K7LEYW735H5O4AM3TTKYNXRJP2KF2`
- Deploy transaction: https://stellar.expert/explorer/testnet/tx/cd637a7b5dc907b4ac226b5f891ce1bd00fe3837c9d56bdc038c80ee298449bd
- Lab contract page: https://lab.stellar.org/r/testnet/contract/CBZDDYAJU3A3ULMGSPWS4B7SQH2K7LEYW735H5O4AM3TTKYNXRJP2KF2

## Transaction Flow Tested

Record ID: `tx-agristack-001`

1. `open_input_pool` opened the record.
   Transaction: https://stellar.expert/explorer/testnet/tx/5e1a43a8da637402f78cf6f22fd7a9709c430f58b30b0d704211b57249763a65
2. `contribute_input_fund` funded escrow with `500000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/123eed0360b985eddcc9be3ee8254ecfd8a2643c77848daccbbf632dd8b63aeb
3. `confirm_supplier_ready` recorded score `97` and status `supplier_ready`.
   Transaction: https://stellar.expert/explorer/testnet/tx/e88b14bcd3fa742aad2b44d5c1357a13df83de6d9d216765446c8a4326adbe53
4. `release_supplier_payment` released `250000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/19bbeba9051b09be017cb5de12727f39ed742d6720a9e817e3e955a5558f8a67
5. `total_locked` returned `250000`.
6. `get_record` returned `funded=500000`, `released=250000`, and `status=released`.

## Result

Passed. The contract accepted signed writes, moved testnet XLM SAC through the token interface, emitted events, and returned the expected final state.
