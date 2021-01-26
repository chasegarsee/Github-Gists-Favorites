export const DBConfig = {
    name: "FavoriteGists",
    version: 1,
    objectStoresMeta: [
      {
        store: "gists",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [{ name: "gist", keypath: "id", options: { unique: false } }],
      },
    ],
  }