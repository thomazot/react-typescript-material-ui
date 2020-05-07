import React from 'react'
import { ThemeDefault } from "themes"
import RepositoryList from "components/repository/list";

const Home: React.FC = () => (
    <ThemeDefault>
        <RepositoryList />
    </ThemeDefault>
)

export default Home