/** @license
 * JSON Kifu Format
 * Copyright (c) 2014 na2hiro (https://github.com/na2hiro)
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
import { Color } from "shogi.js";

/**
 * Kifu format
 */
export interface IJSONKifuFormat {
  header: { [index: string]: string };
  initial?: {
    preset: string;
    data?: IStateFormat;
  };
  moves: IMoveFormat[];
}

/**
 * Game state
 */
export interface IStateFormat {
  color: Color;
  board: IPiece[][];
  hands: { [index: string]: number }[];
}

/**
 * Piece
 * TODO: Make color and kind nonnull
 */
export interface IPiece {
  color?: Color;
  kind?: string;
}

/**
 * Abstract Move
 */
export interface IMoveMoveFormat {
  color: Color;
  from?: IPlaceFormat;
  to?: IPlaceFormat;
  piece: string;
  same?: boolean;
  promote?: boolean;
  capture?: string;
  relative?: string;
}

/**
 * Move
 */
export interface IMoveFormat {
  comments?: string[];
  move?: IMoveMoveFormat;
  time?: {
    now: ITimeFormat;
    total: ITimeFormat;
  };
  special?: string;
  forks?: IMoveFormat[][];
}

/**
 * Elapsed Time
 */
export interface ITimeFormat {
  h?: number;
  m: number;
  s: number;
}

/**
 * Position on boards
 */
export interface IPlaceFormat {
  x: number;
  y: number;
}
