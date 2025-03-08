import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

router.post('/add-project', ProjectController.addProjectData);
router.get('/', ProjectController.getAllProjectData);
router.delete('/delete-project', ProjectController.deleteProjectData);
router.put('/update-project', ProjectController.updateProjectData);

export const ProjectRoutes = router;
