import { FC, useCallback, useState } from "react";
import githubProfileSearch, { GitHubProfile } from "./api/githubProfileSearch";
import ProfileResult from "./components/ProfileResult/ProfileResult";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import { useTheme } from "./contexts/Theme";

const App: FC = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [githubProfile, setGithubProfile] = useState<
    GitHubProfile | undefined
  >();
  const searchBarId = "profile-search";

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className={`app ${theme}`}>
      <header>
        <h1>GitHub Profile Search</h1>
        <ThemeSelector />
      </header>
      <main>
        <SearchBar
          label="GitHub Username"
          inputId={searchBarId}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        {githubProfile && <ProfileResult {...githubProfile} />}
      </main>
    </div>
  );
};

export default App;
