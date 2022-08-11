/* eslint-disable no-undef */
Moralis.Cloud.define("get_totalAmount", async (request) => {
  const abi = [
    {
      type: "constructor",
      stateMutability: "nonpayable",
      inputs: [
        { type: "address", name: "_ido", internalType: "contract IERC20" },
        {
          type: "address",
          name: "_purchaseToken",
          internalType: "contract IERC20",
        },
        { type: "uint256", name: "_idoPrice", internalType: "uint256" },
        { type: "uint256", name: "_purchaseCap", internalType: "uint256" },
        { type: "uint256", name: "_raisingAmount", internalType: "uint256" },
        { type: "uint256", name: "_startTime", internalType: "uint256" },
        { type: "uint256", name: "_endTime", internalType: "uint256" },
      ],
    },
    {
      type: "event",
      name: "Claimed",
      inputs: [
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Deposited",
      inputs: [
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "IdoPriceChanged",
      inputs: [
        {
          type: "uint256",
          name: "idoPrice",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          type: "address",
          name: "previousOwner",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "newOwner",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Paused",
      inputs: [
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "PurchaseCapChanged",
      inputs: [
        {
          type: "uint256",
          name: "purchaseCap",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Purchased",
      inputs: [
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RaisingAmountChanged",
      inputs: [
        {
          type: "uint256",
          name: "raisingAmount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RoleAdminChanged",
      inputs: [
        {
          type: "bytes32",
          name: "role",
          internalType: "bytes32",
          indexed: true,
        },
        {
          type: "bytes32",
          name: "previousAdminRole",
          internalType: "bytes32",
          indexed: true,
        },
        {
          type: "bytes32",
          name: "newAdminRole",
          internalType: "bytes32",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RoleGranted",
      inputs: [
        {
          type: "bytes32",
          name: "role",
          internalType: "bytes32",
          indexed: true,
        },
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RoleRevoked",
      inputs: [
        {
          type: "bytes32",
          name: "role",
          internalType: "bytes32",
          indexed: true,
        },
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Swept",
      inputs: [
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Unpaused",
      inputs: [
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "WhitelistAdded",
      inputs: [
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "WhitelistRemoved",
      inputs: [
        {
          type: "address",
          name: "account",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Withdrawn",
      inputs: [
        {
          type: "address",
          name: "sender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
      name: "DEFAULT_ADMIN_ROLE",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
      name: "OPERATOR_ROLE",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "acceptOwnership",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "addOperator",
      inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "addWhitelist",
      inputs: [
        { type: "address[]", name: "accounts", internalType: "address[]" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "checkOperator",
      inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "claim",
      inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "claimedAmounts",
      inputs: [{ type: "address", name: "", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "depositTokens",
      inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "endTime",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
      name: "getRoleAdmin",
      inputs: [{ type: "bytes32", name: "role", internalType: "bytes32" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "grantRole",
      inputs: [
        { type: "bytes32", name: "role", internalType: "bytes32" },
        { type: "address", name: "account", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "hasRole",
      inputs: [
        { type: "bytes32", name: "role", internalType: "bytes32" },
        { type: "address", name: "account", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "contract IERC20" }],
      name: "ido",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "idoPrice",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "newOwner",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "owner",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "pause",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "paused",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "permitAndDepositTokens",
      inputs: [
        { type: "uint256", name: "amount", internalType: "uint256" },
        {
          type: "tuple",
          name: "permitOptions",
          internalType: "struct IDOSale.PermitRequest",
          components: [
            { type: "uint256", name: "nonce", internalType: "uint256" },
            { type: "uint256", name: "deadline", internalType: "uint256" },
            { type: "uint8", name: "v", internalType: "uint8" },
            { type: "bytes32", name: "r", internalType: "bytes32" },
            { type: "bytes32", name: "s", internalType: "bytes32" },
          ],
        },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "permitAndPurchase",
      inputs: [
        { type: "uint256", name: "amount", internalType: "uint256" },
        {
          type: "tuple",
          name: "permitOptions",
          internalType: "struct IDOSale.PermitRequest",
          components: [
            { type: "uint256", name: "nonce", internalType: "uint256" },
            { type: "uint256", name: "deadline", internalType: "uint256" },
            { type: "uint8", name: "v", internalType: "uint8" },
            { type: "bytes32", name: "r", internalType: "bytes32" },
            { type: "bytes32", name: "s", internalType: "bytes32" },
          ],
        },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "purchase",
      inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "purchaseCap",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        {
          type: "tuple[]",
          name: "",
          internalType: "struct IDOSale.Purchase[]",
          components: [
            { type: "address", name: "account", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
          ],
        },
      ],
      name: "purchaseHistory",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "contract IERC20" }],
      name: "purchaseToken",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "purchasedAmounts",
      inputs: [{ type: "address", name: "", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "raisingAmount",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "removeOperator",
      inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "removeWhitelist",
      inputs: [
        { type: "address[]", name: "accounts", internalType: "address[]" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "renounceOwnership",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "renounceRole",
      inputs: [
        { type: "bytes32", name: "role", internalType: "bytes32" },
        { type: "address", name: "account", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "revokeRole",
      inputs: [
        { type: "bytes32", name: "role", internalType: "bytes32" },
        { type: "address", name: "account", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "setIdoPrice",
      inputs: [{ type: "uint256", name: "_idoPrice", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "setPurchaseCap",
      inputs: [
        { type: "uint256", name: "_purchaseCap", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "setRaisingAmount",
      inputs: [
        { type: "uint256", name: "_raisingAmount", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "startTime",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "supportsInterface",
      inputs: [{ type: "bytes4", name: "interfaceId", internalType: "bytes4" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "sweep",
      inputs: [{ type: "address", name: "to", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "totalPurchasedAmount",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "transferOwnership",
      inputs: [{ type: "address", name: "_newOwner", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "unpause",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "whitelist",
      inputs: [{ type: "address", name: "", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address[]", name: "", internalType: "address[]" }],
      name: "whitelistedUsers",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "withdraw",
      inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    },
  ];

  web3 = new Moralis.Web3(
    new Moralis.Web3.providers.HttpProvider("https://mainnet-rpc.brisescan.com")
  );
  const contract = new web3.eth.Contract(
    abi,
    "0x030309Bcff6c59beC2B09458E063bc8E1b1A0546"
  );
  const total = await contract.methods
    .totalPurchasedAmount()
    .call()
    .catch((err) => {
      const logger1 = Moralis.Cloud.getLogger();
      logger1.info(JSON.stringify(err));
    });
  return total;
});
