export interface GitHubData {
  login: string;
  id: number;
  name: string | null;
  company: string | null;
  blog: string | null;
  email: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
  avatar_url: string;
}
