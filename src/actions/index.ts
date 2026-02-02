/**
 * METAMEN100 - Server Actions Exports
 * Exportaciones centralizadas de Server Actions
 */

// Utils
export { success, error, validateInput, handleError, ErrorCodes } from './utils';
export type { ActionResult } from './utils';

// Tasks
export { completeTask } from './tasks/complete-task';
export { getTodayTasks } from './tasks/get-today-tasks';

// Store
export { purchaseItem } from './store/purchase-item';

// Inventory
export { equipItem } from './inventory/equip-item';

// Profile
export { getProfile } from './profile/get-profile';

// Payments
export { createCheckout } from './payments/create-checkout';

// Legacy exports (mantener compatibilidad)
export {
  getCurrentAvatar,
  createAvatar,
  processJudgementNight,
  resurrectAvatar,
  getAvatarStats,
} from './avatar';

export { getShopItems, getInventory, toggleEquipItem } from './shop';

export { getTaskDefinitions, isTaskCompletedToday } from './tasks';
