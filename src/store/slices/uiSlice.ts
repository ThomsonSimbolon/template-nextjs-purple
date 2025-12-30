import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Toast, ModalState } from '@/types';
import { getSidebarState, setSidebarState } from '@/lib/localStorage';

interface UIState {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  modals: Record<string, ModalState>;
  toasts: Toast[];
}

// Initialize sidebar state from localStorage
const savedState = getSidebarState();

const initialState: UIState = {
  sidebarCollapsed: savedState?.isCollapsed ?? false,
  mobileSidebarOpen: false,
  modals: {},
  toasts: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      // Persist to localStorage
      setSidebarState({ isCollapsed: state.sidebarCollapsed });
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
      // Persist to localStorage
      setSidebarState({ isCollapsed: action.payload });
    },
    toggleMobileSidebar: (state) => {
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
    setMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileSidebarOpen = action.payload;
    },
    openModal: (state, action: PayloadAction<{ id: string; type?: string; data?: any }>) => {
      state.modals[action.payload.id] = {
        isOpen: true,
        type: action.payload.type,
        data: action.payload.data,
      };
    },
    closeModal: (state, action: PayloadAction<string>) => {
      if (state.modals[action.payload]) {
        state.modals[action.payload].isOpen = false;
      }
    },
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const {
  toggleSidebar,
  setSidebarCollapsed,
  toggleMobileSidebar,
  setMobileSidebarOpen,
  openModal,
  closeModal,
  addToast,
  removeToast,
} = uiSlice.actions;

export default uiSlice.reducer;
