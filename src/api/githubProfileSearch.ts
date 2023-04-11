import api from ".";

/**
 * Excerpt from github users api https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
 */
export interface User {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    followers: number;     
}

/**
 * Excerpt from github repos api https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
 */
export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export interface GitHubProfile extends User {
    repositoryCount: number;
    repositories: Repository[];
}

export class GitHubProfileSearchApi {
    private baseUsersEndpoint(): string {
        return 'https://api.github.com/users/';
    }

    async search(username: string): Promise<GitHubProfile | undefined> {
        try {
            const user = await api.get<User>(`${this.baseUsersEndpoint()}${username}`);

            if (!user?.login ) {
                alert(`A GitHub profile for ${username} was not found.`);
                return;
            }

            const repos = await api.get<Repository[]>(`${this.baseUsersEndpoint()}${username}/repos?sort=created`);

            if (repos) {
                return {...user, repositoryCount: repos.length, repositories: repos.slice(0, 4)};
            }       
        } catch (_) {
            alert(`An error occurred while searching for the GitHub user ${username}. Please try again later.`);
        }
    }
}

const githubProfileSearch = new GitHubProfileSearchApi();
export default githubProfileSearch;