import { prisma } from "./prisma.js";

await prisma.paymentRecord.upsert({
  where: { externalId: "demo-agristack-pool" },
  update: {},
  create: {
    externalId: "demo-agristack-pool",
    owner: "GDEMO",
    target: 1000000,
    status: "seeded",
    projectName: "AgriStack Pool",
  },
});

console.log("Seeded AgriStack Pool");
await prisma.$disconnect();
