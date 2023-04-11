import { FC } from "react";
import { GitHubProfile } from "../../api/githubProfileSearch";

const ProfileResult: FC<GitHubProfile> = ({
  login,
  name,
  avatar_url,
  html_url,
  followers,
  repositoryCount,
  repositories,
}) => {
  return (
    <div className="profile-search-result">
      <div className="profile-search-result__profile">
        <img
          src={avatar_url}
          alt={`${name}'s avatar`}
          width="160"
          height="160"
        />
        <div className="profile-search-result__profile-info">
          <h2>
            <span>{name}</span>
            <span>
              <a href={html_url} target="_blank">
                {login}
              </a>
            </span>
          </h2>
          <p>
            <span>{followers} followers</span>{" "}
            <span>{repositoryCount} repositories</span>
          </p>
        </div>
      </div>
      <div className="profile-search-result__repositories">
        <h3>Latest Repositories</h3>
        {!repositories?.length && <p>{name} has no repositories</p>}
        {repositories && (
          <ul>
            {repositories.map(({ id, html_url, name, description }) => (
              <li className="profile-search-result__repo" key={id}>
                <h2>
                  <a href={html_url} target="_blank">
                    {name}
                  </a>
                </h2>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileResult;
