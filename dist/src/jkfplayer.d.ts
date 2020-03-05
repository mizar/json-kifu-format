/** @license
 * JSON Kifu Format
 * Copyright (c) 2014 na2hiro (https://github.com/na2hiro)
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
import { Piece, Shogi } from "shogi.js";
import { IJSONKifuFormat, IMoveFormat, IMoveMoveFormat, IStateFormat } from "./Formats";
export default class JKFPlayer {
    static debug: boolean;
    static logs: any[];
    static log(...lg: any[]): void;
    static parse(kifu: string, filename?: string): JKFPlayer;
    static parseJKF(kifu: string): JKFPlayer;
    static parseKIF(kifu: string): JKFPlayer;
    static parseKI2(kifu: string): JKFPlayer;
    static parseCSA(kifu: string): JKFPlayer;
    static addLastNewLine(kifu: string): string;
    static numToZen(n: number): string;
    static numToKan(n: number): string;
    static kindToKan(kind: string): string;
    static relativeToKan(relative: string): any;
    static specialToKan(special: string): any;
    static moveToReadableKifu(mv: IMoveFormat): string;
    static doMove(shogi: Shogi, move: IMoveMoveFormat): void;
    static undoMove(shogi: Shogi, move: IMoveMoveFormat): void;
    static getState(shogi: Shogi): IStateFormat;
    private static sameMoveMinimal;
    private static getBoardState;
    private static getHandsState;
    shogi: Shogi;
    kifu: IJSONKifuFormat;
    tesuu: number;
    forkPointers: {
        te: number;
        forkIndex: number;
    }[];
    private forks_;
    private currentStream_;
    get forks(): {
        te: number;
        moves: IMoveFormat[];
    }[];
    get currentStream(): IMoveFormat[];
    constructor(kifu: IJSONKifuFormat);
    initialize(kifu: IJSONKifuFormat): void;
    forward(): boolean;
    backward(): boolean;
    goto(tesuu: number | string): void;
    go(tesuu: number | string): void;
    forkAndForward(num: number | string): boolean;
    inputMove(move: IMoveMoveFormat): boolean;
    getBoard(x: number, y: number): Piece;
    getComments(tesuu?: number): string[];
    getMove(tesuu?: number): IMoveMoveFormat;
    getReadableKifu(tesuu?: number): string;
    getReadableForkKifu(tesuu?: number): string[];
    getMaxTesuu(): number;
    toJKF(): string;
    getState(): IStateFormat;
    getReadableKifuState(): {
        kifu: string;
        forks: string[];
        comments: string[];
    }[];
    private updateForksAndCurrentStream;
    private getMoveFormat;
    private getNextFork;
    private doMove;
    private undoMove;
}
