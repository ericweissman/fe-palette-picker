import { handleProject } from '../handleProject'
import { isLoading, hasErrored, getProjectsSuccess, addProjectSuccess, deleteProjectSuccess, editProjectSuccess } from '../../actions'

describe('handleProject', () => {
  let mockURL
  let mockDispatch

  beforeEach(() => {
    mockURL = 'http://localhost:3001'
    mockDispatch = jest.fn()
  })

  it('should call dispatch with isLoading(true) action', () => {
    const thunk = handleProject(mockURL, getProjectsSuccess, 'GET')
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error',
    }))

    const thunk = handleProject(mockURL, getProjectsSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'))
  })

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }))

    const thunk = handleProject(mockURL, getProjectsSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch getProjectsSuccess', async () => {
    const mockProject = { project_name: 'Cool Project' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockProject),
      ok: true
    }))

    const thunk = handleProject(mockURL, getProjectsSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(getProjectsSuccess(mockProject))
  })

  it('should dispatch addProjectSuccess', async () => {
    const mockProject = { project_name: 'Cool Project' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockProject),
      ok: true
    }))

    const thunk = handleProject(mockURL, addProjectSuccess, 'POST', mockProject)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(addProjectSuccess(mockProject))
  })

  it('should dispatch deleteProjectSuccess', async () => {
    const mockProject = { project_name: 'Cool Project' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockProject),
      ok: true
    }))

    const thunk = handleProject(mockURL, deleteProjectSuccess, 'DELETE', mockProject)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(deleteProjectSuccess(mockProject))
  })

  it('should dispatch editProjectSuccess', async () => {
    const mockProject = { project_name: 'New Cool Project' }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockProject),
      ok: true
    }))

    const thunk = handleProject(mockURL, editProjectSuccess, 'PUT', mockProject)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(editProjectSuccess(mockProject))
  })
})