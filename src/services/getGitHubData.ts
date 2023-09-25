import type { GitHubData } from "@/types/GitHubData";
import { Octokit } from "octokit";

const DUMMY_DATA: GitHubData = {
  login: "",
  id: 0,
  name: null,
  company: null,
  blog: null,
  email: null,
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
};

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export async function getGitHubData(): Promise<GitHubData> {
  const res = await octokit.request("GET /user");
  console.log(res.data);
  if (res.status !== 200) return DUMMY_DATA;
  return res.data;
}
