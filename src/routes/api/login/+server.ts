import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST:RequestHandler=({url})=>{
 console.log(url,"This is to just test");
 return json({"This iis for testing"});
}