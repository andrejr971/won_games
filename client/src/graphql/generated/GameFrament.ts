/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFrament
// ====================================================

export interface GameFrament_developers {
  __typename: "Developer";
  name: string;
}

export interface GameFrament_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GameFrament {
  __typename: "Game";
  name: string;
  slug: string;
  developers: GameFrament_developers[];
  cover: GameFrament_cover | null;
  price: number;
}
