import React from 'react';
import {shallow, mount} from 'enzyme';
import Task from '../components/task.js';
import {
    ADD_TASK,
    addTask,
    GET_TASK_SUCCESS,
    getTaskSuccess,
    getTask,
    postTask,
    deleteTask,
    editTask
} from './action-task.js'

const dispatch = jest.fn();
const tasks = ['Task1', 'Task2']
const task = {
    taskTitle: 'Task sample',
    taskDueDate: Date.now(),
    taskDetail: 'Task sample details',
    taskProject: 'Task Project'
};

describe('addTask', () => {
    it('should return the action', () => {
        const projectTask = 'Add Task';
        const action = addTask(projectTask);
        expect(action.type).toEqual(ADD_TASK);
        expect(action.projectTask).toEqual(projectTask);
    });
});   //describe 'addTask'

describe('getTaskSuccess', () => {
    it('should dispatch getTaskSuccess', () => {
        const action = getTaskSuccess(tasks);
        console.log(tasks);
        expect(action.type).toEqual(GET_TASK_SUCCESS);
        expect(action.tasks).toEqual(tasks);
    });
}); //describe 'getTaskSuccess'

describe('postTask', () => {
    xit('should dispatch postTask', () => {

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return task;
                }
            })
        );


      console.log(dispatch)
      return postTask(task)(dispatch).then(() => {
              expect(dispatch).toHaveBeenCalledWith(addTask(task));
      }); //return postTask
  }); //it 'should dispatch postTask'
}); //describe 'postTask'

describe('getTask', () => {
    const mockGetTask = {
      type: 'GET_TASK_SUCCESS'
    };
    jest.mock('./action-task.js', () => Object.assign({},
        require.requireActual('./action-task.js'),
        {
            getTaskSuccess: jest.fn().mockImplementation(() => {
                return mockGetTask;
            }) //getTaskSuccess:
        } //require.requireActual
    )) //jest.mock

    it('should dispatch getTask', () => {
        mount(	<Task {...task} dispatch={dispatch}/>);
        expect(dispatch).toHaveBeenCalledWith(mockGetTask);
    }); //it 'should dispatch getTask'

    xit('should dispatch getTask', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return tasks;
                }
            }) //Promise.resolve
        ) //global.fetch

        const dispatch = jest.fn();
        console.log(getTask(tasks)(dispatch));
        return getTask(tasks)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(tasks);
        }); //return getTask
    }) //it 'should dispatch getTask'
}) //describe 'getTask'
