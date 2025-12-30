// localStorage utilities with type safety and error handling

const SIDEBAR_STATE_KEY = 'admin_dashboard_sidebar_state';

export interface SidebarState {
  isCollapsed: boolean;
}

/**
 * Get sidebar state from localStorage
 * @returns Sidebar state or null if not found
 */
export function getSidebarState(): SidebarState | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(SIDEBAR_STATE_KEY);
    if (!stored) return null;
    
    return JSON.parse(stored) as SidebarState;
  } catch (error) {
    console.error('Error reading sidebar state from localStorage:', error);
    return null;
  }
}

/**
 * Save sidebar state to localStorage
 * @param state - Sidebar state to save
 */
export function setSidebarState(state: SidebarState): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving sidebar state to localStorage:', error);
  }
}

/**
 * Clear sidebar state from localStorage
 */
export function clearSidebarState(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(SIDEBAR_STATE_KEY);
  } catch (error) {
    console.error('Error clearing sidebar state from localStorage:', error);
  }
}
