import type { Core } from '@strapi/strapi';
import { seedMeridianContent } from './seed/seed-meridian-content';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    if (process.env.CMS_SEED_ON_BOOT !== 'true') {
      return;
    }

    await seedMeridianContent(strapi);
  },
};
