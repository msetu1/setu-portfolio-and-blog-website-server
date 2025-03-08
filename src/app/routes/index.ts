import { Router } from 'express';
import { ProjectRoutes } from '../modules/projects/project.route';
import { BlogRoutes } from '../modules/blogs/blog.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  //   {
  //     path: '/message',
  //     route: contactRoutes,
  //   },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
