import { QueryClient } from '@tanstack/react-query';

export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const queryClient = new QueryClient();
