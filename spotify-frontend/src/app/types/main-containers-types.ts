
export type TSearchResults = {
  href: string,
  items: TSearchTrack[]
}

export type TSearchTrack = {
  album: TAlbum,
  artists: TArtist[],
  name: string,
  type: "album" | "track"
}

export type TAlbumImage = {
  height: number,
  width: number,
  url: string
}

export type TAlbum = {
  name: string,
  images: TAlbumImage[]
}

export type TArtist = {name: string}