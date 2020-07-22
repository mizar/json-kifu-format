/** @license
 * JSON Kifu Format
 * Copyright (c) 2014 na2hiro (https://github.com/na2hiro)
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
import { Color } from "shogi.js";
import { IJSONKifuFormat, IPlaceFormat } from "./Formats";
export declare function canPromote(place: IPlaceFormat, color: Color): boolean;
export declare function normalizeMinimal(obj: IJSONKifuFormat): IJSONKifuFormat;
/**
 * Normalize JKF
 * @param obj JKF. TODO: Introduce a type which is not a normalized KIF
 */
export declare function normalizeKIF(obj: IJSONKifuFormat): IJSONKifuFormat;
export declare function normalizeKI2(obj: IJSONKifuFormat): IJSONKifuFormat;
export declare function normalizeCSA(obj: IJSONKifuFormat): IJSONKifuFormat;
