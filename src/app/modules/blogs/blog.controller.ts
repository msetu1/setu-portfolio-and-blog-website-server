import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const addBlogData = catchAsync(async (req, res) => {
  const result = await BlogServices.addBlogDataIndoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data Added Successfully',
    data: result,
  });
});
const getAllBlogData = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data retrieved successfully',
    data: result,
  });
});
const deleteBlogData = catchAsync(async (req, res) => {
  const result = await BlogServices.deletedBlogIntoDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data deleted successfully',
    data: result,
  });
});
const updateBlogData = catchAsync(async (req, res) => {
  const result = await BlogServices.updateBlogIntoDB(
    req.body.blogId,
    req.body.blogInfo,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data updated successfully',
    data: result,
  });
});

export const BlogController = {
  addBlogData,
  getAllBlogData,
  deleteBlogData,
  updateBlogData,
};
