import { readLines } from "https://deno.land/std/io/mod.ts";

export async function getInput(stdin = Deno.stdin, stdout = Deno.stdout) {
    const buf = new Uint8Array(1024);
    const n = <number>await stdin.read(buf);
    const answer = new TextDecoder().decode(buf.subarray(0, n));
    const strs = answer.split(" ");
    return (strs.map(el => parseInt(el)));
}