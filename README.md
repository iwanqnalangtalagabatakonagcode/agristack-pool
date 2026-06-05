# AgriStack Pool

A farmer input-pooling escrow for seed, fertilizer, and shared purchase orders with transparent cooperative settlement.

Former project name: Agricultural Input Pooling Cooperative

## Problem

Farmers get weaker prices when buying inputs alone, while pooled orders are hard to reconcile. AgriStack Pool records member contributions, supplier readiness, and release events on Stellar.

## How It Works

1. A user connects a Freighter wallet on Stellar testnet.
2. The app opens a input pool in a Soroban Rust contract.
3. Funds move into the contract using the Stellar XLM SAC token interface.
4. A verifier records the project-specific score and status.
5. The contract releases payment to the approved recipient and leaves an auditable event trail.

## How It Uses Stellar

- Stellar testnet for fast, low-cost payment settlement.
- Freighter wallet for user-controlled signing.
- Soroban Rust smart contract for bulk-input cooperative escrow.
- XLM SAC for live testnet escrow transfers.
- Soroban RPC for simulation, submission, and finality.
- Express API exposes an x402-style payment quote route.
- Soroswap is documented as the future swap path when cooperatives need to convert XLM into USDC or supplier-preferred assets.

## Track

Track 2 Financial Inclusion & Everyday Payments

## Tech Stack

- Framework: Next.js 15 + React 19 + TypeScript
- Backend: Express + TypeScript
- Database: Prisma + SQLite
- Smart contract: Rust + Soroban SDK
- Stellar SDK: @stellar/stellar-sdk
- Wallet: Freighter
- Network: Stellar testnet

## Rust Contract API

- `open_input_pool(id, owner, target)`
- `contribute_input_fund(id, from, amount)`
- `confirm_supplier_ready(id, score, status)`
- `release_supplier_payment(id, to, amount)`
- `get_record(id)`
- `total_locked()`

## Setup & Run

```bash
git clone https://github.com/iwanqnalangtalagabatakonagcode/agristack-pool.git
cd agristack-pool
npm install
npm run db:generate
npm --workspace backend run db:migrate
npm run db:seed
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:4000

## Contract

```bash
cd contract
cargo test
stellar contract build
```

Deploy after building:

```bash
stellar contract deploy --wasm target/wasm32v1-none/release/agristack_pool_contract.wasm --source alice --network testnet -- --admin alice --asset CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC --project_name "AgriStack Pool"
```

## Network Details

- Network: Stellar testnet
- RPC URL: https://soroban-testnet.stellar.org
- Horizon URL: https://horizon-testnet.stellar.org
- XLM SAC: CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC
- USDC SAC: CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA
- Contract ID: CBZDDYAJU3A3ULMGSPWS4B7SQH2K7LEYW735H5O4AM3TTKYNXRJP2KF2

## Docs

- docs/Submission_Guideliness.md
- docs/stellar-fullstack-cheatsheet.md
- docs/dev_setup.md
- docs/contract.md
- docs/api.md

## Originality

This is original StellarX Philippines hackathon work. It uses open-source Stellar SDKs, Soroban Rust SDK, AI-assisted development, and disclosed ecosystem integration paths. It is not a barely modified template.

## Team

- loaferss - @iwanqnalangtalagabatakonagcode

## License

MIT
