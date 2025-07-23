import { customAlphabet } from "nanoid";
import 'react-native-get-random-values';

const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const nanoid = customAlphabet(alphabet);

const prefixes = {
	user: "usr",
	progress: "prg",
	image: "img",
} as const;

export type IdPrefix = keyof typeof prefixes;

export function newId(prefix: IdPrefix): string {
	return [prefixes[prefix], nanoid(17)].join("_");
}
