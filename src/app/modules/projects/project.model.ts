import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  live_link: { type: String, required: true },
  client_link: { type: String, required: true },
  server_link: { type: String, required: true },
  description: { type: String, required: true },
  technology: { type: String, required: true },
  image: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
  },
});

export const Project = model<TProject>('Project', projectSchema);
