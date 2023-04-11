import { FC, useCallback, useState } from 'react'
import githubProfileSearch, { GitHubProfile } from './api/githubProfileSearch';
import ProfileResult from './components/ProfileResult/ProfileResult';
import SearchBar, { SearchBarFormElement } from './components/SearchBar/SearchBar'

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [githubProfile, setGithubProfile] = useState<GitHubProfile|undefined>();
  const searchBarId = 'profile-search';

  const onSubmit = useCallback(async (e: React.FormEvent<SearchBarFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setGithubProfile(undefined);
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;

    if (!username) {
      setIsLoading(false);
      return;
    }

    const response = await githubProfileSearch.search(username);
    setGithubProfile(response);
    setIsLoading(false);
  }, []);

  return (
    <div className="app light">
      <header>
        <h1>GitHub Profile Search</h1>
      </header>
      <main>
        <SearchBar label="GitHub Username" inputId={searchBarId} onSubmit={onSubmit} isLoading={isLoading}/>
        {githubProfile && <ProfileResult {...githubProfile} />}
      </main>
    </div>
  )
}

export default App
