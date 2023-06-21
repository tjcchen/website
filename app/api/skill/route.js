/**
 * /api/skill API handler
 * 
 * @author Andy Chen
 */
import { sleep } from "@/utils/utils";
import data from "@/data/skill";

// GET request
export const GET = async (req, res) => {
  const sourceData = data;

  await sleep(300);

  return new Response(JSON.stringify(sourceData), {
    status: 200
  });
};