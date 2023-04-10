import { FC } from "react"

export interface RepositoryResult {
    name: string;
    url: string;
    description: string;
    topics: string[];
}

export interface ProfileResult {
    username: string;
    name: string;
    avatar: string;
    url: string;
    numFollowers: number;
    repositories: RepositoryResult[];
}

const ProfileResult: FC<ProfileResult> = ({
    username,
    name,
    avatar,
    url,
    numFollowers,
    repositories
}) => {
    return (
        <div className="profile-search-result">
            <div className="profile-search-result__profile">
                <img src={avatar} alt={`${name}'s avatar`} />
                <h2>
                    <span>{name}</span>
                    <span><a href={url} target="_blank">{username}</a></span>
                </h2>
                <p><span>{numFollowers}</span> followers</p>
            </div>
            <div className="profile-search-result__repositories">
                <h3>Latest Repositories</h3>
                {!repositories?.length && <p>{name} has no repositories</p>}
                {repositories?.map(({url, name, topics, description}) => 
                    <div className="profile-search-result__repo" key={url}>
                        <h2><a href={url} target="_blank">{name}</a></h2>
                        <p>{description}</p>
                        {topics?.length && (
                            <ul>
                                {topics.map(topic => <li key={topic}>{topic}</li>)}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileResult