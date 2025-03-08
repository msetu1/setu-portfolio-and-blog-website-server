import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const addProjectData = catchAsync(async (req, res) => {
  const result = await ProjectServices.addProjectDataIndoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data Added Successfully',
    data: result,
  });
});
const getAllProjectData = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data retrieved successfully',
    data: result,
  });
});
const deleteProjectData = catchAsync(async (req, res) => {
  const result = await ProjectServices.deletedProjectIntoDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data deleted successfully',
    data: result,
  });
});
const updateProjectData = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProjectIntoDB(
    req.body.projectId,
    req.body.projectInfo,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data updated successfully',
    data: result,
  });
});

export const ProjectController = {
  addProjectData,
  getAllProjectData,
  deleteProjectData,
  updateProjectData,
};
