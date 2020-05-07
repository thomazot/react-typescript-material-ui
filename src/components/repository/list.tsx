import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NoSsr } from "@material-ui/core"
import { Repository } from '../../stores/repositories/types'
import { loadRequest } from '../../stores/repositories/actions'
import { ApplicationState } from '../../stores/index'
import RepositoryItem from './item'


const RepositoryList = () => {
    const dispatch = useDispatch()
    const repositories: Repository[] = useSelector(
        (state: ApplicationState) => state.repositories.data,
    )

    useEffect(() => {
        dispatch(loadRequest())
    }, [dispatch])

    return (
        <NoSsr>
            {repositories.map((repository) => (
                <RepositoryItem key={repository.id} repository={repository} />
            ))}
        </NoSsr>
    )
}

export default RepositoryList
