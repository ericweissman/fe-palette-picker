import { projectsReducer } from '../projectsReducer'
import * as actions from '../../actions'

describe('projectsReducer', () => {
  it('should return intial state', () => {
    const expected = []
    const result = projectsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should add all projects to state', () => {
    const initialState = []
    const expected = [{ project_name: 'A', id: 1 }, { project_name: 'B', id: 2 }]
    const result = projectsReducer(initialState, actions.getProjectsSuccess([{ project_name: 'A', id: 1 }, { project_name: 'B', id: 2 }]))
    expect(result).toEqual(expected)
  })

  it('should add a project to state', () => {
    const initialState = [{ project_name: 'A', id: 1 }]
    const expected = [{ project_name: 'A', id: 1 }, { project_name: 'B', id: 2 }]
    const result = projectsReducer(initialState, actions.addProjectSuccess({ project_name: 'B', id: 2 }))
    expect(result).toEqual(expected)
  })

  it('should delete a project from state', () => {
    const initalState = [{ project_name: 'A', id: 1 }, { project_name: 'B', id: 2 }]
    const expected = [{ project_name: 'A', id: 1 }]
    const result = projectsReducer(initalState, actions.deleteProjectSuccess('2'))
    expect(result).toEqual(expected)
  })

  it('should edit a project in state', () => {
    const initalState = [{ project_name: 'A', id: 1 }, { project_name: 'B', id: 2 }]
    const expected = [{ project_name: 'A', id: 1 }, { project_name: 'EDITED', id: 2 }]
    const result = projectsReducer(initalState, actions.editProjectSuccess({ project_name: 'EDITED', id: 2 }))
  })
})