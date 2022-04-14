import {images} from './assets';
import {stringConstants} from './stringConstants';

export const servicesData = [
  {
    title: stringConstants.medicine,
    image: images.medicine_icon,
  },
  {
    title: stringConstants.vaccine,
    image: images.vaccine_icon,
  },
  {
    title: stringConstants.tooth,
    image: images.tooth_icon,
  },
  {
    title: stringConstants.heart,
    image: images.heart_icon,
  },
];

export const packageData = [
  {
    title: stringConstants.health_consultation,
    subtitle: stringConstants.consultant_doc,
    image: images.consultant_doc_image,
  },
  {
    title: stringConstants.tooth_care,
    subtitle: stringConstants.tooth_doc,
    image: images.tooth_doc_image,
  },
];

export const slides = [
  {
    key: 1,
    image: images.onboarding_image_one,
    title: stringConstants.onboarding_title,
    description: stringConstants.onboarding_sub_title,
  },
  {
    key: 2,
    image: images.onboarding_image_one,
    title: stringConstants.onboarding_title,
    description: stringConstants.onboarding_sub_title,
  },
  {
    key: 3,
    image: images.onboarding_image_one,
    title: stringConstants.onboarding_title,
    description: stringConstants.onboarding_sub_title,
  },
];
