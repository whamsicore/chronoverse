import * as anchor from "@project-serum/anchor";

export function encode(str: string) {
  return Buffer.from(anchor.utils.bytes.utf8.encode(str));
}
