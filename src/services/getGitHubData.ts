import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGitHubData() {
  const res = await octokit.request("GET /user");
  console.log(res.data);
  if (res.status !== 200) return {};
  return res.data;
}

export async function getGitHubRepoData() {
  const res = await octokit.request("GET /user/repos");
  if (res.status !== 200) return [];
  return res.data;
}
