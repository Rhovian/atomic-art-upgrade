export type AtomicArtUpgrades = {
  "version": "0.1.0",
  "name": "atomic_art_upgrades",
  "instructions": [
    {
      "name": "registerUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "CreateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpdateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "relinquishUpdateAuthority",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newUpdateAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "upgradeMetadata",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "upgradeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "upgradeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "The bump nonce for the collections PDA (1)."
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "empty",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ],
  "types": [
    {
      "name": "CreateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UpdateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UriExceedsMaxLength",
      "msg": "URI exceeds max length"
    },
    {
      "code": 6001,
      "name": "PayerMustBeUpdateAuthority",
      "msg": "Payer must be update authority"
    },
    {
      "code": 6002,
      "name": "InvalidMetadataAccount",
      "msg": "Invalid Metadata Account"
    },
    {
      "code": 6003,
      "name": "InvalidMetadataNameField",
      "msg": "Invalid Metadata Name Field"
    }
  ]
};

export const IDL: AtomicArtUpgrades = {
  "version": "0.1.0",
  "name": "atomic_art_upgrades",
  "instructions": [
    {
      "name": "registerUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "CreateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpdateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "relinquishUpdateAuthority",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newUpdateAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "upgradeMetadata",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "upgradeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "upgradeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "The bump nonce for the collections PDA (1)."
            ],
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "empty",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ],
  "types": [
    {
      "name": "CreateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UpdateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UriExceedsMaxLength",
      "msg": "URI exceeds max length"
    },
    {
      "code": 6001,
      "name": "PayerMustBeUpdateAuthority",
      "msg": "Payer must be update authority"
    },
    {
      "code": 6002,
      "name": "InvalidMetadataAccount",
      "msg": "Invalid Metadata Account"
    },
    {
      "code": 6003,
      "name": "InvalidMetadataNameField",
      "msg": "Invalid Metadata Name Field"
    }
  ]
};
