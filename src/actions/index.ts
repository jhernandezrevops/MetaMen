/**
 * METAMEN100 - Server Actions Exports
 * Exportaciones centralizadas de Server Actions
 */

// Utils
export { success, error, validateInput, handleError, ErrorCodes } from './utils';
export type { ActionResult } from './utils';

// Tasks
export { getTaskDefinitions, getTodayTasks, completeTask, isTaskCompletedToday } from './tasks';

// Avatar
export {
  getCurrentAvatar,
  createAvatar,
  processJudgementNight,
  resurrectAvatar,
  getAvatarStats,
} from './avatar';

// Shop
export { getShopItems, getInventory, purchaseItem, toggleEquipItem } from './shop';
